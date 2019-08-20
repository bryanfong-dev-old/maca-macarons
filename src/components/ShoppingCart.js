import React from 'react';
import cartIcon from '../assets/svg/cart_icon.svg';

const ShoppingCart = ({ openCart }) => (
  <div id='cart' onClick={() => openCart()}>
    <img src={cartIcon} id='cart-icon' alt='cart-icon' />
    <p id='cart-text'>CART</p>
  </div>
)

export default ShoppingCart;