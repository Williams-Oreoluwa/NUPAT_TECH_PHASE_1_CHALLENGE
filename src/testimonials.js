import React from "react";

const Testimonials = () => {
  return (
    <>
      <section className="testimonial-container">
        <div className="testimonial-wrapper">
          <div className="testimonial-statement">
            <div className="main-container">
              <div className="title">
                <h3>Testimonials</h3>
                <h2>What Our Customers are saying</h2>
              </div>
              <div className="arrow">
                <span className="left">
                  <i class="ri-arrow-left-line"></i>
                </span>
                <span className="right">
                  <i class="ri-arrow-right-line"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="people-data">
            <FirstPerson/>
            <SecondPerson/>
          </div>
        </div>
      </section>
    </>
  );
};

const FirstPerson = () => {
  return (
    <>
      <div className="first-person-container">
        <div className="people-wrapper">
          <div className="people-details">
            <div className="person-div">
              <div className="person">
                <img src="/image/testimonial (1).png" alt="" />
                <div className="people-names">
                  <h2>Kathleen Smith</h2>
                  <h4>Fuel Company</h4>
                </div>
              </div>
              <div className="people-icon">
                <i class="ri-double-quotes-l"></i>
              </div>
            </div>
            <div className="text">
              <p>
                Leverage agile frameworks to provide a <br /> robust synopsis for <br />
                strategy foster collaborative thinking <br /> to further the overall <br />
                value proposition. Organically grow <br /> the holistic world view of <br />
                disruptive innovation via workplace <br /> diversity and empowerment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const SecondPerson = () => {
    return (
      <>
        <div className="second-person-container">
          <div className="people-wrapper">
            <div className="people-details">
              <div className="person-div">
                <div className="person">
                  <img src="/image/testimonial (2).png" alt="" />
                  <div className="people-names">
                    <h2>John Martin</h2>
                    <h4>Restoration Company</h4>
                  </div>
                </div>
                <div className="people-icon">
                  <i class="ri-double-quotes-l"></i>
                </div>
              </div>
              <div className="text">
                <p>
                  Leverage agile frameworks to provide a <br /> robust synopsis for <br />
                  strategy foster collaborative thinking <br /> to further the overall <br />
                  value proposition. Organically grow <br /> the holistic world view of <br />
                  disruptive innovation via workplace <br /> diversity and empowerment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

export default Testimonials;
