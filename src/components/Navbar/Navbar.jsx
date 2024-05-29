import React from 'react'
import { Outlet } from 'react-router-dom'
import routes from '../../routes/routes.config'
import { NavLink } from 'react-router-dom'


const Navbar = () => {


  return (
    <>
     <div>
      <header id="header" className="header d-flex align-items-center fixed-top">
    <div className="container-fluid d-flex align-items-center justify-content-between">

      <a href="index.html" className="logo d-flex align-items-center  me-auto me-lg-0">
       
         <img src="assets/img/logo.png" alt=""/>
        <i className="bi bi-camera"></i>
        <h1>Bumble</h1>
      </a>

      <nav id="navbar" className="navbar">
        <ul>
           
           {routes.map((route, index) => (
            <li key={index}>
              <NavLink to={route.path}> {route.name} </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="header-social-links">
        <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
        <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
        <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
        <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
      </div>
      <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
      <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

    </div>
  </header>
    </div>
    <Outlet/>
    </>
   
  )
}

export default Navbar
