import React from "react";

const About = () => {
  const [header] = React.useState({
    subHeader: "About Us",
  });

  return (
    <section id="about">
      <div className="bg-black text-white py-5 border-danger border-top border-bottom">
        <div className="container my-5">
          <h1>{header.subHeader}</h1>
          <div className="container align-items-center w-25 bg-danger pt-1 rounded"></div>
          <div className="row text-white alignCenter py-3">
            <div
              className="col-12 py-4 px-3 my-3"
              style={{ background: "#181313" }}
            >
              <h1>We're EventSpark Events</h1>
              <div>
                <p></p>
              EventSpark is a story of Friends, who made a good team in their school and locality, enthusiastic about conducting and organizing events around them. As time passed they carried on with their lives, with their higher studies. They missed each other's companies a lot and found a way to get united again. To be together, they converted their passion of organizing events, a creative way, into a business.
              </div>
              <div>
              <p></p>
              EventSpark Event Managers have been creating engaging and high-quality events, both personal and corporate, since they began working together. For them, managing an event is straightforward. Their attention to detail, sense of style, extensive planning, and problem-solving skills make them some of the best event planners in India.
              </div>
              <div>
              <p></p>
              EventSpark aims to keep coming up with new ideas, being creative, and inspiring to exceed client's expectations. Their goal is to be the most quality-focused event managers.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
