import React from 'react';
import CheckoutDisplay from '../components/CheckoutDisplay'

class CartContainer extends React.Component {
  render() {
    const { images, cart, items } = this.props;
    const checkoutItems = [];
    for (let key in cart) {
      checkoutItems.push(<CheckoutDisplay item={items[key]} image={images[key]} />)
    }

    return (
      <section id="cart-slider" >
        <button id="cart-close-button"> Close </button>
        <h4 id="my-cart-label">My Cart</h4>
        {checkoutItems}
        <p id="cart-total-text">Total</p>
        <p id="cart-total-sum">  $55</p>
        <button id="checkout-button">Continue to Checkout</button>
      </section >
    )
  }
}

export default CartContainer;