import React from 'react';
import Logo from './Logo';
import ShoppingCart from './ShoppingCart'
import NavBar from './NavBar';

const Header = ({ openCart }) => (
  <header id='header'>
    <Logo />
    <ShoppingCart openCart={openCart} />
    <NavBar />
  </header>
)

export default Header;