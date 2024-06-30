import { createContext, useReducer } from "react";
import React from "react";

export const totalItems = (cart) => {
  return cart.reduce((sum, product) => sum + product.quantity, 0);
};

export const totalPrice = (cart) => {
  return cart.reduce(
    (total, product) => total + product.quantity * product.price,
    0
  );
};
const CartContext = createContext();

const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.product];
    case "REMOVE":
      return state.filter((p) => p.id !== action.id);

    case "INCREASE":
      const IndexI = state.findIndex((p) => p.id === action.id);
      state[IndexI].quantity += 1;
      return [...state];
    case "DECREASE":
      const IndexD = state.findIndex((p) => p.id === action.id);
      state[IndexD].quantity -= 1;
      return [...state];
    default:
      return state;
  }
};
const CartContextProvider = ({ children }) => {
  let [cart, dispatch] = useReducer(CartReducer, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        dispatch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export { CartContext, CartContextProvider };
