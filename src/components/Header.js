import React from 'react';
import cartIcon from '../assets/svg/cart_icon.svg';
import Logo from '../assets/svg/logo.svg';

const Header = () => (
  <header id='header'>
    <div id='header-content'>
      <div id='header-title'>
        <img src={Logo} id='cart-icon' alt='cart-icon' />
      </div>
      <div id='cart'>
        <img src={cartIcon} id='cart-icon' alt='cart-icon' />
        <p id='cart-text'>CART</p>
      </div>
    </div>
  </header >
)

export default Header;