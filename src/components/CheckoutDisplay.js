import React from 'react';


const CheckoutDisplay = ({ item, image }) => (
  <div className="checkout-item-wrapper">
    <h4 className="checkout-item-name">{item.name}</h4>
    <h4 className="checkout-item-type">{item.type}</h4>
    <h4 className="checkout-item-price">${item.price}</h4>
    <img className="checkout-item-image" src={image} />
  </div>
)

export default CheckoutDisplay;