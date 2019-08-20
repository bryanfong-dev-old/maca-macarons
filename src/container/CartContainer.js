import React from 'react';
import CheckoutDisplay from '../components/CheckoutDisplay'

class CartContainer extends React.Component {
  render() {
    let sum = 0;
    const { images, cart, items } = this.props;
    const checkoutItems = [];
    for (let key in cart) {
      if (cart[key] > 0) {
        checkoutItems.push(<CheckoutDisplay key={key} quantity={cart[key]} item={items[key]} image={images[key]} />);
        sum += cart[key] * items[key].price;
      }
    }

    return (
      <section id="cart-slider" >
        <button id="cart-close-button"> Close </button>
        <h4 id="my-cart-label">My Cart</h4>
        {checkoutItems}
        <div id="cart-total">
          <p id="cart-total-text">Total</p>
          <p id="cart-total-sum">${sum.toFixed(2)}</p>
        </div>
        <button id="checkout-button">Continue to Checkout</button>
      </section >
    )
  }
}

export default CartContainer;