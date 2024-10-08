import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { url } from "../common/constants";
import axios from "axios";
import { BsSearch } from "react-icons/bs";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";
toast.configure();

const BookEvent = () => {

    useEffect(() => {
        init();
        showmenulist();
    }, []);

    // states    
    const history = useHistory(); //useHistory() hook is used for navigation but is not directly related to state management
    // menu States
    const [category, setcategory] = useState("ALL");
    const [subCategory, setsubCategory] = useState("ALL");
    const [menuList, setMenuList] = useState([]);
    const [menus, setmenus] = useState([]);
    // genearal event details states
    const [name, setname] = useState("");
    const [type, settype] = useState("");
    const [date, setdate] = useState("");
    const [guestCount, setguestCount] = useState("");
    // media states
    const [photography, setphotography] = useState(false);
    const [videography, setvideography] = useState(false);
    const [album, setalbum] = useState(false);
    const [drone, setdrone] = useState(false);
    const [crane, setcrane] = useState(false);
    // Venues states
    const [Venues, setVenues] = useState([]);
    const [bookedVenue, setBookedvenue] = useState("");
    //media backgrounds
    const [photographyback, setPhotographyback] = useState(false);
    const [videographyback, setVideographyback] = useState(false);
    const [albumback, setAlbumback] = useState(false);
    const [droneback, setDroneback] = useState(false);
    const [craneback, setCraneback] = useState(false);

    //functions 

    // menu handling functions
    const handleAddFormSubmit = (event) => {
        const newMenu = event;
        const newMenus = [...menus, newMenu];
        setmenus(newMenus);
    };

    const handleDeleteClick = (menuId) => {
        const newMenus = [...menus];
        const index = newMenus.findIndex((menu) => menu.id === menuId);
        newMenus.splice(index, 1);
        setmenus(newMenus);
    };

    // getting info at initial functions
    // getting venues
    const init = () => {
        axios.get(url + "/venue")
            .then(response => {
                console.log('Printing Venues data', response.data);
                setVenues(response.data);
            })
            .catch(error => {
                console.log('Something went wrong', error);
            })
    }
    //getting menus
    const showmenulist = () => {
        axios.get(url + "/menucategory", { params: { category, subCategory } }).then(Response => {
            console.log('Printing Menu data', Response.data);
            setMenuList(Response.data);
        })
            .catch(error => {
                console.log('Something went wrong', error);
            })
    }

    //register event
    const handleSubmit = () => {
        const eventdetails = {
            name,
            date,
            type,
            guestCount,
            photography,
            videography,
            album,
            drone,
            crane,
            bookedVenue,
            menus
        }
        console.log(eventdetails);
        const token = JSON.parse(localStorage.getItem("jwttoken"));
        toast.info("We're Processing your Booking, Please wait for a while")
        axios.post(url + "/eventinfo", eventdetails, { headers: { "authorization": `Bearer ${token}` } })
            .then(Response => {
                console.log('Printing event data', Response.data);
                history.push("/customer/bookingsuccessful")
            })
            .catch(error => {
                console.log('Something went wrong', error);
            })
    }

    const showerror =()=>{
        var error1=document.getElementById("counterror");
        error1.textContent="Selected Venue can't Serve "+guestCount+" Guest, Kindly press back and Select other Venue";
        error1.style.color="red"                                                 
        Swal.fire({
            icon: 'error',
            title: 'Selected Venue has no capacity to serve guestcount, Kindly press back and Select other Venue',
            text: '',
            footer: ''
          })
    }
    

    return (
        <>
            <div className="forms-container">
                <div className="py-5 text-white my-5">
                    <div colSpan="2" className="fw-bold p-3 display-6">
                        Book an Event with Us
                    </div>
                    <div className="accordion mx-3" id="accordionExample">
                        {/* general Details item */}
                        <div className="accordion-item bg-black mt-3">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button accordian-back" type="button" data-bs-toggle="collapse" aria-expanded="true" aria-controls="collapseOne">
                                    EVENT GENERAL DETAILS
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show bg-black col-12" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body d-flex justify-content-center">
                                    <form className="col-10">
                                        <table className="col-12">

                                            <tbody>
                                                <tr>
                                                    <td className="text-start col-3 fs-4">Event Name:</td>
                                                    <td><input type="text" className="my-2" value={name} placeholder="Enter Event Name" onChange={(e) => { setname(e.target.value) }} /></td>
                                                </tr>
                                                <tr>
                                                    <td className="text-start col-2 fs-4">Event Type:</td>
                                                    <td>
                                                        <select className="form-select" aria-label="Default select example" onChange={(e) => { settype(e.target.value) }}>
                                                            <option hidden>SELECT EVENT TYPE</option>
                                                            <option value="BIRTHDAYPARTY">BIRTHDAYPARTY</option>
                                                            <option value="ENGAGEMENT">ENGAGEMENT</option>
                                                            <option value="COLLAGE_EVENT">COLLAGE_EVENT</option>
                                                            <option value="MARRIAGE">MARRIAGE</option>
                                                        </select>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="text-start col-2 fs-4">Event Date:</td>
                                                    <td><input type="date" className="my-2" value={date} placeholder="Enter Event Date" onChange={(e) => { setdate(e.target.value) }} /></td>
                                                </tr>

                                                <tr>
                                                    <td className="text-start col-2 fs-4">Expected Guest Count:</td>
                                                    <td><input type="number" className="my-2" value={guestCount} placeholder="Enter Expected Guest Count" onChange={(e) => { setguestCount(e.target.value) }} /></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <button className="btn btn-primary mt-3 w-25" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            NEXT
                                        </button>
                                        {/* <div className="d-grid col-10 mt-3 mx-auto">
                                        <button className="btn bg-danger btn-lg text-white my-3 px-5 py-2 rounded-pill" onClick={bookevent} >Proceed</button>
                                    </div> */}
                                    </form>
                                </div>
                            </div>
                        </div>
                        {/* venue item */}
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed accordian-back" type="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseTwo">
                                    SELECT VENUE
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse bg-black col-12" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <div className="scrollable">
                                        {Venues.map((venue) => (
                                            <div key={venue.id} className="border py-3 m-3 event__box">
                                                

                                                <div className="grid-child d-flex justify-content-center">
                                                    <table className="col-11 table-bordered text-white"><tbody>
                                                        <tr>
                                                            <td className="bg-white text-black"><h4>Name: </h4></td>
                                                            <td className="bg-white text-black"><h4>Location: </h4></td>
                                                            <td className="bg-white text-black"><h4>Capacity: </h4></td>
                                                            <td className="bg-white text-black"><h4>Category: </h4></td>
                                                            <td className="bg-white text-black"><h4>Contact: </h4></td>
                                                            <td className="bg-white text-black"><h4>Cost: </h4></td>
                                                        </tr>
                                                        <tr>
                                                            <td><h4>{venue.name}</h4></td>
                                                            <td><h4>{venue.location}</h4></td>
                                                            <td><h4>{venue.maxCapacity}</h4></td>
                                                            <td><h4>{venue.category}</h4></td>
                                                            <td><h4>{venue.contact}</h4></td>
                                                            <td><h4>Rs.{venue.cost}</h4></td>
                                                        </tr>
                                                        <tr>
                                                            <td className='text-black' colSpan={6}>-</td>
                                                        </tr>
                                                        <tr>
                                                        </tr>
                                                        <tr>
                                                            <td className="bg-white text-black" colSpan={3}><h4>Address: </h4></td>
                                                            <td className="bg-white text-black" colSpan={3}><h4>Description: </h4></td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={3}><h4>{venue.address}</h4></td>
                                                            <td colSpan={3}><h4>{venue.description}</h4></td>
                                                        </tr>
                                                        <tr>
                                                        </tr>
                                                        <tr>
                                                        </tr>
                                                    </tbody></table>

                                                </div>
                                                <button type="button" className="btn btn-primary mt-3 w-50 h-100 text-white" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"
                                                    onClick={() => {
                                                        var error1=document.getElementById("counterror");
                                                        if(venue.maxCapacity < guestCount){
                                                           showerror();                                                       

                                                    }else{
                                                        error1.textContent="";
                                                         setBookedvenue(venue) }    }} >SELECT</button>
                                            </div>

                                        ))}
                                    </div>
                                </div>
                                <button className="btn btn-warning w-25 mb-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    BACK
                                </button>&nbsp;&nbsp;
                                {/* <button className="btn btn-warning collapsed w-25" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    NEXT
                                </button> */}
                            </div>
                        </div>
                        {/* menu iterms */}
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed accordian-back" type="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseThree">
                                    SELECT MENUS
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse bg-black col-12" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <div className="row col-12 text-white ">
                                        <div className="grid-container">
                                            <div className="grid-child border border-white">
                                                <div className="scrollable">
                                                    <h4 className="top-fix" >Your Menu List</h4>
                                                    {menus.map((info) => {
                                                        return (
                                                            <div key={info.id}>
                                                                <div className="event__box py-1 my-2 px-2 border border-1 border-white d-flex justify-content-between">
                                                                    <h5 className="mx-2">{info.menuName}</h5>
                                                                    <button className="btn-warning mx-3" onClick={() => handleDeleteClick(info.id)}>Remove</button>
                                                                </div>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                                <button className="btn btn-primary collapsed w-25 mt-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                    NEXT
                                                </button>
                                                
                                                
                                            </div>
                                            <div className="grid-child">
                                                <span className="row justify-content-center">
                                                    <table className="w-75 mb-2">
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <select name="category" id="category" className="input-fields-mod" onChange={(e) => { setcategory(e.target.value) }}>
                                                                        <option value="ALL">All</option>
                                                                        <option value="VEG">Veg</option>
                                                                        <option value="NON_VEG">Non-Veg</option>
                                                                    </select>
                                                                </td>
                                                                <td>
                                                                    <select name="subcategory" id="subcategory" className="input-fields-mod" onChange={(e) => { setsubCategory(e.target.value) }}>
                                                                        <option value="ALL">All</option>
                                                                        <option value="RICE">Rice</option>
                                                                        <option value="ROTI">Roti's</option>
                                                                        <option value="CURRY">Curry's</option>
                                                                        <option value="DESERT">Deserts</option>
                                                                        <option value="DRINK">Drinks</option>
                                                                    </select>
                                                                </td>
                                                                <td>
                                                                    <button type="button" className="btn btn-primary" onClick={showmenulist}><BsSearch /> Search</button>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </span>
                                                <div className="scrollable">
                                                    {menuList.map((m) => (
                                                        <div key={m.id}>
                                                            <div className="event__box py-1 my-2 px-2 border border-1 border-white d-flex justify-content-between">
                                                                {/* <h5 className="mx-2 border " >{m.id}</h5> */}
                                                                <table className="col-8">
                                                                    <tbody><tr>
                                                                        <td className="text-start col-5"><h5 className="mx-2 " >{m.menuName}</h5></td>
                                                                        <td className="text-end col-4"><h5 className="mx-2 " >Rs.{m.price} <span className="text-secondary">(/person)</span></h5></td>
                                                                        <td></td>
                                                                    </tr></tbody>
                                                                </table>
                                                                {/* <h5 className="mx-2 border" >{m.category}</h5>
                                                                 <h5 className="mx-2 border" >{m.subCategory}</h5> */}
                                                                <button type="submit" className="btn-warning mx-5 w-25" onClick={() => handleAddFormSubmit(m)}>Add</button>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br/>
                                <span id="counterror"></span>
                                <br/>
                                <button className="btn btn-warning w-25 mb-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                    BACK
                                </button>
                                
                            </div>
                        </div>
                        {/* media Items */}
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFour">
                                <button className="accordion-button collapsed accordian-back" type="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseFour">
                                    SELECT MEDIA
                                </button>
                            </h2>
                            <div id="collapseFour" className="accordion-collapse collapse bg-black" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                <div className="accordion-body d-flex justify-content-center">
                                    <div className="row col-10">

                                        <label className={photographyback ? 'bg-success event__box border w-100 h4 py-3 my-2' : 'bg-dark event__box border w-100 h4 py-3 my-2'} htmlFor="photography">
                                            <input type="checkbox" name="photography" id="photography" className="h-25" onChange={() => { setphotography(!photography); setPhotographyback(!photographyback) }} />Photography (Rs.10000)</label>

                                        <label className={videographyback ? 'bg-success event__box border w-100 h4 py-3 my-2' : 'bg-dark event__box border w-100 h4 py-3 my-2'} htmlFor="videography">
                                            <input type="checkbox" name="videography" id="videography" className="h-25" onChange={() => { setvideography(!videography); setVideographyback(!videographyback) }} />Videography (Rs.30000)</label>

                                        <label className={albumback ? 'bg-success event__box border w-100 h4 py-3 my-2' : 'bg-dark event__box border w-100 h4 py-3 my-2'} htmlFor="album">
                                            <input type="checkbox" name="album" id="album" className="h-25" onChange={() => { setalbum(!album); setAlbumback(!albumback) }} />Album (Rs.15000)</label>

                                        <label className={droneback ? 'bg-success event__box border w-100 h4 py-3 my-2' : 'bg-dark event__box border w-100 h4 py-3 my-2'} htmlFor="drone">
                                            <input type="checkbox" name="drone" id="drone" className="h-25" onChange={() => { setdrone(!drone); setDroneback(!droneback) }} />Drone (Rs.35000)</label>

                                        <label className={craneback ? 'bg-success event__box border w-100 h4 py-3 my-2' : 'bg-dark event__box border w-100 h4 py-3 my-2'} htmlFor="crane">
                                            <input type="checkbox" name="crane" id="crane" className="h-25" onChange={() => { setcrane(!crane); setCraneback(!craneback) }} />Crane (Rs.40000)</label>
                                    </div>

                                </div>
                                <button className="btn btn-warning w-25 mb-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseOne">
                                    BACK
                                </button>&nbsp;&nbsp;
                                <button className="btn btn-primary w-25 mb-3" onClick={handleSubmit}>SUBMIT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default BookEvent;
