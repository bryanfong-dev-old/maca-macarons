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
    const items = [];
    for (let i = 0; i < this.state.items.length; i++) {
      const { name, price, type, text } = this.state.items[i]
      items.push(<Product
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
        <Body items={items} />
        <Footer />
        <CartContainer images={Images} cart={this.state.cart} items={this.state.items} />
      </div >
    )
  }
}

export default MainContainer;