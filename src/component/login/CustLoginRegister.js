import React, { useEffect, useState } from "react";

import axios from "axios";
import "./LoginRegister.css";
import authHeader from "../services/auth-header"


import log from "../../images/log.svg"
import birthdaygif from "../../images/birthdaygif.gif"
import register from "../../images/register.svg"
import { useHistory } from "react-router-dom";
import { url } from "../common/constants";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";
toast.configure();

const CustLoginRegister = () => {
  const history = useHistory();

  const reset = () => {
    setname("");
    setemail("");
    setcontactNumber("");
    setdob("");
    setadharNumber("");
    setpassword("");
    setCpassword("");
  }

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [contactNumber, setcontactNumber] = useState("");
  const [dob, setdob] = useState("");
  const [adharNumber, setadharNumber] = useState("");
  const [password, setpassword] = useState("");
  const [cPassword, setCpassword] = useState("");
  const role = "CUSTOMER";
  const [error, seterror] = useState("");
  const [errortype, seterrortype] = useState("");


  // for session management

  if(localStorage.getItem('jwttoken') && localStorage.getItem('role')==="CUSTOMER" ) {
    history.push("/customer/welcome");
  }


  if( localStorage.getItem('jwttoken') && localStorage.getItem('role')==="ADMIN"){
    history.push("/admin/welcome")
  }else if( localStorage.getItem('jwttoken') && localStorage.getItem('role')==="MANAGER"){
    history.push("/manager/welcome")
  }else if( localStorage.getItem('jwttoken') && localStorage.getItem('role')==="EMPLOYEE"){
    history.push("/employee/welcome")
  }



  const login = (e) => {
    e.preventDefault();
    const customer = { email, password };
    axios.post(url + "/login", customer, { authHeader }).then((Response) => {
      if (Response.data.jwt)
        localStorage.setItem('jwttoken', JSON.stringify(Response.data.jwt));

      if (Response.data.role == '[ROLE_CUSTOMER]') {
        localStorage.setItem('role', "CUSTOMER");
        history.push("/customer/welcome");
      }
      else {
        setemail("");
        setpassword("");
        seterror("INVALID CREDENTIALS or AUTHORITY");
        seterrortype("alert-box");
        console.log('Something went wrong', error);
      }

    }
    ).catch(error => {
      setemail("");
      setpassword("");
      seterror("INVALID CREDENTIALS");
      seterrortype("alert-box");
      console.log('Something went wrong', error);
    });
  }

  const registerCustomer = (e) => {
    e.preventDefault();

    const Eerror = document.getElementById("Eerror");
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      Eerror.textContent = "";

      if (/[1236547890!@#$%^&*()+=:;"'<,>/_]/.test(name)) {
        console.log("invalid Name");
        Swal.fire({
          icon: 'error',
          title: 'Only Alphabates and spaces are allowed in Name',
          text: '',
          footer: ''
        })
      } else {

        if (password.length > 5) {
          if (password === cPassword) {

            if (contactNumber.length == 10 && adharNumber.length == 12) {
              const customer = {
                name,
                email,
                contactNumber,
                dob,
                adharNumber,
                password,
                role
              }
              toast.info("Registering Your Details, Please wait for a while.....");
              axios.post(url + "/registration", customer).then(Response => {
                Swal.fire(
                  ' You are Registered Successfully',
                  '',
                  'success'
                )
                history.push("/customer");
                const container = document.querySelector(".container-l");
                container.classList.remove("sign-up-mode");
              }).catch(error => {
                reset();

                Swal.fire({
                  icon: 'error',
                  title: 'Something Went Wrong',
                  text: '',
                  footer: ''
                })
              });
            }
            else {
              if (contactNumber.length != 10) {

                console.log("invalid Contact Number");
                Swal.fire({
                  icon: 'error',
                  title: 'Please Check, Contact Number must be 10 digit',
                  text: '',
                  footer: ''
                })
              } else if (adharNumber.length != 12) {

                console.log("invalid Adhar Number");
                Swal.fire({
                  icon: 'error',
                  title: 'Please Check, Adhar Number must be 12 digit',
                  text: '',
                  footer: ''
                })
              }

            }

          }
          else {
            console.log("invalid password not matched");
            Swal.fire({
              icon: 'error',
              title: 'Please Check Confirm Password should be same as Password',
              text: '',
              footer: ''
            })
          }
        } else {
          console.log("invalid password length");
          Swal.fire({
            icon: 'error',
            title: 'Password Length should be greater than 5',
            text: '',
            footer: ''
          })
        }
      }

    } else {
      Eerror.textContent = "You have entered an invalid email address!";
      Eerror.style.color = "red"
    }
  }

  useEffect(() => {
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".container-l");
    sign_up_btn.addEventListener("click", () => {
      container.classList.add("sign-up-mode");
    });

    sign_in_btn.addEventListener("click", () => {
      container.classList.remove("sign-up-mode");
    });
  }
  );
  return (
    <div>
      <div className="container-l">
        <div className="forms-container">
          <div className="signin-signup">
            <form action="#" className="sign-in-form l-form">
              <h2 className="title fw-bold">Sign In</h2>
              <input type="text" className="input-fields-l" placeholder="Email" onChange={(e) => { setemail(e.target.value) }} required />
              <input type="password" className="input-fields-l" minLength={6} placeholder="Password" onChange={(e) => { setpassword(e.target.value) }} required />
              <input type="submit" value="Login" className="btn-l solid" onClick={login} />
              <Link className="btn text-white" to={"/forgotpassword"}>Forgot Password ?</Link>
              <div className={errortype} role="alert">{error}</div>
            </form>
            <form className="sign-up-form l-form">
              <h2 className="title fw-bold">Sign Up</h2>
              <input type="text" className="input-fields-r" placeholder="Enter Full Name" value={name} onChange={(e) => { setname(e.target.value) }} required />

              <input type="email" className="input-fields-r" placeholder="Enter Email" onChange={(e) => { setemail(e.target.value) }} required />
              <span id="Eerror"></span>
              <input type="number" className="input-fields-r" placeholder="Enter Contact Number" value={contactNumber} onChange={(e) => { setcontactNumber(e.target.value) }} required />
              <input type="date" className="input-fields-r" placeholder="Enter Date of Birth" value={dob} onChange={(e) => { setdob(e.target.value) }} required />
              <input type="number" className="input-fields-r" placeholder="Enter Aadhar Number" value={adharNumber} onChange={(e) => { setadharNumber(e.target.value) }} required />
              <input type="password" className="input-fields-r" minLength={6} placeholder="Enter New Password" value={password} onChange={(e) => { setpassword(e.target.value) }} />
              <input type="password" className="input-fields-r" minLength={6} placeholder="Confirm Password" value={cPassword} onChange={(e) => { setCpassword(e.target.value) }} />
              <input type="submit" className="btn-l" value="Sign up" onClick={registerCustomer} />
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content pt-5">
              <h2 className="pt-5 pb-3">New here ?</h2>
              <button className="btn btn-l transparent w-100" id="sign-up-btn"  >
                Sign up
              </button>
            </div>
            <img src={log} className="image-l" alt="" />
          </div>
          <div className="panel right-panel">
            <div className="content pt-5">
              <h2 className="pt-5 pb-3">One of us ?</h2>
              <button className="btn btn-l transparent w-100" id="sign-in-btn" >
                Sign In
              </button>
            </div>
            <img src={register} className="image-l" alt="" />
          </div>
        </div>
      </div>

    </div>
  );
};

export default CustLoginRegister;
