import React from 'react';
import { state } from '../state'
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Product from '../components/Product';



class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = state;
  }


  render() {
    console.log(state);
    return (
      <div>
        <Header />
        <NavBar />
        <section>

        </section>
      </div >
    )
  }
}

export default MainContainer;