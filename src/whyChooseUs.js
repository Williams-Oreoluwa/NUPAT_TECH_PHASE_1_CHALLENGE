import React from "react";

const WhyUsComponents = () => {
  return (
    <>
      <section className="why-us">
        <div className="why-us-wrapper">
          <div className="image">
            <img
              src="https://images.pexels.com/photos/1089306/pexels-photo-1089306.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
          <div className="why-us-main-components">
            <div className="why-container">
              <h3 className="text">Why Choose</h3>
              <h1>We create opportunity to reach potential</h1>
              <p>
                Leverage agile frameworks to provide a robust synopsis for{" "}
                <br /> strategy foster collaborative thinking to further the
                overall value <br /> proposition.{" "}
              </p>
              <div className="things-we-do">
                <div className="things-we-do-wrapper">
                  <div className="do-items">
                    <span className="icon">
                      <i class="ri-red-packet-line"></i>
                    </span>
                    <h3>Safe Package</h3>
                  </div>
                  <div className="do-items">
                    <span className="icon">
                      <i class="ri-ship-line"></i>
                    </span>
                    <h3>Ship Everyware</h3>
                  </div>
                  <div className="do-items">
                    <span className="icon">
                      <i class="ri-global-line"></i>
                    </span>
                    <h3>Global Tracking</h3>
                  </div>
                  <div className="do-items">
                    <span className="icon">
                      <i class="ri-customer-service-line"></i>
                    </span>
                    <h3>24/7 Support</h3>
                  </div>
                  <div className="do-items">
                    <span className="icon">
                      <i class="ri-time-line"></i>
                    </span>
                    <h3>In Time Delivery</h3>
                  </div>
                  <div className="do-items">
                    <span className="icon">
                      <i class="ri-coin-line"></i>
                    </span>
                    <h3>Transparant Pricing</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyUsComponents;
