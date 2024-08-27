import React, { useEffect, useState } from "react";
// import "./LoginRegister.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { url } from '../common/constants';
import { SiEventstore } from "react-icons/si";
import { FaEdit } from "react-icons/fa";
import { MdEditCalendar, MdOutlinePreview } from "react-icons/md";

const AdminWelcome = () => {


  
  const state = [
    {
      id: 1,
      icon: <MdEditCalendar className="commonIcons2" />,
      heading: "View & Register Emp,Mgr & Admins",
      link: "viewemployees"
    },
    {
      id: 2,
      icon: <MdOutlinePreview className="commonIcons2" />,
      heading: "View & Update All Events",
      link: "viewevent"
    },
    {
      id: 3,
      icon: <FaEdit className="commonIcons2" />,
      heading: "View & Add Available Services",
      link: "viewallservices"
    },
    {
      id: 4,
      icon: <FaEdit className="commonIcons2" />,
      heading: "View All Customers",
      link: "viewcustomers"
    }
  ];

  const [uname, setUname] = useState();
  const init = () => {
    const token = JSON.parse(localStorage.getItem("jwttoken"));
    const role = localStorage.getItem("role");
    console.log(role);
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

  return (
    // <div className=" position-absolute top-50 start-50 translate-middle h-100 w-100">
    <div className="forms-container">
      <div className="container py-4 text-white my-5">
        <div colSpan="2" className="fw-bold p-3 display-6">
          Welcome, {uname}
        </div>
        <div className="row">
          {state.map((info) => (
            <div className="col-12 col-md-4 py-5 px-4 h-100" key={info.id}>
              <Link className="nav-link text-white" to={info.link}>
                <div className="services__box py-5 px-2 h-100 border border-2 border-white">
                  <div>{info.icon}</div>
                  <div><h4 className="py-5 fs-2">{info.heading}</h4></div>
                  <div className="">{info.text}</div>
                </div>
              </Link>
            </div>

          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminWelcome;
