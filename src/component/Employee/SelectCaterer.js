import { useEffect, useState } from 'react';
import axios from "axios";
import { url } from '../common/constants';


const SelectCaterer = () => {

  const [caterers, setCaterers] = useState([]);

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

            <div key={caterer.id}>
              {/* <Link className="nav-link text-white py-1" to={caterer.link}> */}
                <div className="event__box py-2 px-2 border border-2 border-white">
                  <h4 className="text-start px-3">Name: {caterer.name}</h4>
                  <h4 className="text-start px-3">Contact: {caterer.contactNumber}</h4>
                  <h4 className="text-start px-3">Speciality: {caterer.speciality}</h4>         
                </div>
              {/* </Link> */}
                <br></br>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SelectCaterer;
