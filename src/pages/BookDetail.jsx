import React, { useContext } from "react";
import useFetch from "../hook/useFetch";
import { useParams } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";
import Navbar from "../components/Navbar";
import { CartContext } from "../contexts/CartContext";

export default function BookDetail() {
  let { isDark } = useContext(ThemeContext);
  let { cart, dispatch } = useContext(CartContext);
  let { id } = useParams();
  let {
    data: book,
    loading,
    error,
  } = useFetch(`http://localhost:3000/book/${id}`);

  const increaseQuantity = (id) => {
    const Index = cart.findIndex((p) => p.id === id);
    if (cart[Index].quantity < 10) {
      dispatch({ type: "INCREASE", id });
    }
  };
  const decreaseQuantity = (id) => {
    const Index = cart.findIndex((p) => p.id === id);
    if (cart[Index].quantity > 1) {
      dispatch({ type: "DECREASE", id });
    }
  };
  return (
    <>
      <Navbar />
      {error && <p>{error}</p>}
      {loading && <p>Loading....</p>}
      {book && (
        <div
          className={`h-screen  my-10 justify-center p-4 flex gap-5  ${
            isDark ? "text-white" : ""
          }`}
        >
          <div>
            <img src={book.cover} className="w-[200px] " />
          </div>
          <div className="space-y-5">
            <h2 className="text-3xl font-bold">{book.title}</h2>
            <h4 className="text-xl font-serif ">Price - {book.price} MMK</h4>
            <p className="text-2xl text-gray-500  ">{book.description}</p>
            <div>
              <span className="bg-blue-600 text-white rounded-full  text-center  text-sm  p-2">
                {book.category}
              </span>
            </div>
            <div>
              <button
                onClick={() => dispatch({ type: "ADD", product: book })}
                className="mr-4 text-lg bg-purple-500 text-white rounded-md px-3 py-1.5 hover:bg-purple-600"
              >
                Add to Cart
              </button>
              <button
                onClick={() => decreaseQuantity(book.id)}
                className="px-4    font-semibold bg-purple-500 rounded-md hover:bg-purple-500 text-white"
              >
                -
              </button>
              <span className="px-4 ">{book.quantity}</span>
              <button
                onClick={() => increaseQuantity(book.id)}
                className="px-3   font-semibold bg-purple-500 rounded-md hover:bg-purple-600 text-white"
              >
                +
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
