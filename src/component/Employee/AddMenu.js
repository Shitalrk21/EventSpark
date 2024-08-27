import { useState } from "react";
import axios from "axios";
import { url } from '../common/constants';
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

const AddMenu = () => {
    const [menuName, setmenuName] = useState("");
    const [price, setprice] = useState("")
    const [category, setcategory] = useState("")
    const [subCategory, setsubCategory] = useState("")
    const token = JSON.parse(localStorage.getItem("jwttoken"));
    const history = useHistory();
    const HandleSubmit = () => {
        const menu = {
            menuName,
            price,
            category,
            subCategory
        }
        console.log(menu);
        axios.post(url + "/addmenu", menu, { headers: { "authorization": `Bearer ${token}` } }).then(Response => {
            console.log('Printing Menu data', Response.data);
            Swal.fire(
                'Menu Added Successfully',
                '',
                'success'
            )
            history.goBack();
        })
            .catch(error => {
                console.log('Something went wrong', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Unable to Add Menu',
                    text: '',
                    footer: ''
                })
            })
    }
    return (
        <div className="forms-container">
            <div className="container py-5 text-white my-5">
                <div colSpan="2" className="fw-bold p-3 mt-2 display-6">
                    Add Menu
                </div>
                <div className="mb-3 row  justify-content-center align-content-center">
                    <div className="col-2">
                        <label htmlFor="name" className="form-label fs-4">Menu Name</label>
                    </div>
                    <div className="col-8">
                        <input type="text" className="form-control" id="name" onChange={(e) => { setmenuName(e.target.value) }} />
                    </div>
                </div>
                <div className="mb-3 row  justify-content-center align-content-center">
                    <div className="col-2">
                        <label htmlFor="rate" className="form-label fs-4">Price <span className="text-secondary">(per person)</span></label>
                    </div>
                    <div className="col-8">
                        <input type="number" className="form-control" id="rate" onChange={(e) => { setprice(e.target.value) }} />
                    </div>
                </div>
                <div className="mb-3 row  justify-content-center align-content-center">
                    <div className="col-2">
                        <label htmlFor="category" className="form-label fs-4">Category</label>
                    </div>
                    <div className="col-8">
                        <select name="category" id="category" className="input-fields-mod" onChange={(e) => { setcategory(e.target.value) }}>
                        <option value="" hidden>Select Category</option>
                            <option value="ALL">All</option>
                            <option value="VEG">Veg</option>
                            <option value="NON_VEG">Non-Veg</option>
                        </select>
                    </div>
                </div>
                <div className="mb-3 row  justify-content-center align-content-center">
                    <div className="col-2">
                        <label htmlFor="subcategory" className="form-label fs-4">Sub Category</label>
                    </div>
                    <div className="col-8">
                        <select name="subcategory" id="subcategory" className=" input-fields-mod" onChange={(e) => { setsubCategory(e.target.value) }}>
                        <option value="" hidden>Select SubCategory</option>
                            <option value="RICE">Rice</option>
                            <option value="ROTI">Roti's</option>
                            <option value="CURRY">Curry's</option>
                            <option value="DESERT">Deserts</option>
                            <option value="DRINK">Drinks</option>
                        </select>
                    </div>
                </div>
                <div className="py-2">
                    <button type="submit" className="btn btn-l w-25" onClick={HandleSubmit}>Add Menu</button>
                </div>
            </div>
        </div >
    )
}
export default AddMenu;