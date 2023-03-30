import React from "react";

const DetailsNavBar = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className="container-wrapper">
            <div className="logo">
              <i class="ri-function-fill"></i>
              <h1>TransitFlow</h1>
            </div>
            <div className="contact">
              <div className="work-time">
                <i class="ri-time-line"></i>
                <h3>
                  Mon - Sat 9.00-18.00 <br />
                  Sunday Closed
                </h3>
              </div>
              <div className="work-time">
              <i class="ri-mail-line"></i>
                <h3>
                  Email<br />
                  Conatact@logistics.com
                </h3>
              </div>
              <div className="work-time">
              <i class="ri-phone-line"></i>
                <h3>
                  Call Us <br />
                  (00) 112 365 
                </h3>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default DetailsNavBar;
