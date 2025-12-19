import './HomePage.css'
import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import TitleCard from './TitleCard';
import Footer from './Footer';
 
const  HomePage = ({favc,setfavc}) =>{
    return(
        <div className='home'>
      
      <div className='hero'>
      <Hero favc={favc} setfavc={setfavc}/>
      </div>
            <div className='titlecard'>
                <TitleCard favc={favc} setfavc={setfavc}/>
            </div>
            <div className='footer'>
                <Footer/>
            </div>
            
      </div>
    )
}
export default HomePage