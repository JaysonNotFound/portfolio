import React from "react";

function Header({ children }) {
  return (
    <header className="header" id="header">
      {children}
    </header>
  );
}

export default Header;
