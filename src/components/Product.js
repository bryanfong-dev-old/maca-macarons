import React from 'react';

const Product = ({ name, price, type, text, img, addToCart, i }) => (
  <section className="item-wrapper">
    <div className="cart-price-wrapper"></div>
    {/* <div className="item-photo" style={{ backgroundImage: `url('${img}')` }} /> */}
    <div className="item-photo" style={{ backgroundImage: `url("https://www.petrossian.com/pub/media/catalog/product/cache/2c285242d35fb03b71db8044b909fb69/f/r/french_macaronsexpanded-4_1.jpg")` }} />
    <p className="item-name">{name}</p>
    {type == 'Assorted Flavors' && <p className="item-price bulk">${price}</p>}
    {type == '1 piece' && <p className="item-price">${price}/ea.</p>}
    <p className="item-type">{type}</p>
    <p className="item-text">{text}</p>
    <button className="add-cart-button" onClick={() => { addToCart(i) }}> + Add to Cart</button>
  </section >
)

export default Product;