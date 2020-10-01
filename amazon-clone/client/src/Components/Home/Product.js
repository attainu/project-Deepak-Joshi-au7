import React from "react";
import "./Product.css";
// import product_img from "../../images/products/img1.jpg";

export default function Product(props) {
  return (
    <div className="product">
      <div className="product__info">
        <p> {props.title}</p>
        <p className="product__price">
          <small>Rs: </small>
          <strong>{props.price}</strong>
        </p>
        <div className="product__rating">
          {Array(props.rating)
            .fill()
            .map((_, i) => (
              <p>{"*"}</p>
            ))}
        </div>
      </div>
      <img src={props.image} alt="coming soon.." />
      <button>Add to Kart</button>
    </div>
  );
}
