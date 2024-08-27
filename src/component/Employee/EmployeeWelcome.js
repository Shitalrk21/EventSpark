import React, { useState, useEffect } from "react";
import axios from "axios";
import { url } from "../common/constants";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

const EmployeeWelcome = () => {
  const [status, setstatus] = useState("")
  const [tasks, setTasks] = useState([]);
  const [uname, setUname] = useState();

  const init = () => {
    const token = JSON.parse(localStorage.getItem("jwttoken"));
    axios.get(url + "/asigntasks", { headers: { "authorization": `Bearer ${token}` } }).then(Response => {
      console.log('Printing Task Data', Response.data);
      setTasks(Response.data);
    })
      .catch(error => {
        console.log('Something went wrong', error);
      })

    axios.get(url + "/nameaccess", { headers: { "authorization": `Bearer ${token}` } })
      .then(Response => {
        console.log('Printing User name', Response.data);
        setUname(Response.data);
      })
      .catch(error => {

        console.log(uname)
        console.log('Something went wrong', error);
      })

  }

  const Handledone = (t) => {
    axios.put(url + "/updatetask", t).then(Response => {
      console.log('Updated Task Data', Response.data);
      toast.success("Task Status Updated Successfully");
      init();
    })
      .catch(error => {
        console.log('Something went wrong', error);
      });
  }

  useEffect(() => {
    init();
  }, [])
  return (
    // <div className=" position-absolute top-50 start-50 translate-middle h-100 w-100">
    <div className="forms-container">
      <div className="container py-4 text-white my-5">
        <div colSpan="2" className="fw-bold p-3 display-6">
          Welcome, {uname}
        </div>
        <Link className='btn btn-l btn-warning my-3 w-50' to={"/customer/viewevent"}>View Assigned Events</Link>
        {(tasks.length === 0) ? <div className='mt-5 pt-5'><div className="bg-white text-black p-3 mt-5 h1">No Task Assigned Yet</div></div> :
          <div className="row">
            {tasks.map((task) => (
              <div className="py-5 px-4 h-100" key={task.id}>
                <div className="services__box py-5 px-2 h-100 border border-2 border-white">
                  <div className="mx-5 d-flex justify-content-end align-items-end text-white btn-group dropstart">

                    <Link className="dropdown-toggle text-white"
                      type="button"
                      id="dropdownMenuButton2"
                      to=""
                      data-bs-toggle="dropdown"

                      aria-expanded="false">
                      <AiOutlineMenu className="h1" />
                    </Link>
                    <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                      <li><button className="dropdown-item" value="Not Yet Started" onClick={(e) => { task.status = e.target.value; Handledone(task) }}>Not Yet Started</button></li>
                      <li><button className="dropdown-item" value="In Progress" onClick={(e) => { task.status = e.target.value; Handledone(task) }}>In Progress</button></li>
                      <li><button className="dropdown-item" value="Completed" onClick={(e) => { task.status = e.target.value; Handledone(task) }}>Completed</button></li>
                    </ul>
                  </div>
                  <div className="py-3 h1">{task.todo}</div>
                  <div className=" fs-2">{task.status}</div>
                  
                  
                  {/* <div><p className="py-5 fs-2">{task.status}</p></div> */}
                </div>
              </div>

            ))}
          </div>}
      </div>
    </div>
  );
};

export default EmployeeWelcome;
