import React, { useEffect, useState } from "react";
// import "./LoginRegister.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { url } from '../common/constants';
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
const BookingSuccessful = () => {

  const [uname, setUname] = useState(); //creates a piece of state in your React functional component with an initial value of undefined
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

  return (
    // <div className=" position-absolute top-50 start-50 translate-middle h-100 w-100">
    <div className="forms-container">
      <div className="container py-4 text-white my-5">
        <div className="my-4 border border-4 border-white">

          <IoCheckmarkDoneCircleOutline className="mt-3 display-1 text-warning" />
          <div className="fw-bold m-2 display-6">
            Hello {uname},
            <div className="m-2">
            Your Event is Booked Successfully
            </div>
            <div className="h3 m-3">
              Please wait for a while for the admin to confirm your event, <br/> 
              <span className="text-danger">You'll get a confirmation mail once your event is confirmed,</span> <br/>
              then you can proceed for the payment.
            </div>
            <div className="h2 m-3">
              To complete payment process you can go to your account <br/>
              and the follow path given below, <br/>
              <p className="text-warning">View All Event Details - (Select Your Event ) - Click on PAY button</p>
            </div>
            <Link className="btn btn-primary w-25 mb-3" to={"/customer/welcome"}>Home</Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BookingSuccessful;
