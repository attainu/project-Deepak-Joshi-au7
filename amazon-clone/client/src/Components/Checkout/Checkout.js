import React from "react";
import checkout__add from "../../images/hero_section/img5.jpg";
import Subtotal from "./Subtotal/Subtotal";
import "./Checkout.css";
import CheckoutProduct from "./BasketItem/CheckoutProduct";

export default function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" src={checkout__add} alt="" />
        <div>
          <h2 className="checkout__title">Items In Your Kart</h2>
          <CheckoutProduct />
          {}
          {}
          {}
          {}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
        <h2>this is the subtotal component</h2>
      </div>
    </div>
  );
}
