import React from 'react';


const CheckoutDisplay = ({ item, image, quantity, removeFromCart, i }) => (
  <div className="checkout-item-wrapper">
    <h4 className="checkout-item-name">{item.name}</h4>
    {item.type == 'Assorted Flavors' && <h4 className="checkout-item-type">{quantity}x {item.type}</h4>}
    {item.type == '1 piece' && <h4 className="checkout-item-type">{quantity}x Pieces</h4>}
    <h4 className="checkout-item-price">${(quantity * item.price).toFixed(2)}</h4>
    <img className="checkout-item-photo" src={image} />
    <button className="checkout-remove-button" onClick={() => removeFromCart(i)}>Remove</button>
  </div>
)

export default CheckoutDisplay;