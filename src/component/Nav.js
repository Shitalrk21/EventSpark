// import { Link } from "react-router-dom";
import logo from "../images/EventSpark1-Photoroom.png";
import React from "react";
import{Link} from "react-scroll";


const Nav = () => {
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-black py-3 px-5 fs-5 ">
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/"}>
            <img src={logo} alt="not found" width="100" height="45"/>
          </Link>
          <Link className="navbar-brand fs-3" to={"/"}></Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className="nav-link" to="services">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="packages">
                  Packages
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="contact">
                  Contact
                </Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
