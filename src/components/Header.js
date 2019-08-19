import React from 'react';
import Logo from './Logo';
import ShoppingCart from './ShoppingCart'
import NavBar from './NavBar';

const Header = () => (
  <header id='header'>
    <div id='header-content'>
      <Logo />
      <ShoppingCart />
    </div>
    <NavBar />
  </header >
)

export default Header;