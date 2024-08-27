import React, { useState, useEffect } from "react";
import axios from "axios";
import { url } from "../common/constants";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

const AssignTask = () => {
  const [tasks, setTasks] = useState([]);
  const [todo, settodo] = useState("");
  const token = JSON.parse(localStorage.getItem("jwttoken"));
  const { id } = useParams();

  const HandleDelete = (id) => {
    axios.delete(`${url}/deletetask/${id}`).then(Response => {
      console.log('Task Terminated Successfully', Response.data);
      Swal.fire(
        ' Task Terminated Successfully',
        '',
        'success'
      )
      init();
    })
      .catch(error => {
        console.log('Something went wrong', error);
      });
  }
  
  const init = () => {
    axios.get(url + "/assigntasks/" + id).then(Response => {
      console.log('Printing Task Data', Response.data);
      setTasks(Response.data);
     
      })
      .catch(error => {
        console.log('Something went wrong', error);
    })     
  }

  const HandleAssign = () => {
    const task1={todo}
    console.log(todo);
    toast.info("Assigning Tasks, Please wait for a while.....");
    axios.post(url+"/assign/"+id,task1, { headers: { "authorization": `Bearer ${token}` } }).then(Response => {
      console.log('Task Assigned Successfully', Response.data);
      Swal.fire(
        ' Task Assigned Successfully',
        '',
        'success'
        )
        settodo(' ');
      init();
    })
    .catch(error => {
      console.log('Something went wrong', error);
      Swal.fire({
        icon: 'error',
        title: 'Unable to Assign Task',
        text: '',
        footer: ''
      })
    })
    
  }
  useEffect(() => {
    init();
  },[]);

  return (
    // <div className=" position-absolute top-50 start-50 translate-middle h-100 w-100">
    <div className="forms-container">
      <div className="container py-4 text-white my-5">
        <div className="row">
          <div className="py-5 mb-3">
          <div colSpan="2" className="fw-bold p-3 display-6">
                    Assign Task
                </div>
            <textarea className="form-control"  id="Textarea" rows="3" value={todo} onChange={(e) => { settodo(e.target.value) }}></textarea>
            <button type="button" className="btn btn-l mb-5"  onClick={HandleAssign}  >ASSIGN</button>
        <div className="container align-items-center w-50 bg-danger pt-1 rounded"></div>
          </div>
        </div>
        <div className="row">
          <div colSpan="2" className="fw-bold h2 mb-4">
                    All Assigned Tasks
                </div>
          {tasks.map((task) => (
            <div className="mb-5 px-4 h-100" key={task.id}>
              <div className="services__box px-2 h-100 border border-2 border-white">
                <div><p className="py-3 h2">{task.todo}</p></div>
                <div><p className=" fs-2">{task.status}</p></div>
                <button className="btn btn-l mb-3" onClick={()=>HandleDelete(task.id)}>Terminate task</button>
              </div>
            </div>

          ))}
        </div>
      </div>
    </div>
  );
};

export default AssignTask;
