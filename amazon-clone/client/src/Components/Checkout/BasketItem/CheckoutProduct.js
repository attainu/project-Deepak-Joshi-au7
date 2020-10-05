import React from "react";

function CheckoutProduct({ props }) {
  return (
    <div className="checkoutProduct">
      <img className="img1" src={} alt="product1" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{props.title}</p>
        <p className="checkoutProduct__price">
          <small>Rs: </small>
          <strong>{props.price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(props.rating)
            .fill()
            .map((_, i) => (
              <p>*</p>
            ))}
        </div>
        <button className="checkoutProduct__btn">Remove from Kart</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
