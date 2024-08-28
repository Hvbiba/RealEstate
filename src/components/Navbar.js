import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import "./Nav.css";
import Logo from "./Logo";




function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
            <Logo />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span><i className="fa fa-bars" aria-hidden="true"></i></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul
              className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
              style={{ "--bs-scroll-height": "fit-content" }}
            >
              <li className="nav-item">
                <Link className="nav-link" to='/'>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/buying'>
                Homes for Buy
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/renting'>
                Homes for Rent
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/selling'>
                Homes for Sell
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
  
  export default Navbar;