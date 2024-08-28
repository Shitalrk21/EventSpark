import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { url } from "../common/constants";
import axios from "axios";
import authHeader from "../services/auth-header"
import Swal from 'sweetalert2';
// import employeeService from '../services/employee.service';

const AddStudio = () => {
    const history = useHistory();
    const [name, setname] = useState("");
    const [contact, setcontact] = useState("")

    const [photographycost, setphotographycost] = useState("")
    const [videographycost, setvideographycost] = useState("")
    const [albumcost, setalbumcost] = useState("")
    const [dronecost, setdronecost] = useState("")
    const [cranecost, setcranecost] = useState("")
    const token=JSON.parse(localStorage.getItem("jwttoken"));

    const HandleAddStudio = () => {
        const studio={
            name,
            contact,
            // photographycost,
            // videographycost,
            // albumcost,
            // dronecost,
            // cranecost
        }
        console.log(studio)
        axios.post(url + "/addstudio",studio,{headers:{"authorization":`Bearer ${token}`}})
            .then(response => {
                console.log('Printing studio data', response.data);
                Swal.fire(
                    'Studio Added Successfully',
                    '',
                    'success'
                  )
                  history.goBack();

            })
            .catch(error => {
                console.log('Something went wrong', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Unable to Add Studio',
                    text: '',
                    footer: ''
                  })
            })
            
    }


    return (
        <div className="forms-container">
            <div className="container py-5 text-white my-5">
                <div colSpan="2" className="fw-bold p-3 mt-2 display-6">
                    Add Studio
                </div>
                <div className="mb-3 row justify-content-center align-content-center">
                    <div className="col-2">
                        <label htmlFor="name" className="form-label fs-4">Studio Name</label>
                    </div>
                    <div className="col-8">
                        <input type="text" className="form-control" id="name" onChange={(e) => { setname(e.target.value) }} />
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
              

                {/* <div className="mb-3 row justify-content-center align-content-center">
                    <div className="col-2">
                        <label htmlFor="rate" className="form-label fs-4">Photography Cost</label>
                    </div>
                    <div className="col-8">
                        <input type="number" className="form-control" id="rate" onChange={(e) => { setphotographycost(e.target.value) }} />
                    </div>
                </div>
                <div className="mb-3 row justify-content-center align-content-center">
                    <div className="col-2">
                        <label htmlFor="rate" className="form-label fs-4">Videography Cost</label>
                    </div>
                    <div className="col-8">
                        <input type="number" className="form-control" id="rate" onChange={(e) => { setvideographycost(e.target.value) }} />
                    </div>
                </div>
                <div className="mb-3 row justify-content-center align-content-center">
                    <div className="col-2">
                        <label htmlFor="rate" className="form-label fs-4">Album Cost</label>
                    </div>
                    <div className="col-8">
                        <input type="number" className="form-control" id="rate" onChange={(e) => { setalbumcost(e.target.value) }} />
                    </div>
                </div>
                <div className="mb-3 row justify-content-center align-content-center">
                    <div className="col-2">
                        <label htmlFor="rate" className="form-label fs-4">Drone Cost</label>
                    </div>
                    <div className="col-8">
                        <input type="number" className="form-control" id="rate" onChange={(e) => { setdronecost(e.target.value) }} />
                    </div>
                </div>
                <div className="mb-3 row justify-content-center align-content-center">
                    <div className="col-2">
                        <label htmlFor="rate" className="form-label fs-4">Crane Cost</label>
                    </div>
                    <div className="col-8">
                        <input type="number" className="form-control" id="rate" onChange={(e) => { setcranecost(e.target.value) }} />
                    </div>
                </div> */}
                <div className="py-2">
                <button type="submit" className="btn btn-l w-25" onClick={HandleAddStudio}>ADD STUDIO</button>
                </div>
            </div>
        </div >
    );
}

export default AddStudio;
