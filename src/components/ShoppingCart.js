import React from 'react';
import cartIcon from '../assets/svg/cart_icon.svg';

const ShoppingCart = ({ openCart, cartCount }) => (
  <div id='cart' onClick={() => openCart()}>
    <img src={cartIcon} id='cart-icon' alt='cart-icon' />
    {cartCount > 0 && <p id="cart-count">{cartCount}</p>}
    {cartCount < 1 && <p id="cart-count" className="zero">{cartCount}</p>}
    <p id='cart-text'>CART</p>
  </div>
)

export default ShoppingCart;