import React from "react";
import { Link } from "react-router-dom";
import "./boxes.css"


const Packages = () => {
  const [header] = React.useState({
    mainHeader: "CHOOSE A PLAN",
    subHeading: "Standard Packages",
    text:
      "You can choose any package as per your need",
  });
  const [state] = React.useState([
    {
      id: 1,
      heading: "Basic",
      price: "₹30,000 to ₹50,000",
      msg1: "Medium Size Hall",
      msg2: "100 Guests",
      msg3: "Photography",
      msg4: "Veg Menu",
      msg5: "",
    },
    {
      id: 2,
      heading: "Standard",
      price: "₹50,000 to ₹1,50,000",
      msg1: "Large Hall or Lawn",
      msg2: "200 Guests",
      msg3: "Photography and Videography",
      msg4: "Veg Menu",
      msg5: "",
    },
    {
      id: 3,
      heading: "Premium",
      price: "₹1,50,000 to ₹3,00,000",
      msg1: "Large Hall and Lawn",
      msg2: "500 Guests",
      msg3: "Photography, Videography, Drone/Crane Shoot",
      msg4: "Veg and Non-Veg Menu with Drinks",
      msg5: "",
    },
  ]);
  return (
    <section id="packages">
    <div className="prices  bg-black text-white border-top border-bottom border-danger py-5">
      <div className="container pt-2">
        <div className="my-5">
          <h3 className="text-danger">{header.mainHeader}</h3>
          <h1 className="mainHeader">{header.subHeading}</h1>
          <div className="container align-items-center w-25 bg-danger pt-1 rounded"></div>
          <p className="mainContent pt-3">{header.text}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="row">
          {state.map((prices) => (
            <div className="col-12 col-md-4 py-3 px-3 mb-5" key={prices.id}>
              <div className="services__box py-4">
                <div className="fs-3">{prices.heading}</div>
                <div className="fs-4">
                
                  {prices.price}
                </div>
                <ul className="list-unstyled">
                  <li>-------------------</li>
                  <li>{prices.msg1}</li>
                  <li>{prices.msg2}</li>
                  <li>{prices.msg3}</li>
                  <li>{prices.msg4}</li>
                  <li>{prices.msg5}</li>
                </ul>
                <div className="">
                  <Link to={""} className="btn btn-danger">
                    Purchase
                  </Link>
                 
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
};

export default Packages;
