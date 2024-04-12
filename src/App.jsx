import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ProductList from "./pages/ProductList";
import TopList from "./pages/TopList";
import Filter from "./pages/Filter";
import { useState } from "react";
import AddElement from "./pages/AddElement";
import AllProducts from "./pages/AllProduct";

function App() {
  const [value, setValue] = useState("");
  const input = (
    <input
      onChange={(e) => setValue(e.target.value)}
      value={value}
      type="text"
      placeholder="Search for products..."
    />
  );

  return (
    <>
      <BrowserRouter>
        <Header input={input} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list/:id" element={<ProductList />} />
          <Route path="/toplist/:id" element={<TopList />} />
          <Route path="/allList/:id" element={<AllProducts />} />\
          <Route path="/filter" element={<Filter value={value} />} />
          <Route path="/add" element={<AddElement />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
