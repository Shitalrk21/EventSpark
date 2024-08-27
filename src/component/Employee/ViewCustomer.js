import { useEffect, useState } from 'react';
import axios from "axios";
import { url } from '../common/constants';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

const ViewCustomer = () => {
    const [Employee, setEmployee] = useState([]);
    const [Id, setId] = useState();
    const role = "viewcustomer";
    useEffect(() => {
        init();
    }, []);

    const init = () => {

        axios.get(url + "/allemployees/" + role)
            .then(Response => {
                console.log('Printing Customer data', Response.data);
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
                    Customers
                </div>
                
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
                                    <h4 className="px-3">Contact Number</h4>
                                </th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>

                            {Employee.map((emp) => (
                                <tr key={emp.id} className="event__box my-5 px-2">
                                    <td><h4 className="text-start px-3 my-3">{emp.id}</h4></td>
                                    <td><h4 className="text-start px-3 my-3">{emp.name}</h4></td>
                                    <td><h4 className="text-start px-3 my-3">{emp.email}</h4></td>
                                    <td><h4 className="text-start px-3 my-3">{emp.contactNumber}</h4></td>
                                    {/* <td><button className='btn-l float-md-right' onClick={() => { HandleRemove(emp.id) }}>Remove Employee</button></td> */}
                                   
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ViewCustomer;
