import React from 'react';

const Product = ({ name, price, type, text, img }) => (
  <section className="item-wrapper">
    <div className="cart-price-wrapper"></div>
    <div className="item-photo" style={{ backgroundImage: `url('${img}')` }} />
    <p className="item-name">{name}</p>
    {type == 'Assorted Flavors' && <p className="item-price bulk">${price}</p>}
    {type == '1 piece' && <p className="item-price">${price}/ea.</p>}
    <p className="item-type">{type}</p>
    <p className="item-text">{text}</p>
    <button className="add-cart-button"> + Add to Cart</button>
  </section >
)

export default Product;