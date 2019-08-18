import React from 'react';



const Product = ({ name, price, type, text, img }) => (
  <div className="item-wrapper">
    <div className="item-photo" style={{ backgroundImage: `url('${img}')` }} />
    <p className="item-name">{name}</p>
    <p clasName="item-type">{type}</p>
    <p className="item-price">${price}</p>
    <p className="item-text">{text}</p>
  </div >
)

export default Product;