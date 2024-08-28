import React from "react";
const Contact = () => {
  const [header] = React.useState({
    subHeader: "Contact",
  });

  const state = [
    { id: 1, title: "Name:", text: "EventSpark Events" },
    { id: 2, title: "Email:", text: "EventSpark.off@gmail.com" },
    { id: 3, title: "Phone:", text: "+91 000 000 0000" },
    { id: 4, title: "Linkedin", text: "EventSpark" },
  ];
  return (
    <section id="contact">
    <div className="bg-black text-white py-5 border-danger border-top border-bottom h-100 w-100">
      <div className="container py-5">
      <div className="my-5">
        <h1>{header.subHeader}</h1>
        <div className="container align-items-center w-25 bg-danger pt-1 rounded"></div>
        <div className="row text-white alignCenter">
          <div
            className="col-12 py-3 px-3 my-3"
            style={{ background: "#181313" }}
          >
            <div> 
              <div className="row py-4">
                {state.map((info) => (
                  <div className="col-6 py-2" key={info.id}>
                    <strong>{info.title}</strong>
                    <p>{info.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
    </section>
  );
};

export default Contact;
