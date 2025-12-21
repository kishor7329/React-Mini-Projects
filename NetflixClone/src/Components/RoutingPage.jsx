import React from 'react'
import './RoutingPage.css'
import { Link,useLocation,useParams } from 'react-router-dom'
import {useEffect,useState} from 'react'
import Player from './Player'
const RoutingPage = () => {
  const location=useLocation();
 const {lang}=useParams();
  const pathToQueryMap = {
    "/home": "pop",
    "/TvSerial": "series",
    "/browsebylanguage": "india",
    "/Hollywood": "hollywood",
    "/Bollywood": "south",
  };
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showplayed,setshowplayed]=useState(null)
  let searchQuery  = pathToQueryMap[location.pathname] ;
  if(lang){
    const langMap={
      korean:"korea",
      japanese:"japan",
      english:"english",
      south:"south",
      bhojpuri:"hindi",
    }
    searchQuery=langMap[lang]||lang;
  }
  
  const [page, setPage] = useState(1);

  useEffect(() => { setPage(1); }, [searchQuery]);
  useEffect(() =>{
    const fetchMovies = async () => {
      try {
        
        
        const res = await fetch(
          `https://www.omdbapi.com/?s=${searchQuery}&page=${page}&apikey=873d65ed`
        );
        const data = await res.json();
        if (data.Response === "False") {
          throw new Error(data.Error || "No movies found");
        }
        setMovies(prev => page === 1 ? data.Search : [...prev, ...data.Search] );
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }finally{
        setLoading(false);
      }
    };
    fetchMovies();
  },[searchQuery,page])

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  
  const hasMore = movies.length == 10;

  return (
    <div className="routingpage">
      
      <div className="heading-section">
        <Link to="/">
          <h1 className="back-home">
            <svg
              className="arrow-icon"
              width="40"
              height="40"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M140 40 L60 100 L140 160"
                stroke="currentColor"
                strokeWidth="12"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
            Back to Home
          </h1>
        </Link>
        <p className="subtitle">Free to watch movies</p>
      </div>
      
      {loading && <p className="status-text">Loading...</p>}
      {error && !loading && <p className="status-text error">{error}</p>}
      
      <div className="content-grid">
        {movies.map( i => (
          <div className="grid-item" key={i.imdbID}>
            
            <img
              src={
                i.Poster !== "N/A"
                  ? i.Poster
                  : "https://via.placeholder.com/300x450?text=No+Image"
              }
              alt={i.Title}
              className="movie-poster"
            />
            <button className="played_icon" type="button"  onClick={() => {
                if (!i?.Title) return;
                setshowplayed(null);
                setTimeout(() => setshowplayed(i.Title), 0);
              }}>
              <svg className="picon" width="300" height="300" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"
                

                >

                <circle cx="100" cy="100" r="90" fill="none" stroke="#333" strokewidth="8"/>


                <polygon points="75,60 75,140 145,100" fill="#333" />
              </svg></button>
          </div>
        ))}
        { !hasMore&&!loading && !error && (
          <p className="status-text">No movies to display.</p>
        )}

          <Player title={showplayed}/>
        
      </div>
      { hasMore&& (<div className="load-more-wrapper">
        <button className="load-more-btn" onClick={handleLoadMore}>
          <span className="btn-text">Load More</span>
          <svg 
            className="btn-icon" 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </button>
      </div>)}
    </div>
  );
}

export default RoutingPage