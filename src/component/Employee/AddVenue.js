import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { url } from "../common/constants";
import axios from "axios";
import authHeader from "../services/auth-header"
import Swal from 'sweetalert2';
// import employeeService from '../services/employee.service';

const AddVenue = () => {
    const history = useHistory();
    const [name, setname] = useState("");
    const [location, setlocation] = useState("")
    const [address, setaddress] = useState("")
    const [maxCapacity, setmaxCapacity] = useState("")
    const [description, setdescription] = useState("")
    const [category, setcategory] = useState("")   
    const [contact, setcontact] = useState("")
    const [cost, setcost] = useState("")
    const token=JSON.parse(localStorage.getItem("jwttoken"));

    const HandleAddVenue = () => {
        const venue={
            name,
            location,
            address,
            maxCapacity,
            description,
            category,
            contact,
            cost
        }
        axios.post(url + "/addvenue",venue,{headers:{"authorization":`Bearer ${token}`}})
            .then(response => {
                console.log('Printing Venues data', response.data);
                Swal.fire(
                    'Venue Added Successfully',
                    '',
                    'success'
                  )
                  history.goBack();

            })
            .catch(error => {
                console.log('Something went wrong', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Unable to Add Venue',
                    text: '',
                    footer: ''
                  })
            })
    }


    return (
        <div className="forms-container">
            <div className="container py-5 text-white my-5">
                <div colSpan="2" className="fw-bold p-3 mt-2 display-6">
                    Add Venue
                </div>
                <div className="mb-3 row justify-content-center align-content-center">
                    <div className="col-2">
                        <label htmlFor="name" className="form-label fs-4">Venue Name</label>
                    </div>
                    <div className="col-8">
                        <input type="text" className="form-control" id="name" onChange={(e) => { setname(e.target.value) }} />
                    </div>
                </div>
                <div className="mb-3 row justify-content-center align-content-center">
                    <div className="col-2">
                        <label htmlFor="location" className="form-label fs-4">Location</label>
                    </div>
                    <div className="col-8">
                        <input type="text" className="form-control" id="location" onChange={(e) => { setlocation(e.target.value) }} />
                    </div>
                </div>
                <div className="mb-3 row justify-content-center align-content-center">
                    <div className="col-2">
                        <label htmlFor="address" className="form-label fs-4">Address</label>
                    </div>
                    <div className="col-8">
                        <input type="text" className="form-control" id="address" onChange={(e) => { setaddress(e.target.value) }} />
                    </div>
                </div>
                <div className="mb-3 row justify-content-center align-content-center">
                    <div className="col-2">
                        <label htmlFor="capacity" className="form-label fs-4">Capacity</label>
                    </div>
                    <div className="col-8">
                        <input type="number" className="form-control" id="capacity" onChange={(e) => { setmaxCapacity(e.target.value) }} />
                    </div>
                </div>
                <div className="mb-3 row justify-content-center align-content-center">
                    <div className="col-2">
                        <label htmlFor="category" className="form-label fs-4">Category</label>
                    </div>

                    <div className="col-8">
                        <select name="category" id="category" className="input-fields-mod" onChange={(e) => { setcategory(e.target.value) }}>
                        <option value="" hidden>Select Category</option>
                            <option value="Indoor">Indoor</option>
                            <option value="Outdoor">Outdoor</option>
                            <option value="Lawn">Lawn</option>
                        </select>
                    </div>
                </div>
                <div className="mb-3 row justify-content-center align-content-center">
                    <div className="col-2">
                        <label htmlFor="rate" className="form-label fs-4">Contact</label>
                    </div>
                    <div className="col-8">
                        <input type="number" className="form-control" id="rate" onChange={(e) => { setcontact(e.target.value) }} />
                    </div>
                </div>
                <div className="mb-3 row justify-content-center align-content-center">
                    <div className="col-2">
                        <label htmlFor="rate" className="form-label fs-4">Cost</label>
                    </div>
                    <div className="col-8">
                        <input type="number" className="form-control" id="rate" onChange={(e) => { setcost(e.target.value) }} />
                    </div>
                </div>
                <div className="mb-3 row justify-content-center align-content-center">
                    <div className="col-2">
                        <label htmlFor="description" className="form-label fs-4">Description</label>
                    </div>
                    <div className="col-8">
                        <input type="text" className="form-control" id="description" onChange={(e) => { setdescription(e.target.value) }} />
                    </div>
                </div>
                <div className="py-2">
                <button type="submit" className="btn btn-l w-25" onClick={HandleAddVenue}>ADD VENUE</button>
                </div>
            </div>
        </div >
    );
}

export default AddVenue;
