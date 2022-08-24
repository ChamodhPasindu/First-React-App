import React from "react";
import {Route, Routes} from "react-router-dom";
import Product from "./pages/Product";
import Customer from "./pages/Customer";
import HomePage from "./pages/Home";


function App() {
  return (
      <Routes>
        <Route path="product" element={<Product />} />
        <Route path="customer" element={<Customer />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
  );
}

export default App;
