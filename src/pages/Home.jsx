import React from "react";
import Navbar from "../components/Navbar";
import Herosection from "../components/Herosection";
import BookList from "../components/BookList";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Herosection />
      <BookList />
      <Footer />
    </div>
  );
}
