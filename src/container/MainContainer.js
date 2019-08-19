import React from "react";
import { state } from '../state';
import Header from '../components/Header';
import Product from '../components/Product';
import Footer from '../components/Footer';
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
      <div id="body">
        <Header />
        <main id="main"> {items} </main>
        <Footer />
      </div >
    )
  }
}

export default MainContainer;