import { useState } from "react";

import { links, social } from "./data";
import logo from "./logo.svg";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  // state
  const [showLinks, setShowLinks] = useState(false);

  return (
    <nav>
      {/* 在 big screen 時，nav-center 才會使用到 */}
      <div className="nav-center">
        {/* header 的部分  */}
        <div className="nav-header">
          <img src={logo} alt="logo" className="logo" />
          <button
            className="toggle-btn"
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>

        {/* links 的部分 */}
        <div className={showLinks ? "nav-links show-nav-links" : "nav-links"}>
          <ul className="links">
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* icons 的部分 */}
        <div className="nav-icons">
          <ul className="icons">
            {social.map((item) => {
              const { id, url, icon } = item;
              return (
                <li key={id}>
                  <a href={url}>{icon}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
