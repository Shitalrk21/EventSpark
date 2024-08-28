import { useEffect, useState } from 'react';
import axios from "axios";
import { url } from '../common/constants';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

const ViewEmployee = () => {
    const [Employee, setEmployee] = useState([]);
    const [Id, setId] = useState();
    const role = localStorage.getItem("role");

    useEffect(() => {
        init();
    }, []);

    const HandleRemove = (id) => {
        console.log("id is" + id);
        axios.delete(url + "/deleteemployee/" + id).then(Response => {
            console.log('delete Employee successfully');
            toast.success("Employee Removed Successfully");
            init();
        })
            .catch(error => {
                console.log('Something went wrong', error);
                toast.error("Unable to Remove Employee");
            })
    }



    const init = () => {

        axios.get(url + "/allemployees/" + role)
            .then(Response => {
                console.log('Printing Employee data', Response.data);
                setEmployee(Response.data);
            })
            .catch(error => {
                console.log('Something went wrong', error);
            })
    };

    return (

        <div className="forms-container">
            <div className="py-5 text-white my-5">
                <div className="fw-bold pt-5 display-6">
                    Employees
                </div>
                <Link className='btn btn-l w-50 mt-4' to='/regemployee' >register new Employee</Link>
                <div className="py-3 list-items">
                    <table className="col-12 table-bordered text-start text-white">
                        <thead>
                            <tr className='bg-white text-black text-center'>
                                <th>
                                    <h4 className=" px-3">Id</h4>
                                </th>
                                <th>
                                    <h4 className="px-3">Name</h4>
                                </th>
                                <th>
                                    <h4 className="px-3">Email</h4>
                                </th>
                                <th>
                                    <h4 className="px-3">Role</h4>
                                </th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>

                            {Employee.map((emp) => (
                                <tr key={emp.id} className="event__box py-2 px-2">
                                    <td><h4 className="text-start px-3">{emp.id}</h4></td>
                                    <td><h4 className="text-start px-3">{emp.name}</h4></td>
                                    <td><h4 className="text-start px-3">{emp.email}</h4></td>
                                    <td><h4 className="text-start px-3">{emp.role}</h4></td>
                                    {/* <td><button className='btn-l float-md-right' onClick={() => { HandleRemove(emp.id) }}>Remove Employee</button></td> */}
                                    <td className='text-center'>
                                        <button className='btn-l' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setId(emp.id)}>REMOVE {emp.role}</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Remove Employee Popup div */}
                    <div className="modal fade text-black" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Warning</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body text-start">
                                    Are you Sure, you want to fire this Employee?
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary " onClick={() => { HandleRemove(Id) }} data-bs-dismiss="modal">Yes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewEmployee;
