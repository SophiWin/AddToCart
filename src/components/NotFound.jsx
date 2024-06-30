import React from "react";

export default function NotFound() {
  return (
    <div className="bg-purple-700 ">
      <div className="text-purple-400 font-bold italic ">
        <p className="text-5xl">404</p>
        <p className="text-2xl">Page Not Found</p>
      </div>
      <button className="  text-lg bg-black  text-white rounded-md px-3 py-1.5">
        Back to Home
      </button>
    </div>
  );
}
