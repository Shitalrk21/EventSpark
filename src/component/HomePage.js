import React from "react";
import { Link } from "react-router-dom";
import img1 from "../images/img1.jpg";
import img2 from "../images/image2.jpg";
import img3 from "../images/img3.jpg";

import logo from "../images/EventSpark.png";

import Nav from "./Nav";

const HomePage = () => {
  const [state] = React.useState({
    title: "EventSpark Events",
    text: "We create. You celebrate",
    image: "/images/man-01.png",
  });
  return (
    <div className="d-block">
      <div
        id="carouselExampleInterval"
        className="carousel slide "
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators ">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="5000">
            <img
              src={img1}
              className="d-block vw-100 vh-100"
              alt="image1 not found"
            />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src={img2}
              className="d-block vw-100 vh-100"
              alt="image2 not found"
            />
          </div>
          <div className="carousel-item">
            <img
              src={img3}
              className="d-block vw-100 vh-100"
              alt="image3 not found"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
          <div className="container position-absolute top-50 start-50 translate-middle bg-white h-75 w-100 opacity-50"></div>
      <div className="container position-absolute top-50 start-50 translate-middle text-black">
        <h1 className="display-1 fw-bold">     <img src={logo} alt="not found" width="40%" height="40%" />    {/*{state.title} */}      </h1>
        {/* <p className="display-5 px-5">{state.text}</p> */}
        <div className=" d-grid col-3  mx-auto my-4">
          <Link
            className="btn bg-black text-white btn-lg my-3 py-2 px-3 border-danger border-3 rounded-pill opacity-75 fs-4"
            to={"/customer"}
            role="button"
          >
            Customer
          </Link>
          <Link
            className="btn bg-black text-white btn-lg my-3 py-2 px-3 border-danger border-3 rounded-pill opacity-75 fs-4"
            to={"/employee"}
            role="button"
          >
            Employee
          </Link>
        </div>
      </div>
      <Nav/>
    </div>
  );
};

export default HomePage;
