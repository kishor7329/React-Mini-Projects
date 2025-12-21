import React from "react";
import { useState, useEffect } from "react";
import "./Hero.css";
import Player from './Player'
const Hero = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showDescription, setShowDescription] = useState(false);
  const [active, setActive] = useState(0);
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
  const circles = [0, 1, 2, 3];
  const [moviesList, setMoviesList] = useState([]);
  const movieTypes = ["batman", "superman", "spiderman", "iron man"];
  const [movieTypeIndex, setMovieTypeIndex] = useState(0);
  
  const [selectedTitle, setSelectedTitle] = useState(null);


  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch(
          `https://www.omdbapi.com/?s=${movieTypes[movieTypeIndex]}&apikey=873d65ed`

        );
 
        const data = await res.json();

        if (data.Response === "False") {
          throw new Error(data.Error || "No movies found");
        }
        const list=data.Search.slice(0, 2);
        setMoviesList(list);
        const firstMovie = list[currentMovieIndex];
        const detailsRes = await fetch(
          `https://www.omdbapi.com/?i=${firstMovie.imdbID}&plot=short&apikey=873d65ed`,
        );

        const detailsData = await detailsRes.json();
        if (detailsData.Response === "False") {
          throw new Error(detailsData.Error || "No movies found");
        }
        setMovies(detailsData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchMovies();
  }, [currentMovieIndex]);

  const handleLeft = () => {
    setActive((prev) => (prev === 0 ? 3 : prev - 1));
    setCurrentMovieIndex(prev => prev === 0 ? moviesList.length - 1 : prev - 1 );
    setMovieTypeIndex(prev => prev === 0 ? movieTypes.length - 1 : prev - 1 );
  };
  const handleRight = () => {
    setActive((prev) => (prev === 3? 0 : prev + 1));
    setCurrentMovieIndex(prev => prev === moviesList.length - 1 ? 0 : prev + 1 );
    setMovieTypeIndex(prev => prev === movieTypes.length - 1 ? 0 : prev + 1 );
  };

  return (
    <div className="heroChild">
       {selectedTitle && <Player title={selectedTitle} />}
      {loading && (
        <img
          src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/0.16.1/images/loader-large.gif"
          alt="Loading"
        />
      )}
      {error && <p>{error}</p>}

      {!loading && !error && movies &&  (
        <div className="heroPoster">
          <img src={movies.Poster} alt={movies.Title} />
          {showDescription && <p className="hero-desc">{movies.Plot}</p>}

          <div className="icons">
            
            <svg width="64" height="64" viewBox="0 0 24 24" fill="red"
              style={{ cursor: "pointer" }}
              onClick={() => setSelectedTitle(movies.Title)}
              >
              <circle cx="12" cy="12" r="10" />
              <polygon points="10 8 16 12 10 16 10 8" fill="#1a1a1a"/>
              
            </svg>

            <svg
              onClick={() => setShowDescription((prev) => !prev)}
              width="54"
              height="64"
              viewBox="0 0 24 24"
              fill="lightgrey"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
            </svg>
          </div>
          <div className="Arrow">
            <svg
              width="100"
              onClick={handleLeft}
              height="100"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M140 40 L60 100 L140 160"
                stroke="#333"
                stroke-width="8"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="white"
              />
            </svg>

            <svg
              width="100"
              onClick={handleRight}
              height="100"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M60 40 L140 100 L60 160"
                stroke="#333"
                stroke-width="8"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="white"
              />
            </svg>
            <div className="Circle">
              <svg
                width="300"
                height="80"
                viewBox="0 0 300 80"
                xmlns="http://www.w3.org/2000/svg"
              >
                {circles.map((c, i) => (
                  <circle
                    key={i}
                    cx={40 + i * 65}
                    cy="40"
                    r="25"
                    fill={active === i ? "white" : "#333"}
                  />
                ))}
              </svg>
            </div>
          </div>
        </div>
      )}
       
      
      

    </div>
  );
};

export default Hero;
