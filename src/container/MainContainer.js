import React from "react";
import { state } from '../state';
import Header from '../components/Header';
import Body from '../components/Body';
import Product from '../components/Product';
import Footer from '../components/Footer';
import CartContainer from './CartContainer';


class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = state;
    this.openCart = this.openCart.bind(this);
    this.closeCart = this.closeCart.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
  }

  openCart() {
    if (this.state.cartView == 'open') this.setState({ cartView: 'close' })
    else this.setState({ cartView: 'open' })
  }

  closeCart() {
    this.setState({ cartView: 'close' })
  }

  addToCart(key) {
    const newState = JSON.parse(JSON.stringify(this.state));
    newState.cart[key] += 1;
    newState.cartCount += 1;
    this.setState(newState);
  }

  removeFromCart(key) {
    if (this.state.cart[key] > 0) {
      const newState = JSON.parse(JSON.stringify(this.state));
      newState.cart[key] -= 1;
      newState.cartCount -= 1;
      this.setState(newState);
    }
  }

  render() {
    const { cart, items, cartView, cartCount } = this.state;
    const products = [];
    for (let i = 0; i < this.state.items.length; i++) {
      const { name, price, type, text } = this.state.items[i]
      products.push(<Product
        key={i}
        i={i}
        name={name}
        price={price}
        type={type}
        text={text}
        addToCart={this.addToCart}
      />);
    }

    return (
      <div>
        {cartView == 'open' && <div id="page-wrapper" />}
        <Header openCart={this.openCart} cartCount={cartCount} />
        <Body products={products} />
        <Footer />
        {cartView == 'open' && <CartContainer
          images={Images} cart={cart} items={items} status="cart-slider-open"
          removeFromCart={this.removeFromCart} closeCart={this.closeCart} />}
        {cartView == 'close' && <CartContainer
          images={Images} cart={cart} items={items} status="cart-slider-close"
          removeFromCart={this.removeFromCart} closeCart={this.closeCart} />}
      </div >
    )
  }
}

export default MainContainer;