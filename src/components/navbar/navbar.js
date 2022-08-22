import React from "react";

import "./navbar.scss";

function Navbar() {
  const [menuVisibile, setMenuVisible] = React.useState(false);

  const menu = [
    {
      name: "Skills",
      icon: "fa-solid fa-file fa-fw",
    },
    {
      name: "Experiences",
      icon: "fa-solid fa-briefcase fa-fw",
    },
    {
      name: "Projects",
      icon: "fa-solid fa-code fa-fw",
    },
    {
      name: "Educations",
      icon: "fa-solid fa-book fa-fw",
    },
    {
      name: "About",
      icon: "fa-solid fa-user fa-fw",
    },
  ];

  return (
    <nav className="navbar container">
      <a href="#" className="navbar_logo">
        <p className="first_name">
          JAYSON <span className="last_name">TEAÑO</span>
        </p>
      </a>

      <div>
        <div
          className={`navbar_menu ${menuVisibile ? "show_menu" : ""}`}
          id="navbar-menu"
        >
          <ul className="navbar_list grid">
            {menu.map((item, index) => (
              <li key={index} className="navbar_item">
                <a
                  className="navbar_link"
                  href={`#${item.name.replace(" ", "-").toLowerCase()}`}
                  onClick={() => setMenuVisible(false)}
                >
                  <i className={`${item.icon} navbar_icon`}></i>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar_btns">
          <div
            className="navbar_toggle"
            id="navbar-toggle"
            onClick={() => setMenuVisible(!menuVisibile)}
          >
            <i className="fa fa-bars navbar_icon"></i>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
