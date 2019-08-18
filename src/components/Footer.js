import React from 'react';
import Facebook from '../assets/svg/facebook_icon.svg';
import Instagram from '../assets/svg/instagram_icon.svg';
import Twitter from '../assets/svg/twitter_icon.svg';

const Footer = () => (
  <footer>
    <div id="footer-text">
      We offer pre-packed Citrus, Floral or Classic themed boxes. We offer next day delivery for free with all custom gift boxes!
    </div>
    <div id="social-media-links">
      <img src={Facebook} id='facebook-icon' alt='facebook-icon' />
      <img src={Instagram} id='instagram-icon' alt='instagram-icon' />
      <img src={Twitter} id='twitter-icon' alt='twitter-icon' />
    </div>
  </footer >
)

export default Footer;