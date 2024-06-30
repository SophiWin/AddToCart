import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import { totalItems, totalPrice } from "../contexts/CartContext";
export default function Cart() {
  const { cart, dispatch } = useContext(CartContext);
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
    <div className="h-screen">
      <Navbar />

      <div className="w-full max-w-3xl mx-auto h-auto">
        {cart &&
          cart.map((product, i) => (
            <div
              className="flex flex-row items-center justify-between mt-2 py-6  px-10 text-xl font-medium border-b-2 border-gray-300"
              key={product.id}
            >
              <img
                src={product.cover}
                alt={product.title}
                className="w-[80px] object-cover"
              />
              <div className="w-1/2 px-10 space-y-3">
                <p className="text-2xl font-medium">{product.title}</p>
                <p className="text-lg ">Price - {product.price}MMK</p>
                <button
                  onClick={() => decreaseQuantity(product.id)}
                  className="px-4    font-semibold bg-gray-500 rounded-md hover:bg-gray-500 text-white"
                >
                  -
                </button>
                <span className="px-4">{product.quantity}</span>
                <button
                  onClick={() => increaseQuantity(product.id)}
                  className="px-3   font-semibold bg-gray-500 rounded-md hover:bg-gray-600 text-white"
                >
                  +
                </button>
              </div>
              <button
                className="  text-lg bg-red-500 hover:bg-red-600 text-white rounded-md px-3 py-1.5"
                onClick={() => dispatch({ type: "REMOVE", id: product.id })}
              >
                Remove
              </button>
            </div>
          ))}
        <div className="border-purple-500 p-3 w-[300px] rounded-md border my-10 mx-auto space-x-3 text-xl font-serif ">
          <p className="text-center py-3 ">Your Cart</p>
          <hr />
          <p className="my-4">Total Items : {totalItems(cart)}</p>
          <p className="my-4">total Price : {totalPrice(cart)} MMK</p>

          <button className="  text-lg bg-purple-500 hover:bg-purple-600 text-white rounded-md px-3 py-1.5 ">
            Checkout
          </button>
          <Link to="/">
            <button className="  text-lg bg-gray-500 hover:bg-gray-600 text-white rounded-md px-3 py-1.5 ">
              Back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
