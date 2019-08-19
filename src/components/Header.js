import React from 'react';
import Logo from './Logo';
import ShoppingCart from './ShoppingCart'
import NavBar from './NavBar';

const Header = () => (
  <header id='header'>
    <Logo />
    <ShoppingCart />
    <NavBar />
  </header>
)

export default Header;