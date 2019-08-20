import React from 'react';
import Logo from './Logo';
import ShoppingCart from './ShoppingCart'
import NavBar from './NavBar';

const Header = ({ openCart, cartCount }) => (
  <header id='header'>
    <Logo />
    <ShoppingCart openCart={openCart} cartCount={cartCount} />
    <NavBar />
  </header>
)

export default Header;