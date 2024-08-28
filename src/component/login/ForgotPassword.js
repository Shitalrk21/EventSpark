import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { url } from "../common/constants";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./EmpLogin.css"
import Swal from "sweetalert2";

toast.configure();
const ForgotPassword = (e) => {
    const history = useHistory();
    const [email, setemail] = useState("")
    const [password, setPassword] = useState("")
    const [cpassword, setcPassword] = useState("")
    const [otp, setotp] = useState("")
    const [confirmOtp, setConfirmotp] = useState("")
    const GenerateAndSendOTP = () => {
        console.log(email);
        toast.info("Sending OTP on your Email...");
        axios.get(url + "/generateotp/" + email)
            .then(Response => {
                console.log(Response.data);
                setConfirmotp(Response.data);
                toast.success("OTP has been sent to your email");
            })
            .catch(error => {
                console.log('Something went wrong', error);
            })
    };
    const HandleOtp = () => {
        if (confirmOtp == otp) {
            if (password == cpassword) {
                const Credential = { email, password }
                axios.put(url + "/changepassword", Credential).then(Response => {
                    console.log(Response.data);
                    Swal.fire(
                        'Password Changed Successfully',
                        '',
                        'success'
                      )
                      history.push("/")
                    })
                    .catch(error => {
                        console.log('Something went wrong', error);
                    })
            }
            else{ 
                console.log("password and confirm password not matched");
                Swal.fire({
                    icon: 'error',
                    title: 'Please Cofirm Password same as Password',
                    text: '',
                    footer: ''
                })
            }
        }else{
            console.log("wrong otp");
            Swal.fire({
                icon: 'error',
                title: 'Please Enter Correct OTP',
                text: '',
                footer: ''
              })
        }
    }
    return (
        <div className="forms-container">

            <div className="p-3 mt-3 position-absolute top-50 start-50 translate-middle loginform">

                <h2>
                    Forgot Password ?
                </h2>
                <div className="my-4 mx-5">
                    <label htmlFor="Email" className="form-label mb-0 h5">Enter Email</label>
                    <div>
                        <input type="email" className="input-fields-l w-75" id="Email" aria-describedby="emailHelp" value={email} onChange={(e) => { setemail(e.target.value) }} />&nbsp;&nbsp;
                        <button className="btn btn-l bg-success" onClick={GenerateAndSendOTP}>Get otp</button>
                    </div>
                </div>

                <h2>
                    Change Password
                </h2>
                <div className="mb-2 mt-4 mx-5">
                    <label htmlFor="password" className="form-label mb-0 h5">Enter New Password</label>
                    <input type="password" className="input-fields-l" id="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                </div>
                <div className="mb-2 mx-5">
                    <label htmlFor="cpassword" className="form-label mb-0 h5">Confirm New Password</label>
                    <input type="password" className="input-fields-l" id="cpassword" value={cpassword} onChange={(e) => { setcPassword(e.target.value) }} />
                </div>
                <div className="mx-5">
                    <label htmlFor="otp" className="form-label mb-0 h5">Enter OTP</label>&nbsp;&nbsp;
                    <div>
                        <input type="text" className="input-fields-l w-75" id="otp" value={otp} onChange={(e) => { setotp(e.target.value) }} />&nbsp;&nbsp;&nbsp;&nbsp;
                        <button type="button" className="btn btn-l bg-primary" onClick={HandleOtp}>Confirm</button>
                    </div>
                </div>





            </div>
        </div>


    )
}
export default ForgotPassword;