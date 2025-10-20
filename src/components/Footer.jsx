import { FaHeart } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          Designed & Built with <FaHeart className="heart-icon" /> by Jaideep
        </p>
        <p className="copyright">© {currentYear} All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
