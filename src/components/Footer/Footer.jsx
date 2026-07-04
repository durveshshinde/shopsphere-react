import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Company */}
        <div className="footer-section">
          <h2>ShopSphere</h2>

          <p>
            Your one-stop destination for premium fashion,
            accessories and lifestyle products.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>

          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>Wishlist</li>
            <li>Cart</li>
          </ul>
        </div>

        {/* Customer Service */}
        <div className="footer-section">
          <h3>Customer Care</h3>

          <ul>
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Shipping</li>
            <li>Returns</li>
          </ul>
        </div>

        {/* Social */}
        <div className="footer-section">
          <h3>Follow Us</h3>

          <div className="social-icons">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedinIn />
          </div>
        </div>

      </div>

      <hr />

      <p className="copyright">
        © 2026 ShopSphere. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;