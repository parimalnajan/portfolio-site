import React, { Component } from 'react';
import Main from './Components/main'; 
import './profileApp.css';
import {Link} from "react-router-dom";


class mainclass extends Component{


render(){


  return(
<div>
    <div className="container">

      <div className= "nav-wrap"> 
      
        <div className= "nav-left">
          <div className="brand-wrap"><a >Parimal Najan</a>
          </div>
        </div>
            
        <div className= "nav-right">
              
            <div className="link-wrap"><Link to ="home">Home</Link></div>
            <div className="link-wrap">  <Link to ='skills'>Skills</Link></div>
            <div className="link-wrap">  <Link to ='projects'>Projects</Link></div>
            <div className="link-wrap"> <Link to ='contact'>Contact</Link></div>
            <div className="link-wrap"> <Link to =''>NightMode</Link></div>
            
        </div>
        
      </div>
     
  
      </div>

    <div >
      this comes after  <Main/>
      
     </div>
  
 </div>

    
  )

  
  }
}

export default mainclass;


