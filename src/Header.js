import React from 'react'
import {  NavLink } from 'react-router-dom';
export default function Header() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
  Dashboard
    {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">
            New Hosting
          </NavLink>
        </li>  
        <li className="nav-item">  
          <NavLink className="nav-link" to="/all_hosting"> 
          All Hosting
          </NavLink>
        </li>
       
        
      </ul> 
      
    </div> */}
  </div>
</nav>

    </div>
  )
}
