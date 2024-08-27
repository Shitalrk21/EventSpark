import { Link } from "react-router-dom";
import logo from "../../images/logonav.jpg";
import React, { useEffect, useState } from 'react';
import axios from "axios";
import { url } from '../common/constants';
import { FaUserCircle,FaUserAlt,FaUser } from "react-icons/fa";

const NavSignOut = () => {

  const [uname, setUname] = useState();

  const init = () => {
    const token = JSON.parse(localStorage.getItem("jwttoken"));
    axios.get(url + "/nameaccess", { headers: { "authorization": `Bearer ${token}` } })
      .then(Response => {
        console.log('Printing User name', Response.data);
        setUname(Response.data);
      })
      .catch(error => {
         
         console.log(uname)
        console.log('Something went wrong', error);
      })
  }

  useEffect(() => {
    init();
  }, []);

  const handlesignOut = () => {
    localStorage.clear();
  }
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-black py-3 px-5 fs-5 ">
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/"}>
            <img src={logo} alt="not found" width="100" height="40" />
          </Link>
          {/* <Link className="navbar-brand fs-3" to={"/"}>Event Management System</Link> */}
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
                <Link className="nav-link" to="/services">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/packages">
                  Packages
                </Link>
              </li>

              {/* <li className="nav-item">
                    <Link className="nav-link" to="/">
                  {uname}
                </Link>
              </li> */}

              { uname ?
                (<li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <span><FaUserCircle/>  </span>
                    {uname}
                  </Link>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                      <Link className="dropdown-item" to="/" onClick={handlesignOut}>
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/" onClick={handlesignOut}>
                        Sign Out
                      </Link>
                    </li>
                  </ul></li>) : (<li className="nav-item">
                    <Link className="nav-link" to="/customer" onClick={handlesignOut}>
                      Sign In
                    </Link>
                  </li>)}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavSignOut;
