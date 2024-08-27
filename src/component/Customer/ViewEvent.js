import { useEffect, useState } from 'react';
import axios from "axios";
import { url } from '../common/constants';
import jsPDF from "jspdf"
import useRazorpay from "react-razorpay";
import Swal from 'sweetalert2';

// import employeeService from '../services/employee.service';

const ViewEvent = () => {
    const Razorpay = useRazorpay();
    const [events, setEvents] = useState([]);
    const token = JSON.parse(localStorage.getItem("jwttoken"));
    const init = () => {
        console.log(token);
        axios.get(url + "/regevents", { headers: { "authorization": `Bearer ${token}` } })
            .then(Response => {
                console.log('Printing Event data', Response.data);
                setEvents(Response.data);
            })
            .catch(error => {
                console.log('Something went wrong', error);
            })
    }

    const generatePDF = () => {
        var doc = new jsPDF("landscape", "px", "c2", true);
        doc.html(document.querySelector("#fordownload"), {
            callback: function (pdf) {
                pdf.save("BookingDetails.pdf");
            }
        })

    }
    const HandlePayment = (event) => {
 
        axios.post(url + "/payment", event, { headers: { "authorization": `Bearer ${token}` } })
            .then(response => {
                console.log(' data', response.data);
                console.log(' data', response.data.status);
                console.log("fff")
                if (response.data.status == "created") {

                    let options = {
                        key: 'rzp_test_iU4N0Hfz8SDIJU',
                        amount: event.totalCost,
                        currency: 'INR',
                        name: "",
                        description: 'Order Payment',
                        order_id: response.data.id,
                        handler: function (response) {
                           console.log(response.razorpay_payment_id)
                            console.log(response.razorpay_order_id)
                            console.log(response.razorpay_signature)
                            console.log("payment successful")
                            Swal.fire(
                                'Payment Done Successfully',
                                '',
                                'success'
                              )
                            event.status="Approved"
                            axios.put(url + "/eventinfo",event, { headers: { "authorization": `Bearer ${token}` } })
                        },
                        "prefill": {
                        "name": "",
                        "email": "",
                        "contact": ""
                        },
                        "notes": {
                        "address": ""
                        
                        },
                        "theme": {
                        "color": "#3399cc"
                        }
                    }
                   const rzp=new Razorpay(options)
                    rzp.on('payment.failed', function (response){
                        alert(response.error.code);
                        alert(response.error.description);
                        alert(response.error.source);
                        alert(response.error.step);
                        alert(response.error.reason);
                        alert(response.error.metadata.payment_id);
                        alert(response.error.metadata.order_id);
                        });
                        rzp.open();
                        
                }
                if(response.data == "Insufficient Quantity"){
                    alert("Insufficient Quantity");
                }
                if(response.data == "bad_Request"){
                    alert("Wrong PAyment Details");
                }
            })
            .catch(error => {
                console.log('Something went wrong', error);
                
            })
            init();
    }
    useEffect(() => {
        init();
    }, []);


    return (

        <div className="forms-container">
            <div className="py-5 text-white my-5">
                <div colSpan="2" className="fw-bold p-3 display-6">
                    Event Details
                </div>
                {/* "#collapseOne" */}
                {(events.length==0)?<div className='mt-5 pt-5'><div className="bg-white text-black p-3 mt-5 h1">Please Register Any Event</div></div>:
                <div className="accordion" id="accordionExample">
                    {events.map((event) => (
                        <div className="accordion-item m-3" key={event.id}>
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button collapsed accordian-back" type="button" data-bs-toggle="collapse" aria-expanded="false" data-bs-target={"#collapse" + event.id} aria-controls={"collapse" + event.id}>
                                    <h4>{event.name}</h4>
                                </button>
                            </h2>
                            <div id={"collapse" + event.id} className="accordion-collapse collapse bg-black" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body" id="fordownload">
                                    <div className="bg-black py-2 px-2 border border-2 border-white"  >
                                        {/* <div className="event__box py-2 px-2 border border-2 border-white"> */}
                                        <h3 className="text-start p-3 text-white">Basic Details : </h3>
                                        <div className="d-flex justify-content-center">
                                            <table className="col-10 table-bordered text-white"><tbody>
                                                <tr>
                                                    <td className="bg-white text-black"><h4 >Event Name: </h4></td>
                                                    <td className="bg-white text-black"><h4 >Event Type: </h4></td>
                                                    <td className="bg-white text-black"><h4 >Event Date: </h4></td>
                                                    <td className="bg-white text-black"><h4 >Guest Count:</h4></td>
                                                </tr>
                                                <tr>
                                                    <td><h4>{event.name}</h4></td>
                                                    <td><h4>{event.type}</h4></td>
                                                    <td><h4>{event.date}</h4></td>
                                                    <td><h4>{event.guestCount}</h4></td>
                                                </tr>
                                            </tbody></table>

                                        </div>
                                        <h3 className="text-start p-3 text-white">Venue Details : </h3>
                                        <div className="d-flex justify-content-center">
                                            <table className="col-10 table-bordered text-white"><tbody>
                                                <tr>
                                                    <td className="bg-white text-black"><h4>Name: </h4></td>
                                                    <td className="bg-white text-black"><h4>Capacity: </h4></td>
                                                    <td className="bg-white text-black"><h4>Category: </h4></td>
                                                    <td className="bg-white text-black"><h4>Contact: </h4></td>
                                                    <td className="bg-white text-black"><h4>Cost: </h4></td>
                                                </tr>
                                                <tr>
                                                    <td><h4>{event.bookedVenue.name}</h4></td>
                                                    <td><h4>{event.bookedVenue.maxCapacity}</h4></td>
                                                    <td><h4>{event.bookedVenue.category}</h4></td>
                                                    <td><h4>{event.bookedVenue.contact}</h4></td>
                                                    <td><h4>Rs.{event.bookedVenue.cost}</h4></td>
                                                </tr>
                                                <tr>
                                                    <td className='text-black' colSpan={5}>-----------------------------------------------</td>
                                                </tr>
                                                <tr>
                                                </tr>
                                                <tr>
                                                    <td className="bg-white text-black" colSpan={2}><h4>Address: </h4></td>
                                                    <td className="bg-white text-black" colSpan={3}><h4>Description: </h4></td>
                                                </tr>
                                                <tr>
                                                    <td colSpan={2}><h4>{event.bookedVenue.address}</h4></td>
                                                    <td colSpan={3}><h4>{event.bookedVenue.description}</h4></td>
                                                </tr>
                                                <tr>
                                                </tr>
                                                <tr>
                                                </tr>
                                            </tbody></table>
                                        </div>

                                        <h3 className="text-start p-3 text-white">Food Menu List : </h3>
                                        <div className="d-flex justify-content-center">
                                            <table className="col-10 table-bordered text-white"><tbody>
                                                <tr><td>
                                                    {event.menus.map((menu) => (
                                                        <div key={menu.id}>
                                                            <h4 className="text-start px-3">{menu.menuName} <span className="text-secondary">(Price: {menu.price}/person)</span></h4>
                                                        </div>
                                                    ))}
                                                </td></tr>
                                            </tbody></table>
                                        </div>
                                        <h3 className="text-start p-3 text-white">Media Details : </h3>
                                        <div className="d-flex justify-content-center">
                                            <table className="col-10 table-bordered text-white"><tbody>
                                                <tr><td className="bg-white text-black"><h4>Photography: </h4></td>
                                                    <td className="bg-white text-black"><h4>Videography: </h4></td>
                                                    <td className="bg-white text-black"><h4>Album: </h4></td>
                                                    <td className="bg-white text-black"><h4>Drone Shoot: </h4></td>
                                                    <td className="bg-white text-black"><h4>Crane Shoot: </h4></td>
                                                </tr>


                                                <tr>
                                                    <td><h4>{event.photography ? "Yes" : "No"}</h4></td>
                                                    <td><h4>{event.videography ? "Yes" : "No"}</h4></td>
                                                    <td><h4>{event.album ? "Yes" : "No"}</h4></td>
                                                    <td><h4>{event.drone ? "Yes" : "No"}</h4></td>
                                                    <td><h4>{event.crane ? "Yes" : "No"}</h4></td>
                                                </tr>
                                            </tbody></table>
                                        </div>
                                        <div className='text-center'>
                                            <button className="btn btn-l mt-3" onClick={generatePDF}>Download Details</button>
                                            <button className={event.totalCost==0 || event.status=="Approved"?"btn btn-l mt-3 disabled":"btn btn-l mt-3"} onClick={()=>{HandlePayment(event)}}>PAY {event.totalCost}</button>
                                        </div>
                                    </div>
                                    <br></br>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>}
            </div>
        </div>
    );
}

export default ViewEvent;
