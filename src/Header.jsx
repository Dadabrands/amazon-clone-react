import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="h-16 flex items-center bg-amazonBlack sticky top-0 z-100">
      <img
        src=".\amazon-logo.png"
        alt="logo"
        className="w-20 h-auto mx-5 mt-4"
      />

      <div className="header_search">
        <input className="header_searchInput" type="text" />
        {/* logo */}
      </div>

      <div className="header_nav">
        <div className="header_option"></div>
        <span className="header_optionLineOne">Hello User</span>
        <span className="header_optionLineTwo">Sign In</span>
        <div className="header_option">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo"> & Orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
