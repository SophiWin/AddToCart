import React from "react";
import { Link } from "react-router-dom";
import cartIcon from "../assets/cart.svg";
export default function Footer() {
  return (
    <div className=" mt-auto ">
      <div className=" flex justify-evenly items-center py-4 bg-purple-500 text-white font-semibold text-lg ">
        <Link to="/">
          <div className="hover:scale-105">Home</div>
        </Link>

        <Link to="/cart">
          <div className="hover:scale-105">
            <img src={cartIcon} className="h-7 w-7 " />
          </div>
        </Link>

        <Link to="/signIn">
          <div className="hover:scale-105">Sign In</div>
        </Link>
      </div>
    </div>
  );
}
