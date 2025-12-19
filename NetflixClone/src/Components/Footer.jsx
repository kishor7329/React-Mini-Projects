import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      {/* ===== TOP SECTION ===== */}
   
      {/* ===== LINK SECTIONS ===== */}
      <div className="footer-links">

        <ul>
          <h4>Browse</h4>
          <li><a href="#">Trending Movies</a></li>
          <li><a href="#">New Releases</a></li>
          <li><a href="#">Top Rated</a></li>
          <li><a href="#">Coming Soon</a></li>
        </ul>

        <ul>
          <h4>Categories</h4>
          <li><a href="#">Action</a></li>
          <li><a href="#">Adventure</a></li>
          <li><a href="#">Horror</a></li>
          <li><a href="#">Thriller</a></li>
        </ul>

        <ul>
          <h4>Support</h4>
          <li><a href="#">Help Center</a></li>
          <li><a href="#">Account Settings</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>

        <ul>
          <h4>More</h4>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms</a></li>
          <li><a href="#">Cookie Policy</a></li>
        </ul>

      </div>

      {/* ===== FEEDBACK SECTION ===== */}
      <div className="footer-feedback">
        <h3>Your Feedback Matters 🎉</h3>
        <p>Tell us how we can improve your experience.</p>
        <form>
          <input type="text" placeholder="Write your feedback..." />
          <button type="submit">Send</button>
        </form>
      </div>

      {/* ===== COPYRIGHT ===== */}
      <div className="footer-bottom">
        <p>© 2025 Netflix Clone · Designed for Learning · All rights reserved</p>
      </div>
  <div className="iconssvg">
      <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="90" fill="#333"/>
        <path d="M110 60h12.5v-15h-15c-12.5 0-22.5 10-22.5 22.5v10h-12.5v15h12.5v40h15v-40h15l2.5-15h-17.5v-10c0-2.5 2.5-7.5 7.5-7.5z" fill="#fff"/>
      </svg>
      <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="90" fill="#333"/>
        <path d="M72.5 65h15v50h-15v-50zm7.5-22.5c5 0 7.5 2.5 7.5 7.5s-2.5 7.5-7.5 7.5-7.5-2.5-7.5-7.5 2.5-7.5 7.5-7.5zm35 22.5h12.5v7.5c2.5-5 7.5-7.5 15-7.5 12.5 0 17.5 7.5 17.5 22.5v27.5h-15v-25c0-7.5-2.5-12.5-10-12.5s-10 5-10 12.5v25h-15v-50z" fill="#fff"/>
      </svg>
      <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="90" fill="#333"/>
        <path d="M100 40c-33.137 0-60 26.863-60 60 0 26.51 17.19 49 41.035 56.935 2.995.555 3.965-1.305 3.965-2.885v-11.17c-16.69 3.63-20.165-7.08-20.165-7.08-2.73-6.935-6.665-8.78-6.665-8.78-5.445-3.725.415-3.645.415-3.645 6.025.42 9.195 6.185 9.195 6.185 5.35 9.17 14.035 6.52 17.46 4.985.535-3.875 2.09-6.525 3.81-8.02-13.325-1.525-27.335-6.67-27.335-29.655 0-6.555 2.345-11.905 6.18-16.105-.62-1.515-2.675-7.62.585-15.88 0 0 5.04-1.61 16.505 6.15 4.785-1.33 9.92-1.995 15.03-2.02 5.1.025 10.235.69 15.03 2.02 11.445-7.76 16.485-6.15 16.485-6.15 3.265 8.26 1.21 14.365.595 15.88 3.845 4.2 6.175 9.55 6.175 16.105 0 23.04-14.035 28.115-27.395 29.605 2.15 1.86 4.115 5.51 4.115 11.11v16.465c0 1.595.96 3.47 4.005 2.88C142.795 149 160 126.51 160 100c0-33.137-26.865-60-60-60z" fill="#fff"/>
      </svg>
      <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="90" fill="#333"/>
        <path d="M150 70v60c0 5.5-4.5 10-10 10H60c-5.5 0-10-4.5-10-10V70c0-5.5 4.5-10 10-10h80c5.5 0 10 4.5 10 10zm-10 0l-40 25-40-25v10l40 25 40-25V70z" fill="#fff"/>
      </svg>
  </div>
    </footer>
  );
};

export default Footer;

