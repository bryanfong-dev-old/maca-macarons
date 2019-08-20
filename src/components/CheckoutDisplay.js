import React from 'react';


const CheckoutDisplay = ({ item, image }) => (
  <div className="checkout-item-wrapper">
    <h4 className="checkout-item-name">{item.name}</h4>
    <h4 className="checkout-item-type">{item.type}</h4>
    <h4 className="checkout-item-price">${item.price}.00</h4>
    <img className="checkout-item-image" src={image} />
    <button className="checkout-remove-button">Remove</button>
  </div>
)

export default CheckoutDisplay;