import React from "react";
import { state } from '../state';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Product from '../components/Product';



class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = state;

  }

  render() {
    const items = [];
    for (let i = 0; i < this.state.items.length; i++) {
      const { name, price, text, bulk, img } = this.state.items[i]
      items.push(<Product key={i} name={name} price={price} text={text} bulk={bulk} img={img} />);
    }

    return (
      <div>
        <Header />
        <NavBar />
        <section>
          {items}
        </section>
      </div >
    )
  }
}

export default MainContainer;