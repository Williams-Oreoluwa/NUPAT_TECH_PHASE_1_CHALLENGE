import React from "react";

const SecondNavBar = () => {
  return (
    <>
      <header>
        <div className="second-nav-bar-container container">
          <div className="second-nav-wrapper">
            <div className="menu">
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>
                  <div className="page" style={{display:'flex', alignItems:'center', justifyContent:'center', fontWeight:100}}>
                  Pages
                  <span style={{fontSize:'1rem'}}><i class="ri-arrow-drop-down-line"></i></span>

                  </div>
                  
                </li>
                <li>Project</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="socials">
              <ul>
                <li>
                  <i class="ri-instagram-line" style={{fontSize:'1.3rem'}}></i>
                </li>
                <li>
                  <i class="ri-facebook-fill"  style={{fontSize:'1.3rem'}}></i>
                </li>
                <li>
                  <i class="ri-twitter-fill"  style={{fontSize:'1.3rem'}}></i>
                </li>
                <li>
                  {" "}
                  <i class="ri-linkedin-box-fill"  style={{fontSize:'1.3rem'}}></i>
                </li>
              
              </ul>
              <button className="socials-btn">Request</button>
            </div>
          </div>
        </div>
        {/* <div className="second-nav-bar-container">
            <div className="second-nav-wrapper">
                <div className="menu">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Pages <i class="ri-arrow-drop-down-line"></i></li>
                        <li>Project</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="socials">
                    <ul>
                        <li><i class="ri-instagram-line"></i></li>
                        <li><i class="ri-facebook-fill"></i></li>
                        <li><i class="ri-twitter-fill"></i></li>
                        <li> <i class="ri-linkedin-box-fill"></i></li>
                       

                    </ul>
                </div>
            </div>
        </div> */}
      </header>
    </>
  );
};



export default SecondNavBar;
