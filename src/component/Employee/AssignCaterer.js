import { useEffect, useState } from 'react';
import axios from "axios";
import { url } from '../common/constants';
import { useHistory, useParams } from "react-router-dom";
import Swal from 'sweetalert2';


const AssignCaterer = () => {

  const history=useHistory();
  const [caterers, setCaterers] = useState([]);
  const {id} = useParams()
  const token=JSON.parse(localStorage.getItem("jwttoken"));

  const init = () => {
    axios.get(url+"/caters")
      .then(Response => {
        console.log('Printing Caterers data', Response.data);
        setCaterers(Response.data);
      })
      .catch(error => {
        console.log('Something went wrong', error);
      }) 
  }
  const handleCaterer=(cater)=>{
    axios.put(url+"/assigncaterer/"+id,cater,{headers:{"authorization":`Bearer ${token}`}}).then(Response => {
        console.log('Caterers Assigned Successfully');
        Swal.fire(
          ' Caterer Assigned Successfully',
          '',
          'success'
          )
        history.goBack();
      })
      .catch(error => {
        console.log('Something went wrong', error);
        Swal.fire({
          icon: 'error',
          title: 'Unable to Assign Caterer',
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
             Caterers
              </div>
        <div className="py-4 list-items">
          {caterers.map((caterer) => (

            <div key={caterer.id} onClick={()=>handleCaterer(caterer)}>
                <div className="event__box py-2 px-2 border border-2 border-white">
                  <h4 className="text-start px-3">Name: {caterer.name}</h4>
                  <h4 className="text-start px-3">Contact: {caterer.contactNumber}</h4>
                  <h4 className="text-start px-3">Speciality: {caterer.speciality}</h4>         
                </div>
                <br></br>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AssignCaterer;
