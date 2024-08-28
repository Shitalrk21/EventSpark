import { useEffect, useState } from 'react';
import axios from "axios";
import { url } from '../common/constants';
import { Link,useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();


const AssignEmployee = () => {
    const [Employee, setEmployee] = useState([]);
    const [Emp, setEmp] = useState('');
    const {id} = useParams()
    const token=JSON.parse(localStorage.getItem("jwttoken"));
    const role = localStorage.getItem("role");
  

    useEffect(() => {
        init();
    }, []);
    

    const AssignEmp=(emp)=>{
        toast.info("Assigning Employee, Please wait for a while.....");
        axios.put(url+"/assignemployee/"+id,emp,{headers:{"authorization":`Bearer ${token}`}}).then(Response => {
            console.log('Employee Assigned Successfully');
            Swal.fire(
                ' Employee Assigned Successfully',
                '',
                'success'
              )
          })
          .catch(error => {
            console.log('Something went wrong', error);
            Swal.fire({
                icon: 'error',
                title: 'Unable to Assign Employee',
                text: '',
                footer: ''
              })
          }) 
    }


    const init = () => {
        axios.get(url + "/allemployees/M"+role)
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
                <div  className="fw-bold pt-5 display-6">
                    Employees
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
                                        {/* <button className='btn-l' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setEmp(emp)}>Unassign Employee</button> */}
                                        <button className='btn-l' onClick={()=>AssignEmp(emp)}>ASSIGN</button>
                                    </td> 
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    );
}

export default AssignEmployee;
