import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./pages/Cart.jsx";
import Home from "./pages/Home.jsx";
import Admin, { action as bookDataAction } from "./pages/Admin.jsx";
import { ThemeContextProvider } from "./contexts/ThemeContext.jsx";
import BookDetail from "./pages/BookDetail.jsx";
import { CartContextProvider } from "./contexts/CartContext.jsx";
import SignIn from "./pages/SignIn.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "/admin", element: <Admin />, action: bookDataAction },
      { path: "/cart", element: <Cart /> },
      { path: "/detail/:id", element: <BookDetail /> },
      { path: "/signIn", element: <SignIn /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartContextProvider>
    <ThemeContextProvider>
      <RouterProvider router={router} />
    </ThemeContextProvider>
  </CartContextProvider>
);
