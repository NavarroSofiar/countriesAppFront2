import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.modules.css'
 
const LandingPage = () => {
     return (
         <div className='containerDiv'>
            <div >
            <h1 className='title'>Your Dream Escape...</h1>
            <h4 className='subtitle'>only a quick search away</h4>
            </div>
             <Link to="/home">
               <button className='btnReload'>Join de Experience</button>  
            </Link>
         </div>
     );
 }
  
 export default LandingPage;