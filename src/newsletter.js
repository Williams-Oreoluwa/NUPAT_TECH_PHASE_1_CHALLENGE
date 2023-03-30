import React from "react";

const Newsletter = () => {
  return (
    <>
      <section className="newsletter-container">
        <div className="newsletter-wrapper">
          <ContactDetails />
          <ContactForm />
        </div>
        <ContactPhotos />
      </section>
    </>
  );
};

const ContactDetails = () => {
  return (
    <>
      <div className="contact-container">
        <div className="contact-wrapper">
          <div className="contact-details">
            <h3
              style={{
                fontSize: "14px",
                padding: "1rem 1rem",
                borderLeft: "3px solid #FFB629",
                background: "#E8E8E81A",
                color: "white",
                width: "4rem",
              }}
            >
              Conatct
            </h3>
            <h1 style={{ fontSize: "35px", color: "white" }}>
              Get in touch with Us
            </h1>
            <p style={{ fontSize: "16px", color: "white" }}>
              Leverage agile frameworks to provide a robust <br /> synopsis for
              strategy foster collaborative <br /> thinking to further the
              overall value.
            </p>
            <div className="contact-medium">
              <div className="contact-email">
                <i class="ri-mail-line"></i>
                <div className="main-contact-details">
                  <h3>Email</h3>
                  <h5>Contact@logistics.com</h5>
                </div>
              </div>
              <div className="contact-phone">
                <i class="ri-phone-line"></i>
                <div className="main-phone-contact">
                  <h3>Call Us</h3>
                  <h5>(00) 112 365 489</h5>
                </div>
              </div>
              <div className="work-hours">
                <i class="ri-calendar-event-line"></i>
                <div className="main-work-hours">
                  <h3>Mon - Sat 9.00 - 18.00</h3>
                  <h5>Sunday Closed</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const ContactForm = () => {
  return (
    <>
      <form action="" className="form">
        <div className="form-details">
          <input type="text" name="" id="" placeholder="Your name*" />
          <input type="text" name="" id="" placeholder="Email*" />
          <input type="text" name="" id="" placeholder="Phone Number*" />
          <input type="text" name="" id="" placeholder="City*" />
        </div>
        <div className="message-form">
          <input
            type="text"
            name=""
            id=""
            placeholder="Your Message"
            className="input-message-form"
          />
        </div>
        <button type="submit">Submit Message</button>
      </form>
    </>
  );
};

const ContactPhotos = () => {
  return (
    <>
      <div className="contact-photos-container">
        <div className="photos-wrapper">
          <div className="main-contact-photos">
            <img
              src="https://images.pexels.com/photos/259870/pexels-photo-259870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <div className="icon-text">
              <i class="ri-sun-line"></i>
              <h1>
                STUDIO <br />
                GREEN{" "}
              </h1>
            </div>
          </div>
          <div className="main-contact-photos">
            <img
              src="https://images.pexels.com/photos/2335126/pexels-photo-2335126.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <div className="icon-text">
              <h1>NORTO</h1>
            </div>
          </div>
          <div className="main-contact-photos">
            <img
              src="https://images.pexels.com/photos/912050/pexels-photo-912050.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <div className="icon-text">
              <i class="ri-vip-diamond-line"></i>
              <h1>
                POINTS <br />
                ONE
              </h1>
            </div>
          </div>
          <div className="main-contact-photos">
            <img
              src="https://images.pexels.com/photos/1417647/pexels-photo-1417647.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <div className="icon-text">
              <h1>
                OUT OF THE <br />
                SANDBOX
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
