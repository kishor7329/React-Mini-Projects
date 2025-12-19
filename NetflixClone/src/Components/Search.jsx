import React, { useEffect, useState } from "react";
import "./Search.css";
import { useNavigate, useLocation } from "react-router-dom";

function Search() {
  const [movies, setMovies] = useState([]);
  const [visibleCount, setVisibleCount] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  // Extract search text from URL query parameter
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get("q") || "";
    setSearchQuery(query);
  }, [location.search]);

  useEffect(() => {
    if (!searchQuery) {
      setMovies([]);
      setVisibleCount(10);
      return;
    }

    async function fetchMovies() {
      try {
        const res = await fetch(
          `https://www.omdbapi.com/?s=${encodeURIComponent(searchQuery)}&apikey=873d65ed`
        );
        const data = await res.json();

        if (data.Response === "True") {
          setMovies(data.Search || []);
        } else {
          setMovies([]);
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
        setMovies([]);
      }

      setVisibleCount(10);
    }

    // Add debouncing to prevent too many API calls
    const timer = setTimeout(() => {
      fetchMovies();
    }, 500);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const visibleMovies = movies.slice(0, visibleCount);

  return (
    <div className="search-container">
      {/* Header with Back Button and Search Info */}
      <div className="search-header">
        <div className="header-content">
          <button className="back-home-btn" onClick={() => navigate("/")}>
            <svg className="back-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            <span className="back-text">Back to Home</span>
          </button>

          <div className="search-info">
            <h2>Your searched movies</h2>
            {searchQuery ? (
              <p>Showing results for: <strong>{searchQuery}</strong></p>
            ) : (
              <p>Type something to search</p>
            )}

          </div>
        </div>
      </div>

      {/* Movies Grid */}
      {movies.length > 0 ? (
        <>
          <div className="movies-grid">
            {visibleMovies.map((m) => (
              <div key={m.imdbID} className="movie-card">
                <div className="poster-container">
                  <img 
                    src={m.Poster !== "/" ? m.Poster : "https://via.placeholder.com/200x300/333/666?text=No+Poster"} 
                    alt={m.Title} 
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/200x300/333/666?text=No+Poster";
                    }}
                  />
                  <div className="movie-overlay">
                    <span className="movie-year">{m.Year}</span>
                  </div>
                </div>
                <div className="movie-info">
                  <p className="movie-title">{m.Title}</p>
                  <span className="movie-type">{m.Type}</span>
                </div>
              </div>
            ))}
          </div>


        </>
      ) : searchQuery ? (
        <div className="no-results">
          <p>No movies found for "<strong>{searchQuery}</strong>"</p>
          <p className="try-again">Try a different search term</p>
          <button className="back-search-btn" onClick={() => navigate("/")}>
            Back to Search
          </button>
        </div>
      ) : (
        <div className="no-results">
          <p>Search for movies using the search bar above</p>
          <p className="try-again">Enter a movie title and press search</p>
          <button className="back-search-btn" onClick={() => navigate("/")}>
            Back to Search
          </button>
        </div>
      )}
    </div>
  );
}

export default Search;