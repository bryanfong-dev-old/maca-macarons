import React from 'react';
import cart from '../assets/cart_icon.svg'

const Header = () => (
  <header id="header">
    <div className="header-title">
      <span> MACA</span><span>RONS</span>
      <img src={cart} className="cart-icon" alt="cart-icon" />
    </div >
  </header >
)

export default Header;