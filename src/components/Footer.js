import React from 'react';
import Facebook from '../assets/svg/facebook_icon.svg';
import Instagram from '../assets/svg/instagram_icon.svg';
import Twitter from '../assets/svg/twitter_icon.svg';

const Footer = () => (
  <footer>
    <div id="footer-text">
      <p>
        We offer pre-packed Citrus, Floral or Classic themed boxes. We offer next day delivery for free with all custom gift boxes!
      </p>
    </div>
    <div id="social-media-links">
      <img src={Facebook} id='facebook-icon' alt='facebook-icon' />
      <img src={Instagram} id='instagram-icon' alt='instagram-icon' />
      <img src={Twitter} id='twitter-icon' alt='twitter-icon' />
    </div>
    <div className='subfooter-wrapper' id="company-div">
      <h4 className='subfooter-header'>Company</h4>
      <p className="subfooter-links">About</p>
      <p className="subfooter-links">Location</p>
      <p className="subfooter-links">Contact Us</p>
    </div>
    <div className='subfooter-wrapper' id="online-order-div">
      <h4 className='subfooter-header'> Online Orders</h4>
      <p className="subfooter-links">Order Tracker</p>
      <p className="subfooter-links">Delivery FAQs</p>
    </div>
    <div className='subfooter-wrapper' id="copyright-div">
      <h4 id="copyright-logo">© 2019 MACARONS</h4>
    </div>
  </footer >
)

export default Footer;