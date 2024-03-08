import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div>
  <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
    {/* Navbar Brand*/}
    <a className="navbar-brand ps-3" href="/Home">CRM</a>
    {/* Sidebar Toggle*/}
    <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i className="fas fa-bars" /></button>
    {/* Navbar Search*/}
    <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
       
    </form>
    {/* Navbar*/}
    <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-user fa-fw" /></a>
        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
        <li><a className="dropdown-item" href="#!">Logout</a></li>
        </ul>
      </li>
    </ul>
  </nav>
  <div id="layoutSidenav">
    <div id="layoutSidenav_nav">
      <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
        <div className="sb-sidenav-menu">
          <div className="nav">
             <Link className="nav-link" to="/Home">
              <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt" /></div>
              Dashboard
            </Link>
             
            {/* <a className="nav-link collapsed d-none" href="#" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
              <div className="sb-nav-link-icon"><i className="fas fa-book-open" /></div>
              Pages
              <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
            </a>
            <div className="collapse d-none" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
              <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
                  Authentication
                  <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
                </a>
                <div className="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                  <nav className="sb-sidenav-menu-nested nav">
                    <a className="nav-link" href=" ">Login</a>
                    <a className="nav-link" href=" ">Register</a>
                    <a className="nav-link" href=" ">Forgot Password</a>
                  </nav>
                </div>
                <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
                  Error
                  <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
                </a>
                <div className="collapse" id="pagesCollapseError" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                  <nav className="sb-sidenav-menu-nested nav">
                    <a className="nav-link" href=" ">401 Page</a>
                    <a className="nav-link" href=" ">404 Page</a>
                    <a className="nav-link" href=" ">500 Page</a>
                  </nav>
                </div>
              </nav>
            </div> */}
             <Link className="nav-link" to="/FormPage">
              <div className="sb-nav-link-icon"><i className="fas fa-chart-area" /></div>
              New Hosting
            </Link>
            <Link className="nav-link" to="/all_hosting">
              <div className="sb-nav-link-icon"><i className="fas fa-table" /></div>
              All Hosting
            </Link>
            <Link className="nav-link" to="/addsmspackage">
              <div className="sb-nav-link-icon"><i className="fas fa-table" /></div>
              Add SMS Packeage
            </Link>
            <Link className="nav-link" to="/AllSMSPAckage">
              <div className="sb-nav-link-icon"><i className="fas fa-table" /></div>
              All SMS PAckage
            </Link>
            
            <Link className="nav-link" to="/addwtsppackage">
              <div className="sb-nav-link-icon"><i className="fas fa-table" /></div>
              Add WTSP Packeage
            </Link>
            <Link className="nav-link" to="/AllWTSPPAckage">
              <div className="sb-nav-link-icon"><i className="fas fa-table" /></div>
              All WTSP PAckage
            </Link>

          </div>
        </div>
         
      </nav>
    </div>
  </div></div>

  )
}
