// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";


// const EditEvent = (props) => {
// const history=useHistory();
// const [name, setname] = useState("");
// const [type, settype] = useState("");
// const [date, setdate] = useState("");
// const [guestCount, setguestCount] = useState("");
// //const [event, setevent] = useState(initialState)
// const {event} = (props.location && props.location.state) || {};

// const init=()=>{
// console.log(event)
// }
// useEffect(() => {
//   init();
// }, [])

// const bookevent = (e) => {
//  // localStorage.setItem('eventdata',JSON.stringify(eventdata));
//   history.push("/customer/bookevent/selectvenue")
// }

//   return (    
//     <div className="forms-container">
//       <form className="Emplogin-form-in mt-3">
//         <table className="col-12 mt-5">
//           <thead>
//             <tr>
//               <td colSpan="2" className="fw-bold  pt-5 pb-3  display-6">
//                 Book an Event with Us
//               </td>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td className="text-start col-4 fs-4">Event Name:</td>
//               <td><input type="text" className="my-2" value={name} placeholder="Enter Event Name" onChange={(e)=>{setname(e.target.value)}}/></td>
//             </tr>
//             <tr>
//               <td className="text-start col-2 fs-4">Event Type:</td>
//               <td><input type="text" className="my-2" value={type} placeholder="Enter Event Type" onChange={(e)=>{settype(e.target.value)}}/></td>
//             </tr>
//             <tr>
//               <td className="text-start col-2 fs-4">Event Date:</td>
//               <td><input type="date" className="my-2" value={date} placeholder="Enter Event Date" onChange={(e)=>{setdate(e.target.value)}}/></td>
//             </tr>
          
//             <tr>
//               <td className="text-start col-2 fs-4">Expected Guest Count:</td>
//               <td><input type="number" className="my-2" value={guestCount} placeholder="Enter Expected Guest Count" onChange={(e)=>{setguestCount(e.target.value)}}/></td>
//             </tr>
//           </tbody>
//         </table>
//         <div className="d-grid col-10 mt-3 mx-auto">
//           {/* <Link className="btn bg-danger btn-lg text-white my-3 px-5 py-2 rounded-pill" to={"/customer/bookevent/selectvenue"} onClick={bookevent}>Proceed</Link> */}
//           <button className="btn bg-danger btn-lg text-white my-3 px-5 py-2 rounded-pill" onClick={bookevent} >Proceed</button>
//        </div>
//       </form>


//     </div>
//   );
// };

// export default EditEvent;
