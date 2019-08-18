import React from 'react';

const Product = ({ name, price, text, img }) => (
  <div>
    <p className="item-name">{name}</p>
    <p className="item-price">{price}</p>
    <p className="item-text">{text}</p>
    <img src='../assets/custom gift box.png' />
  </div>
)

export default Product;