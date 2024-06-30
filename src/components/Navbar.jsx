import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { ThemeContext } from "../contexts/ThemeContext";
import lightIcon from "../assets/light.svg";
import darkIcon from "../assets/dark.svg";
import shopIcon from "../assets/shop.svg";

export default function Navbar() {
  let { isDark, changeTheme } = useContext(ThemeContext);
  let { cart } = useContext(CartContext);
  return (
    <nav className="md:flex md:justify-between md:items-center   bg-black text-white  md:px-20 py-3 text-xl cursor-pointer  border-b-2 border-purple-600 ">
      <div className=" font-serif italic font-bold text-2xl text-purple-500 flex items-start py-4 px-3">
        <img
          src={shopIcon}
          className="h-8 w-8 mx-3 bg-purple-400 p-1 rounded-md"
        />
        Shop
      </div>
      <hr />
      <ul className="md:flex md:justify-between md:items-center gap-20 md:mt-0 mt-6 space-y-4 md:space-y-0 px-6">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/admin">Admin</NavLink>
        </li>

        <li>
          <NavLink to="/cart">
            Cart
            <span className="text-xs align-top bg-purple-500 text-white  rounded-full px-2 mx-1">
              {cart.length}
            </span>
          </NavLink>
        </li>
        <li className="">
          <div className="cursor-pointer my-6 md:my-0 ">
            {isDark && (
              <img src={lightIcon} onClick={() => changeTheme("light")} />
            )}
            {!isDark && (
              <img src={darkIcon} onClick={() => changeTheme("dark")} />
            )}
          </div>
        </li>
      </ul>
    </nav>
  );
}
