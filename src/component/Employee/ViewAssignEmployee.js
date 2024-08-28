import { useEffect, useState } from 'react';
import axios from "axios";
import { url } from '../common/constants';
import { Link,useParams } from 'react-router-dom';
import Swal from 'sweetalert2';


const ViewAssignEmployee = () => {
    const [Employee, setEmployee] = useState([]);
    const [Emp, setEmp] = useState('');
    const {id} = useParams()
    const token=JSON.parse(localStorage.getItem("jwttoken"));
    const role=localStorage.getItem("role");
  

    const HandleRemove = (Emp) => {
        console.log("id is" + id);
        axios.put(url + "/unassignemployee/" + id,Emp,{headers:{"authorization":`Bearer ${token}`}}).then(Response => {
            console.log('Employee UnAssigned Successfully');
            Swal.fire(
                ' Employee UnAssigned Successfully',
                '',
                'success'
              )
            init();
        })
            .catch(error => {
                console.log('Something went wrong', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Unable to UnAssign Employee',
                    text: '',
                    footer: ''
                  })
            })
    }
    
    const AssignEmp=(emp)=>{
        axios.put(url+"/assignemployee/"+id,emp,{headers:{"authorization":`Bearer ${token}`}}).then(Response => {
            console.log('assign Employee successfully',);
          })
          .catch(error => {
            console.log('Something went wrong', error);
          }) 
    }

    
    const init = () => {
        if (role == "MANAGER") {
        axios.get(url + "/assignemployees/"+id)
        .then(Response => {
            console.log('Printing Employee data', Response.data);
                setEmployee(Response.data);
            })
            .catch(error => {
                console.log('Something went wrong', error);
            })
        }
        if (role == "ADMIN") {
            axios.get(url + "/assignmanagers/"+id)
            .then(Response => {
                console.log('Printing Manager data', Response.data);
                    setEmployee(Response.data);
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                })
            }
        };
        useEffect(() => {
            init();
        }, []);

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
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>

                            {Employee.map((emp) => (
                                <tr key={emp.id} className="event__box py-2 px-2">
                                    <td><h4 className="text-start px-3">{emp.id}</h4></td>
                                    <td><h4 className="text-start px-3">{emp.name}</h4></td>
                                    <td><h4 className="text-start px-3">{emp.email}</h4></td>
                                    {/* <td><button className='btn-l float-md-right' onClick={() => { HandleRemove(emp.id) }}>Remove Employee</button></td> */}
                                    <td className='text-center'>
                                        <button className='btn-l mx-2' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setEmp(emp)}>Unassign</button>
                                        <Link className='btn btn-l' to={`/assigntask/${emp.id}`}>ASSIGN Task</Link>
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
                                    <button type="button" className="btn btn-primary " onClick={() => { HandleRemove(Emp) }} data-bs-dismiss="modal">Yes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewAssignEmployee;
