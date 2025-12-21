import "./TitleCard.css";
import React, { useEffect, useState } from "react";
import Player from "./Player"
const TitleCard = ({favc,setfavc}) => {

  const [batman, setBatman] = useState([]);
  const [superman, setSuperman] = useState([]);
  const [spiderman, setSpiderman] = useState([]);
  const [ironman, setIronman] = useState([]);
  const [thor, setThor] = useState([]);
  const [toastMovie, setToastMovie] = useState(null);
  const [toastText, setToastText] = useState("");
  const [showplayed,setshowplayed]=useState(null)

  const fetchMovies = async (query, setter) => {
    const res = await fetch(
      `https://www.omdbapi.com/?s=${query}&apikey=873d65ed`,
    );
    const data = await res.json();
    if (data.Response === "True") {
      setter(data.Search.slice(0, 10));
    }
  };
  useEffect(() => {
    fetchMovies("ant", setBatman);
    fetchMovies("action", setSuperman);
    fetchMovies("adventure", setSpiderman);
    fetchMovies("horror", setIronman);
    fetchMovies("thriller", setThor);
  }, []);
  const buildCards = (list,setfavc) => {

    const cards = [];
    for (let i = 0; i < 10; i++) {
      const movie = list[i];
      cards.push(
        <div className="card" key={i}>
          {movie ? (
            <>
              <img
                src={movie.Poster}
                alt={movie.Title}
                className="poster-img"
              />
              {toastMovie === movie?.imdbID && (
                <div className="toast-msg">{toastText}</div>
              )}

                <button
                  className={`heart-btn ${isFav(movie) ? "active" : ""}`}
                  onClick={() => toggleFav(movie)}
                >

                <svg
                  className="heart-icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
                       2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 
                       4.5 2.09C13.09 3.81 14.76 3 16.5 3 
                       19.58 3 22 5.42 22 8.5c0 3.78-3.4 
                       6.86-8.55 11.54L12 21.35z"
                    fill="#ff0000"
                    stroke="#cc0000"
                    strokeWidth="0.5"
                  />
                </svg>
              </button>
              <button className="p1"  onClick={()=>setshowplayed(movie.Title)}>
                <svg className="p2" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="30,20 30,80 75,50" fill="white"/>
                </svg>
              </button>
             
            </>
          ) : (
            <div className="empty-card">No Poster</div>
          )}
        </div>,
      );
    }
    return cards;
  };

  const isFav = (movie) => {
    return favc.some((m) => m.imdbID === movie.imdbID);
  };
  const toggleFav = (movie) => {
    if (isFav(movie)) {
      // remove
      setfavc(prev => prev.filter(m => m.imdbID !== movie.imdbID));
      setToastText("Removed");
    } else {
      // add
      setfavc(prev => [...prev, movie]);
      setToastText("Added");
    }
    setToastMovie(movie.imdbID);
    setTimeout(() => { setToastMovie(null); setToastText(""); }, 1000);
  };


  return (
    <div className="title-card">
      <h1>Most Trending</h1>
      {showplayed&&<Player title={showplayed}/>}
      <div className="carousel-wrapper">
        <button className="nav-btn left">‹</button>

        <div className="card-container">{buildCards(batman,setfavc)}</div>

        <button className="nav-btn right">›</button>
      </div>
      <div className="action">
        {" "}
        <h1>Action</h1>
        <div className="carousel-wrapper">
          <button className="nav-btn left">‹</button>

          <div className="card-container">{buildCards(superman,setfavc)}</div>

          <button className="nav-btn right">›</button>
        </div>{" "}
      </div>
      <div className="adventure">
        {" "}
        <h1>Adventure</h1>
        <div className="carousel-wrapper">
          <button className="nav-btn left">‹</button>

          <div className="card-container">{buildCards(spiderman,setfavc)}</div>

          <button className="nav-btn right">›</button>
        </div>{" "}
      </div>
      <div className="horror">
        {" "}
        <h1>Horror</h1>
        <div className="carousel-wrapper">
          <button className="nav-btn left">‹</button>

          <div className="card-container">{buildCards(ironman,setfavc)}</div>

          <button className="nav-btn right">›</button>
        </div>
      </div>
      <div className="thriller">
        {" "}
        <h1>Thriller</h1>
        <div className="carousel-wrapper">
          <button className="nav-btn left">‹</button>

          <div className="card-container">{buildCards(thor,setfavc)}</div>

          <button className="nav-btn right">›</button>
        </div>{" "}
      </div>
    </div>
  );
};

export default TitleCard;
