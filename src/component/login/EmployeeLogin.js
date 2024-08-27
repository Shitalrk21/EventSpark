import React, { useEffect, useState } from "react";
import authHeader from "../services/auth-header";
import axios from "axios";
import "./LoginRegister.css";
import log from "../../images/log.svg"
import { Link, useHistory } from "react-router-dom";
import { url } from "../common/constants";

const EmployeeLogin = () => {






  const history = useHistory();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState("");
  const [errortype, seterrortype] = useState("");

  if( localStorage.getItem('jwttoken') && localStorage.getItem('role')==="ADMIN"){
    history.push("/admin/welcome")
  }else if( localStorage.getItem('jwttoken') && localStorage.getItem('role')==="MANAGER"){
    history.push("/manager/welcome")
  }else if( localStorage.getItem('jwttoken') && localStorage.getItem('role')==="EMPLOYEE"){
    history.push("/employee/welcome")
  }else if(localStorage.getItem('jwttoken') && localStorage.getItem('role')==="CUSTOMER" ) {
    history.push("/customer/welcome");
  }
   
  

 


  const Login = (e) => {
    e.preventDefault();
    const employee = { email, password };
    axios.post(url + "/login", employee, { authHeader }).then((Response) => {
      console.log(Response.data.role);

      console.log(Response.data.jwt);
      if (Response.data.jwt && Response.status == 200) {
        localStorage.setItem('jwttoken', JSON.stringify(Response.data.jwt));
        if (Response.data.role == '[ROLE_MANAGER]') {
          localStorage.setItem('role', "MANAGER");
          history.push("manager/welcome");
        }
        else if (Response.data.role == '[ROLE_EMPLOYEE]') {
          localStorage.setItem('role', "EMPLOYEE");
          history.push("employee/welcome")
        }
        else if (Response.data.role == '[ROLE_ADMIN]') {
          localStorage.setItem('role', "ADMIN");
          history.push("admin/welcome")
        }
        else {
          seterrortype("alert-box");
          seterror("INVALID CREDENTIALS or AUTHORITY")
        }
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

  useEffect(() => {
    const container = document.querySelector(".container-l");
  });
  return (
    <div>
      <div className="container-l">
        <div className="forms-container">
          <div className="signin-signup">
            <form action="#" className="sign-in-form l-form">
              <h2 className="title fw-bold">Team Sign In</h2>
              <input type="text" className="input-fields-l" placeholder="Email" value={email} onChange={(e) => { setemail(e.target.value) }} />
              <input type="password" className="input-fields-l" placeholder="Password" value={password} onChange={(e) => { setpassword(e.target.value) }} />
              <input type="submit" value="Login" className="btn-l solid" onClick={Login} />
              <Link className="btn text-white" to={"/forgotpassword"}>Forgot Password ?</Link>
              <div className={errortype} role="alert">{error}</div>
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content pt-5">
              <h1 className="pt-5 pb-3">Hello, Folks!</h1>

            </div>
            <img src={log} className="image-l" alt="" />
          </div>

        </div>
      </div>

    </div>
  );
}
export default EmployeeLogin;
