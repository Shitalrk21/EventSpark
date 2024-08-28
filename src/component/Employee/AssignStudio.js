import { useEffect, useState } from 'react';
import axios from "axios";
import { url } from '../common/constants';
import { useHistory, useParams } from "react-router-dom";
import Swal from 'sweetalert2';

const AssignStudio = () => {

  const history=useHistory();
  const [Studio, setStudio] = useState([]);
  const {id} = useParams()
  const token=JSON.parse(localStorage.getItem("jwttoken"));


  const init = () => {
    axios.get(url+"/studio")
      .then(Response => {
        console.log('Printing studio data', Response.data);
        setStudio(Response.data);
      })
      .catch(error => {
        console.log('Something went wrong', error);
      }) 
  }

  const handleStudio=(studio)=>{
    axios.put(url+"/assignstudio/"+id,studio,{headers:{"authorization":`Bearer ${token}`}}).then(Response => {
        console.log('Studio Assigned Successfully');
        Swal.fire(
          ' Studio Assigned Successfully',
          '',
          'success'
          )
        history.goBack();
      })
      .catch(error => {
        console.log('Something went wrong', error);
        Swal.fire({
          icon: 'error',
          title: 'Unable to Assign Studio',
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
      <div className="py-5 text-white my-5">
      <div colSpan="2" className="fw-bold pt-5 display-6">
              Studios
              </div>
        <div className="py-4 list-items">
          {Studio.map((std) => (
            <div key={std.id} onClick={()=>handleStudio(std)}>              
                <div className="event__box py-2 px-2 border border-2 border-white">
                  <h4 className="text-start px-3">Name: {std.name}</h4>
                  <h4 className="text-start px-3">Contact: {std.contact}</h4>
                  <h4 className="text-start px-3">Photography Cost: {std.photographycost}</h4>   
                  <h4 className="text-start px-3">Videography Cost: {std.videographycost}</h4>  
                  <h4 className="text-start px-3">Album Cost: {std.albumcost}</h4>  
                  <h4 className="text-start px-3">Drone Cost: {std.dronecost}</h4>  
                  <h4 className="text-start px-3">Crane Cost: {std.cranecost}</h4>          
                </div>
                <br></br>
            </div>

          ))}
        </div>
      </div>
    </div>
  );
}

export default AssignStudio;
