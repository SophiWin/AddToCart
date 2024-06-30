import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { ThemeContext } from "./contexts/ThemeContext";

export default function App() {
  let { isDark } = useContext(ThemeContext);
  return (
    <div className={` ${isDark ? "bg-black text-white" : ""}`}>
      <Outlet />
    </div>
  );
}
