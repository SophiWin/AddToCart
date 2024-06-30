import React, { useContext } from "react";
import { Link } from "react-router-dom";
import useFetch from "../hook/useFetch";
import { ThemeContext } from "../contexts/ThemeContext";
import { CartContext } from "../contexts/CartContext";

export default function BookList() {
  let { data: books, loading, error } = useFetch("http://localhost:3000/book");
  let { isDark } = useContext(ThemeContext);
  let { dispatch } = useContext(CartContext);

  // let handleAddBtn = (item) => {
  //   console.log("hi");
  //   let isPresent = false;
  //   books.forEach((book) => {
  //     if (item.id === book.id) isPresent = true;
  //   });
  //   if (!isPresent) {
  //     dispatch({ type: "ADD", product: item });
  //   }
  // };

  return (
    <div className="grid grid-cols-2  md:grid-cols-5 gap-3 my-7 max-w-7xl mx-auto p-4">
      {loading && <p>Loading ...</p>}
      {error && <p>Something went wrong !</p>}
      {books &&
        books.map((b) => (
          <div
            key={b.id}
            className={`border-2 p-3 hover:scale-105 ${
              isDark ? " border-purple-400 " : ""
            }`}
          >
            <img src={b.cover} className=" w-full object-cover h-[350px]" />
            <div className="text-center space-y-2 mt-3">
              <h2 className=" font-semibold text-xl">{b.title}</h2>
              <p>{b.price} MMK</p>
            </div>
            <div className="flex justify-around items-center mt-4">
              <Link
                to={`/detail/${b.id}`}
                className="  text-lg bg-slate-600 hover:bg-slate-700 text-white rounded-md px-3 py-1.5"
              >
                Details
              </Link>
              <button
                onClick={() => {
                  dispatch({ type: "ADD", product: b });
                }}
                className="  text-lg bg-purple-500 hover:bg-purple-600 text-white rounded-md px-3 py-1.5"
              >
                Buy
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}
