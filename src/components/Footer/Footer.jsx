import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p>&copy; 2024 Aieka Jewish Teen Center</p>
        </div>
        <div className="footer-center">
          <p>Contactanos: aieka.jtc@gmail.com </p>
        </div>
        <div className="footer-right">
          <a href="https://www.facebook.com/AiekaJewishteencenter/?locale=es_LA" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com/aiekatulugar/?hl=en" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.aiekajesed.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
          < i className="fa-sharp fa-solid fa-globe"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
