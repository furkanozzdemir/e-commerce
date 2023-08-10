import React from "react";

function ProductCard({ product }) {
  return (
    <div>
      <div className="product-div" key={product?.id}>
        <div className="product-title">
          {product?.title.length > 40
            ? product?.title.substring(0, 40)
            : product?.title}
        </div>
        <div>
          <img className="product-img" src={product?.image} alt="product" />
        </div>

        <div className="product-price">{product?.price} $</div>
        <div>{product?.category}</div>
        <div>
          <button className="product-btn">add to basket</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
