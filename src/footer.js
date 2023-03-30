import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-wrapper">
          <div className="footer-nav-bar">
            <ul>
              <li className="footer-logo">
                <i class="ri-function-fill" style={{color:' #FFB629'}}></i>
                <h1>TransitFlow</h1>
              </li>
              <li>Pages</li>
              <li>Utility</li>
              <li>Subscribe</li>
            </ul>
          </div>
          <div className="footer-details">
            <div className="footer-details-wrapper">
                
              <div
                className="footer-details-list-wrapper"
                style={{ color: "white" }}
              >
                <ul>
                  <li>
                    <p>
                      Leverage agile frameworks to provide a <br /> robust
                      synopsis for strategy collaborative <br /> thinking to
                      further the overall value <br /> proposition.
                    </p>
                  </li>
                  <li>
                    <div className="footer-contact-details">
                      <i class="ri-mail-line"></i>
                      <h3 style={{ fontWeight: "100", fontSize: ".9rem" }}>
                        Email <br />
                        contact@logistics.com
                      </h3>
                    </div>
                  </li>
                  <li>
                    <div className="footer-contact-details">
                      <i class="ri-phone-line"></i>
                      <h3 style={{ fontWeight: "100", fontSize: ".9rem" }}>
                        Call Us <br />
                        (00) 112 365 489
                      </h3>
                    </div>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="#about">About Us</a>
                  </li>
                  <li>
                    <a href="#team">Our Team</a>
                  </li>
                  <li>
                    <a href="#project">Our Project</a>
                  </li>
                  <li>
                    <a href="#price">Pricing</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="#contact">Style Guide</a>
                  </li>
                  <li>
                    <a href="#contact">Change Lock</a>
                  </li>
                  <li>
                    <a href="#contact">Licenses</a>
                  </li>
                  <li>
                    <a href="#contact">Protected</a>
                  </li>
                  <li>
                    <a href="#contact">Not Found</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <div className="text-field">
                      <form action="">
                        <input
                          type="text"
                          name=""
                          id=""
                          className="footer-input"
                          placeholder="Email here*"
                        />
                        <div className="footer-btn">
                          <button type="submit">Send Now</button>
                          <i class="ri-linkedin-box-fill"></i>
                          <i class="ri-twitter-fill"></i>
                          <i class="ri-facebook-fill"></i>
                        </div>
                      </form>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
      </footer>
    </>
  );
};

export default Footer;
