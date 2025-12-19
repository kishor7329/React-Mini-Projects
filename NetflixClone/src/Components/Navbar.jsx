import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = ({searchText,setSearchText}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
const navigate=useNavigate()
  return (
    <div className='navbar'>
      <div className='navbar-left'>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix Logo"
          width="200"
        />

        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/TvSerial">Tv Serial</Link></li>
          <li><Link to="/Bollywood">BollyWood</Link></li>
          <li><Link to="/Hollywood">Hollywood</Link></li>

          <li
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button
              className={`dropdown-trigger ${isDropdownOpen ? 'active' : ''}`}
            >
              Browse By Language
            </button>

            <div
              className={`dropdown-menu ${isDropdownOpen ? 'open' : ''}`}
            >
              <Link to="/language/korean" className="dropdown-item">Korean</Link>
              <Link to="/language/japanese" className="dropdown-item">Japanese</Link>
              <Link to="/language/english" className="dropdown-item">English</Link>
              <Link to="/language/bhojpuri" className="dropdown-item">Bhojpuri</Link>
              <Link to="/language/south" className="dropdown-item">South</Link>
            </div>
          </li>

          <li><Link to="/fav">Favourite</Link></li>
        </ul>
      </div>

      <div className='navbar-right'>
        <div className="search-wrapper">
          <input
            type="text"
            className="search-input"
            placeholder="Search Movies, TV Shows . . ."
            aria-label="Search"
            value={searchText || ""}
            onChange={(e) => setSearchText(e.target.value)}
          />

          <button
            className="search-btn"
            type="submit"
            onClick={() => {
              if (searchText.trim() !== "") {
                navigate(`/search?q=${encodeURIComponent(searchText)}`);
              }
            }}
            aria-label="Search button"
          >
            <svg className="search-icon" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </button>

        </div>

        <p>Children</p>



        <div className='navbar-profile'>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="Profile Icon"
            width="32"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/32/32195.png"
            alt="Dropdown Icon"
            width="14"
          />

          <div className='dropdown'>
            <p>Sign Out</p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
