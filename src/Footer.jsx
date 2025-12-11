import React from 'react';
import love from '../img/4.png';
import twitter from '../img/5.png';
import facebook from '../img/6.png';
import instagram from '../img/7.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content content">
        <span className="footer__logo">Timers App</span>
        <div className="footer__terms">
          <span>
            Created with
            <img src={love} alt="love" />
            by
            <span className="bold">Sergey Azovskiy</span>
          </span>
          <span>© Timers App, 2025</span>
        </div>
        <ul className="footer__social-icons">
          <li>
            <a href="#">
              <img className="image__border" src={twitter} alt="twitter" />
            </a>
          </li>
          <li>
            <a href="#">
              <img className="image__border" src={facebook} alt="facebook" />
            </a>
          </li>
          <li>
            <a href="#">
              <img className="image__border" src={instagram} alt="instagram" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
