import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import OurProduct from "./components/OurProduct";
import ProductDetail from "./components/ProductDetail";
import Footer from "./components/Footer";

function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setItems(json))
  }, [])
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home items={items} />} />
        <Route exact path="/products" element={<OurProduct items={items} />} />
        <Route exact path="/products/:id" element={<ProductDetail items={items} />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact-us" element={<Contact />} />

      </Routes>
      <Footer />
    </Router>

  )
}

export default App
