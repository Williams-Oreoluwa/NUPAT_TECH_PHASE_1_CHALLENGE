import React from "react";

const Specialty = () => {
  return (
    <>
      <section className="specialty">
        <div className="specialty-wrapper">
          <div className="work-done">
            <h3>what we do</h3>
            <h1>
              Safe & Reliable <br />
              Cargo Solutions
            </h1>
          </div>
          <div className="operations">
            <div className="operations-wrapper">
              <div className="sea-transport">
                <i class="ri-ship-fill"></i>
                <div className="sea-description">
                  <h2>Sea Transport Services</h2>
                  <p>
                    Following the quality of service <br /> thus having gained
                    trust of our <br />
                    many clients.{" "}
                  </p>
                </div>
              </div>

              <div className="air-flight">
                <i class="ri-building-line"></i>
                <div className="sea-description">
                  <h2>Warehousing Services</h2>
                  <p>
                    Following the quality of service <br /> thus having gained
                    trust of our <br />
                    many clients.{" "}
                  </p>
                </div>
              </div>
              <div className="warehouse-servicing">
                <i class="ri-flight-takeoff-line"></i>
                <div className="sea-description">
                  <h2>Air Flight Service</h2>
                  <p>
                    Following the quality of service <br /> thus having gained
                    trust of our <br />
                    many clients.{" "}
                  </p>
                </div>
              </div>
              <div className="local-shipping">
                <i class="ri-truck-line"></i>
                <div className="sea-description">
                  <h2>Local Shipping Services</h2>
                  <p>
                    Following the quality of service <br /> thus having gained
                    trust of our <br />
                    many clients.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Services />
      </section>
    </>
  );
};

const Services = () => {
  return (
    <>
      <div className="services-container">
        <div className="services-wrapper">
          <div className="items">
            <div className="services-details">
              <h2>Why Us</h2>
              <h1>
                We provide full range global <br />
                logistics solution.
              </h1>
              <p>
                Leverage Agile frameworks to provide a robust synopsis for
                <br />
                strategy foster collaborative thinking to further the overall{" "}
                <br /> value proposition. <br />
                <br />
                Organically grow the holistic world view of disruptive <br />
                innovation via workplace diversity and empowerment.
              </p>
              <div className="quality">
                <div className="delivery">
                  <i class="ri-boxing-line"></i>
                  <h3>Delivery on Time</h3>
                </div>
                <div className="travel">
                  <i class="ri-money-dollar-box-line"></i>
                  <h3>Optimized Travel</h3>
                </div>
              </div>
            </div>
            <div className="item-photos">
              <div className="service-photos">
                <div className="first-img">
                  <img src="/image/Photo (3).png" alt="" />
                </div>
              </div>
              <div className="service-photos">
                <div className="second-img">
                  <img src="/image/Photo (4).png" alt="" />
                </div>
              </div>
            </div>
            <div className="number">
              <div className="each-value">
                <div className="first-value">
                  <h1>1294</h1>
                  <h4>h</h4>
                  <h3>Delivered Pacakages</h3>
                </div>
                <hr />
                <div className="second-value">
                  <h1>3594</h1>
                  <h4>h</h4>
                  <h3>Satisfied Clients</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Specialty;
