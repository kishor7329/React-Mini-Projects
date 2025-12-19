import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom';
 
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar.jsx';
import HomePage from './Components/HomePage.jsx';
import RoutingPage from './Components/RoutingPage.jsx';
import Favourite from './Components/Favourites.jsx';
import Search from './Components/Search.jsx';

function App() {
   const [searchText,setSearchText]=useState("");
const [fav,setFav]=useState([])
  return (
    <>
      <BrowserRouter>
         <Navbar searchText={searchText} setSearchText={setSearchText} />
               <Routes>
         <Route path="/" element={<HomePage favc={fav} setfavc={setFav}/>}   />
        <Route path='/TvSerial' element={<RoutingPage favc={fav} setfavc={setFav}/>}  />
        <Route path='/browsebylanguage' element={<RoutingPage favc={fav} setfavc={setFav}/>}  />
        <Route path='/Hollywood' element={<RoutingPage favc={fav} setfavc={setFav}/>}  />
        <Route path='/Bollywood' element={<RoutingPage favc={fav} setfavc={setFav}/>}  />
        <Route path='/home' element={<RoutingPage favc={fav} setfavc={setFav}/>}  />
         <Route path='/language/:lang' element={<RoutingPage favc={fav} setfavc={setFav}/>}  />
        <Route path='/fav' element={<Favourite favc={fav} />}  />
        <Route path="/search" element={<Search  />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
