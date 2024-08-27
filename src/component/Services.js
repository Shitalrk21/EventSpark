import React from "react";
//import "./boxes.css";
import { MdFoodBank,MdDesignServices } from "react-icons/md";
import { SiEventstore } from "react-icons/si";


import {
  FaCamera,
  FaMapMarkedAlt,
  FaFileVideo,
} from "react-icons/fa";

const Services = () => {
  const [header] = React.useState({
    mainHeader: "SERVICES",
    subHeading: "Our Services",
    text: "Let us help you Create",
  });
  const state = [
    {
      id: 1,
      icon: <SiEventstore className="commonIcons" />,
      heading: "Diiferent Types of Event Plannings",
      text: "",
    },
    {
      id: 2,
      icon: <FaCamera className="commonIcons" />,
      heading: "Photography",
      text: "",
    },
    {
      id: 3,
      icon: <MdFoodBank className="commonIcons" />,
      heading: "Catering",
      text: "",
    },
    {
      id: 4,
      icon: <FaMapMarkedAlt className="commonIcons" />,
      heading: "Venues",
      text: "",
    },
    {
      id: 5,
      icon: <FaFileVideo className="commonIcons" />,
      heading: "Videography",
      text: "",
    },
    {
      id: 6,
      icon: <MdDesignServices className="commonIcons" />,
      heading: "Design and Decor",
      text: "",
    },
  ];
  return (
    <section id="services">
    <div className=" bg-black border-top border-bottom border-danger">
      <div className="container py-3 text-white my-5">
        <div className="my-3">
          <h5 className="text-danger">{header.mainHeader}</h5>
          <h2>{header.subHeading}</h2>
          <h6>{header.text}</h6>
        </div>
        <div className="container align-items-center w-25 bg-danger pt-1 rounded"></div>
        <div className="row">
          {state.map((info) => (
            <div className="col-12 col-md-4 py-4 px-4"  key={info.id}>
              <div className="services__box py-4 px-2">
                {info.icon}
                <div><h4 className="py-2">{info.heading}</h4></div>
                <div className="">{info.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
};

export default Services;
