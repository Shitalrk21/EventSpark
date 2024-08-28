


import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { url } from "../common/constants";
import axios from "axios";
import profilelogo from "../../images/profilelogo.png";
import authHeader from "../services/auth-header"
import Swal from 'sweetalert2';
// import employeeService from '../services/employee.service';

const ViewProfile = () => {
    const history = useHistory();
    const [user, setUser] = useState("");
    const [count, setcount] = useState("");
    const role = localStorage.getItem("role");

    const token = JSON.parse(localStorage.getItem("jwttoken"));

    const init = () => {
        axios.get(url + "/viewprofile", { headers: { "authorization": `Bearer ${token}` } })
            .then(response => {
                console.log('Printing Profile data', response.data);
                setUser(response.data);
                setcount(response.data.regevents.length);
            })
            .catch(error => {
                console.log('Something went wrong', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Unable to View Profile',
                    text: '',
                    footer: ''
                })
            })
    }

    useEffect(() => {
        init();
    }, []);


    return (
        <div className="forms-container">
            <div className="container py-3 text-white my-5">
                <div colSpan="2" className="p-2 mt-2">
                    <img src={profilelogo} alt="Image Not Found" width="100" height="100" />
                    <div className='display-4 fw-bold my-2 '>{user.name}</div>
                    <h4>{user.role}</h4>
                </div>
                {role == "CUSTOMER" ?
                    <div className="w-100 py-3 bg-white text-black">
                        <div className="mb-3 row justify-content-center align-content-center">
                            <div className="col-2 d-flex justify-content-start align-content-start">
                                <div className="fs-4">Name :</div>
                            </div>
                            <div className="col-3 ms-4 d-flex justify-content-start align-content-start">
                                <h3>{user.name}</h3>
                            </div>
                        </div>
                        <div className="mb-3 row justify-content-center align-content-center">
                            <div className="col-2 d-flex justify-content-start align-content-start">
                                <div className="fs-4">Email :</div>
                            </div>
                            <div className="col-3 ms-4 d-flex justify-content-start align-content-start">
                                <h3>{user.email}</h3>
                            </div>
                        </div>
                        <div className="mb-3 row justify-content-center align-content-center">
                            <div className="col-2  d-flex justify-content-start align-content-start">
                                <div className="fs-4">Contact Number :</div>
                            </div>
                            <div className="col-3 ms-4 d-flex justify-content-start align-content-start">
                                <h3>{user.contactNumber}</h3>
                            </div>
                        </div>
                        <div className="mb-3 row justify-content-center align-content-center">
                            <div className="col-2  d-flex justify-content-start align-content-start">
                                <div className="fs-4">Date of Birth :</div>
                            </div>
                            <div className="col-3 ms-4 d-flex justify-content-start align-content-start">
                                <h3>{user.dob}</h3>
                            </div>
                        </div>
                        <div className="mb-3 row justify-content-center align-content-center">
                            <div className="col-2  d-flex justify-content-start align-content-start">
                                <div className="fs-4">Aadhar Number :</div>
                            </div>
                            <div className="col-3 ms-4 d-flex justify-content-start align-content-start">
                                <h3>{user.adharNumber}</h3>
                            </div>
                        </div>
                        <div className="mb-1 row justify-content-center align-content-center bg-black text-white">
                            <div className="col-8 ms-4">
                                <h4>You've Registered {count} Events Till Date</h4>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="w-100 py-3 bg-white text-black">
                        <div className="mb-3 row justify-content-center align-content-center">
                            <div className="col-2 d-flex justify-content-start align-content-start">
                                <div className="fs-4">Name :</div>
                            </div>
                            <div className="col-3 ms-4 d-flex justify-content-start align-content-start">
                                <h3>{user.name}</h3>
                            </div>
                        </div>
                        <div className="mb-3 row justify-content-center align-content-center">
                            <div className="col-2 d-flex justify-content-start align-content-start">
                                <div className="fs-4">Email :</div>
                            </div>
                            <div className="col-3 ms-4 d-flex justify-content-start align-content-start">
                                <h3>{user.email}</h3>
                            </div>
                        </div>
                        <div className="mb-3 row justify-content-center align-content-center">
                            <div className="col-2  d-flex justify-content-start align-content-start">
                                <div className="fs-4">Contact Number :</div>
                            </div>
                            <div className="col-3 ms-4 d-flex justify-content-start align-content-start">
                                <h3>{user.contactNumber}</h3>
                            </div>
                        </div>
                        <div className="mb-3 row justify-content-center align-content-center">
                            <div className="col-2  d-flex justify-content-start align-content-start">
                                <div className="fs-4">Date of Birth :</div>
                            </div>
                            <div className="col-3 ms-4 d-flex justify-content-start align-content-start">
                                <h3>{user.dob}</h3>
                            </div>
                        </div>
                        <div className="mb-3 row justify-content-center align-content-center">
                            <div className="col-2  d-flex justify-content-start align-content-start">
                                <div className="fs-4">Aadhar Number :</div>
                            </div>
                            <div className="col-3 ms-4 d-flex justify-content-start align-content-start">
                                <h3>{user.adharNumber}</h3>
                            </div>
                        </div>
                        <div className="mb-3 row justify-content-center align-content-center">
                            <div className="col-2  d-flex justify-content-start align-content-start">
                                <div className="fs-4">Account Number :</div>
                            </div>
                            <div className="col-3 ms-4 d-flex justify-content-start align-content-start">
                                <h3>{user.accountNumber}</h3>
                            </div>
                        </div>
                        <div className="mb-3 row justify-content-center align-content-center">
                            <div className="col-2  d-flex justify-content-start align-content-start">
                                <div className="fs-4">Salary :</div>
                            </div>
                            <div className="col-3 ms-4 d-flex justify-content-start align-content-start">
                                <h3>{user.salary}</h3>
                            </div>
                        </div>
                        <div className="mb-1 row justify-content-center align-content-center bg-black text-white">
                            <div className="col-8 ms-4">
                                <h4>You've Worked on {count} Events Till Date</h4>
                            </div>
                        </div>
                    </div>}

            </div>
        </div >
    );
}

export default ViewProfile;
