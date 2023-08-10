import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../product/ProductCard";
import "./basket.css";

const Basket = () => {
  const products = useSelector((state) => state.basket.value); // Redux store'daki ürünleri al
  useEffect(() => {}, []);

  return (
    <div className="main-basket-div">
      {products.length === 0 ? (
        <h1>Sepetinizde ürün bulunamamaktadır.Lütfen sepete ürün ekleyiniz</h1>
      ) : (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </div>
  );
};

export default Basket;
