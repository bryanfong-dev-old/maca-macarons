import React from "react";
import { state } from '../state';
import Header from '../components/Header';
import Body from '../components/Body';
import Product from '../components/Product';
import Footer from '../components/Footer';
import CartContainer from './CartContainer';
import Images from '../Images';


class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = state;
  }

  render() {
    const { cart, items } = this.state;
    const products = [];
    for (let i = 0; i < this.state.items.length; i++) {
      const { name, price, type, text } = this.state.items[i]
      products.push(<Product
        key={i}
        name={name}
        price={price}
        type={type}
        text={text}
        img={Images[i]}
      />);
    }

    return (
      <div>
        <Header />
        <Body products={products} />
        <Footer />
        <CartContainer images={Images} cart={cart} items={items} />
      </div >
    )
  }
}

export default MainContainer;