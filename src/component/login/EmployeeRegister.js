import React, { useEffect, useState } from "react";
import axios from "axios";
import "./LoginRegister.css";
import register from "../../images/register.svg"
import { Link, useHistory } from "react-router-dom";
import { url } from "../common/constants";
import Swal from "sweetalert2";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

const EmployeeRegister = () => {
  const history = useHistory();
  const loginrole = localStorage.getItem("role");

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
  const [accountNumber, setaccountNumber] = useState("");
  const [role, setrole] = useState("");
  const [salary, setsalary] = useState("");
  const [password, setpassword] = useState("");
  const [cPassword, setCpassword] = useState("");
  const [error, seterror] = useState("");


  const registerCustomer = (e) => {
    e.preventDefault();
    const customer = {
      name,
      email,
      contactNumber,
      dob,
      adharNumber,
      accountNumber,
      password,
      role,
      salary
    }
   
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
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
                console.log(Response.data);
                Swal.fire(
                  ' You are Registered Successfully',
                  '',
                  'success'
                )
                history.push("/manager/viewemployees")
              }).catch(error => {
                Swal.fire({
                  icon: 'error',
                  title: 'Please fill all the Details',
                  text: '',
                  footer: ''
                })
              })
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
      Swal.fire({
        icon: 'error',
        title: 'Invalid Email Adress',
        text: '',
        footer: ''
      })
    }


  }
  return (
    <div>
      <div className="container-l">
        <div className="forms-container">
          <div className="signin-signup-mod mt-5">
            <form action="#" className="sign-in-form l-form">
              <h2 className="title fw-bold">Register New Employee</h2>
              <table>
                <tbody>
                  <tr>
                    <td colSpan={2}>
                      <input type="text" className="input-fields-mod" placeholder="Enter Full Name" value={name} onChange={(e) => { setname(e.target.value) }} />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <input type="email" className="input-fields-mod" placeholder="Enter Email" value={email} onChange={(e) => { setemail(e.target.value) }} />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="number" className="input-fields-mod" placeholder="Enter Contact Number" value={contactNumber} onChange={(e) => { setcontactNumber(e.target.value) }} />
                    </td>
                    <td>
                      <input type="date" className="input-fields-mod" placeholder="Enter Date of Birth" value={dob} onChange={(e) => { setdob(e.target.value) }} />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <input type="number" className="input-fields-mod" placeholder="Enter Aadhar Number" value={adharNumber} onChange={(e) => { setadharNumber(e.target.value) }} />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <input type="number" className="input-fields-mod" placeholder="Enter Account Number" value={accountNumber} onChange={(e) => { setaccountNumber(e.target.value) }} />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {loginrole == "MANAGER" ?
                        <select name="roles" id="roles" className="input-fields-mod" onChange={(e) => { setrole(e.target.value) }}>
                          <option value="" hidden>Choose Role</option>
                          <option value="EMPLOYEE">EMPLOYEE</option>
                          <option value="MANAGER">MANAGER</option>
                        </select>
                        :
                        <select name="roles" id="roles" className="input-fields-mod" onChange={(e) => { setrole(e.target.value) }}>
                          <option value="" hidden>Choose Role</option>
                          <option value="EMPLOYEE">EMPLOYEE</option>
                          <option value="MANAGER">MANAGER</option>
                          <option value="ADMIN">ADMIN</option>
                        </select>
                      }
                    </td>
                    <td>
                      <input type="number" className="input-fields-mod" placeholder="Enter Salary" value={salary} onChange={(e) => { setsalary(e.target.value) }} />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <input type="password" className="input-fields-mod" placeholder="Enter New Password" value={password} onChange={(e) => { setpassword(e.target.value) }} />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <input type="password" className="input-fields-mod" placeholder="Confirm Password" value={cPassword} onChange={(e) => { setCpassword(e.target.value) }} />
                    </td>
                  </tr>
                </tbody>
              </table>
              <input type="submit" className="btn-l" value="Register" onClick={registerCustomer} />
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content pt-5">
              <h1 className="pt-5 pb-3">Onboarding Employee</h1>
            </div>
            <img src={register} className="image-l" alt="" />
          </div>
        </div>
      </div>

    </div>
  );
};

export default EmployeeRegister;
