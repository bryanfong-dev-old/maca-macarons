import React from 'react';
import cartIcon from '../assets/cart_icon.svg'

const Header = () => (
  <header id="header">
    <div id="header-content">
      <div id="header-title">
        <span> MACA</span><span>RONS</span>
      </div>
      <div id="cart">
        <img src={cartIcon} id="cart-icon" alt="cart-icon" />
        <p id="cart-text">CART</p>
      </div>
    </div>
  </header >
)

export default Header;