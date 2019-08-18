import React from 'react';
import facebookIcon from '../assets/facebook_icon.svg';
import instagramIcon from '../assets/instagram_icon.svg';
import twitterIcon from '../assets/twitter_icon.svg';

const Footer = () => (
  <footer>
    <div id="footer-text">
      We offer pre-packed Citrus, Floral or Classic themed boxes. We offer next day delivery for free with all custom gift boxes!
    </div>
    <div id="footer-logos-wrapper">
      <img src={facebookIcon} id='facebook-icon' alt='facebook-icon' />
      <img src={instagramIcon} id='instagram-icon' alt='instagram-icon' />
      <img src={twitterIcon} id='twitter-icon' alt='twitter-icon' />
    </div>
  </footer>
)

export default Footer;