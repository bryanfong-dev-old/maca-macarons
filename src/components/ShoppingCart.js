import React from 'react';
import cartIcon from '../assets/svg/cart_icon.svg';

const ShoppingCart = () => (
  <div id='cart'>
    <img src={cartIcon} id='cart-icon' alt='cart-icon' />
    <p id='cart-text'>CART</p>
  </div>
)

export default ShoppingCart;