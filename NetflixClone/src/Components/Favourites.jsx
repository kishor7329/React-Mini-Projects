
import React from "react";
import "./Favourites.css"
const Favourites = ({ favc }) => {
  return (
      <div className="fav-page">

        <div className="fav-header">
          <div className="fav-back" onClick={() => window.history.back()}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="#fff" strokeWidth="2" 
              strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Back to Home</span>
          </div>

          <h1>Your Favourite Movies</h1>
        </div>

        <div className="fav">
          {favc.length === 0 && (
            <p className="no-fav-msg">No favourites found.</p>
          )}

          <div className="fav-grid">
            {favc.map((movie) => (
              <div className="fav-card" key={movie.imdbID}>
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  className="fav-poster"
                />
              </div>
            ))}
          </div>
        </div>

      </div>

  );
};

export default Favourites;