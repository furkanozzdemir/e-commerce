import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./productStyle.css";
import Navbar from "../../components/navbar/Navbar";
import ProductCard from "../../components/product/ProductCard";

function Product() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios("https://fakestoreapi.com/products").then((res) =>
      setProducts(res.data)
    );
  }, []);

  return (
    <div className="product-section ">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}

export default Product;
