import React from "react";
import { FaSearch } from "react-icons/fa";
import { BiCart } from "react-icons/bi";
import "./Header.css";

function Header() {
  return (
    <div className="h-16 flex items-center bg-amazonBlack sticky top-0 z-100">
      <img
        src=".\amazon-logo.png"
        alt="logo"
        className="w-20 h-auto mx-5 mt-4"
      />

      <div className="flex flex-1 items-center rounded-full">
        <input className="h-8 p-2.5 border-none w-full" type="text" />
        <FaSearch className="p-1 h-8 text-amazonBlack bg-amazonYellow text-2xl" />
      </div>

      <div className="flex justify-evenly">
        <div className="flex flex-col text-white ml-2 mr-2">
          <span className="text-xs">Hello User</span>
          <span className="text-sm font-[700]">Sign In</span>
        </div>
        <div className="flex flex-col text-white ml-2 mr-2">
          <span className="text-xs">Returns</span>
          <span className="text-sm font-[700]"> & Orders</span>
        </div>
        <div className="flex flex-col text-white ml-2 mr-2">
          <span className="text-xs">Your</span>
          <span className="text-sm font-[700]">Prime</span>
        </div>

        <div className="">
          <BiCart />
          <span className="text-sm font-[700]">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
