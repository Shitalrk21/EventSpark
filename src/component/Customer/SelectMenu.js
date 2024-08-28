import React, { useEffect, useState} from "react";
import {useHistory } from "react-router-dom";
import axios from "axios";
import { url } from '../common/constants';

const SelectMenu = () => {
    const history = useHistory();
    const [category, setcategory] = useState("ALL");
    const [subCategory, setsubCategory] = useState("ALL");
    const [menus, setMenus] = useState([]);
    const [menulist, setmenulist] = useState([]);
    
    const handleAddFormSubmit = (event) => {
        const newContact = event;
        const newContacts = [...menulist, newContact];
        setmenulist(newContacts);
    };
    const handleDeleteClick = (contactId) => {
        const newContacts = [...menulist];
        const index = newContacts.findIndex((contact) => contact.id === contactId);
        newContacts.splice(index, 1);
        setmenulist(newContacts);
    };
    const showmenulist = () => {
        axios.get(url + "/menucategory", { params: { category, subCategory } }).then(Response => {
            console.log('Printing Menu data', Response.data);
            setMenus(Response.data);
        })
            .catch(error => {
                console.log('Something went wrong', error);
            })
    }

    const submitMenu = () => {
        localStorage.setItem('menulist', JSON.stringify(menulist));
        history.push("/customer/bookevent/selectmedia")
    }
    useEffect(() => {
        showmenulist();
    }, []);

    return (
        <div className="forms-container">
            <div className="row col-12 py-5 text-white my-5">
                <div className="fw-bold pt-5 display-6">
                    Select Menu
                </div>
                <hr className="my-4 pt-1" />
                <div className="grid-container">
                    <div className="grid-child border border-white">
                        <div className="scrollable">
                            <h4 className="top-fix" >Your Menu List</h4>
                            {menulist.map((info) => {
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
                        <button type="submit" className="btn-danger mx-5 w-50 mt-2 py-1" onClick={submitMenu}>submit</button>
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
                                            <button type="button" className="btn btn-primary" onClick={showmenulist}>search</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </span>
                        <div className="scrollable">
                            {menus.map((m) => (
                                <div key={m.id}>
                                    <div className="event__box py-1 my-2 px-2 border border-1 border-white d-flex justify-content-between">
                                        {/* <h5 className="mx-2 border " >{m.id}</h5> */}
                                        <table className="col-8">
                                            <tbody><tr>
                                                <td className="text-start col-6"><h5 className="mx-2 " >{m.menuName}</h5></td>
                                                <td className="text-end col-2"><h5 className="mx-2 " >{m.price}</h5></td>
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
    );
};

export default SelectMenu;
