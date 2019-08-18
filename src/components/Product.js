import React from 'react';

const Product = ({ name, price, type, text, img }) => (
  <section className="item-wrapper">
    <div className="item-photo" style={{ backgroundImage: `url('${img}')` }} />
    <div className="item-info-wrapper">
      <p className="item-name">{name}</p>
      {type == 'Assorted Flavors' && <p className="item-price">${price}</p>}
      {type == '1 piece' && <p className="item-price">${price}/ea.</p>}
      <p className="item-type">{type}</p>
      <p className="item-text">{text}</p>
      <button className="item-cart-button"> + Add to Cart</button>
    </div>
  </section >
)

export default Product;