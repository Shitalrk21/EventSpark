import React, { useState,useEffect } from "react";
// import "./LoginRegister.css";
import { Link } from "react-router-dom";
import { ImLocation2 } from "react-icons/im";
import { MdOutlineAddLocationAlt } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { MdOutlineFoodBank } from "react-icons/md";
import { DiYeoman } from "react-icons/di";
import { MdOutlineAddAPhoto } from "react-icons/md";
import { MdPhotoCamera } from "react-icons/md";


const AvailbleServices = () => {
const [confirm, setconfirm] = useState("");
//const [state2, setstate2] = useState([]);
const role = localStorage.getItem("role");

  const state = [
    {
      id: 1,
      icon: <DiYeoman className="commonIcons2" />,
      heading: "Caterer's",
      link: "viewcaterer"
    },
    {
      id: 2,
      icon: < ImLocation2 className="commonIcons2" />,
      heading: "Venue's",
      link: "viewvenue"
    },
    {
      id: 3,
      icon: <MdPhotoCamera className="commonIcons2" />,
      heading: "Studio's",
      link: "viewstudio"
    }];

     const state2 = [
    {
      id: 1,
      icon: <RiTeamFill className="commonIcons2" />,
      heading: "Add Caterer's",
      link: "addcaterer"
    },
    {
      id: 2,
      icon: <  MdOutlineAddLocationAlt className="commonIcons2" />,
      heading: "Add Venue's",
      link: "addvenue"
    }
    ,
    {
      id: 3,
      icon: <MdOutlineAddAPhoto className="commonIcons2" />,
      heading: "Add Studio's",
      link: "addstudio"
    }
    ,
    {
      id: 4,
      icon: <MdOutlineFoodBank className="commonIcons2" />,
      heading: "Add Menu's",
      link: "addmenu"
    }
    
  ];
  const [state3, setstate3] = useState(state2);
  const state4=[];

  const init=()=>{
   if(role==="MANAGER"){
    setstate3(state4);
  }
}

  useEffect(() => {
    init();
  }, []);

  return (
    // <div className=" position-absolute top-50 start-50 translate-middle h-100 w-100">
    <div className="forms-container">
      <div className="container py-5 text-white my-5">

        <div className="row pt-5">
          {state.map((info) => (
            <div className="col-12 col-md-4 py-3 px-4 h-100" type="hidden" key={info.id}>
              <Link className="nav-link text-white"  to={info.link}>
                <div className="services__box py-5 px-2 h-100 border border-2 border-white">
                  <div>{info.icon}</div>
                  <div><h4 className="py-5 fs-2">{info.heading}</h4></div>
                  <div className="">{info.text}</div>
                </div>
              </Link>
            </div>
            

          ))}
        </div>

        <div className="row " >
          {state3.map((info) => (
            <div className="col-12 col-md-4 py-3 px-4 h-100"  key={info.id}>
              <Link className="nav-link text-white"  to={info.link}>
                <div className="services__box py-5 px-2 h-100 border border-2 border-white">
                  <div>{info.icon}</div>
                  <div><h4 className="py-5 fs-2">{info.heading}</h4></div>
                  <div className="">{info.text}</div>
                </div>
              </Link>
            </div>
            

          ))}
        </div>
      </div>
    </div>
  );
};

export default AvailbleServices;
