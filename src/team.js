import React from "react";

const Teams = () => {
  return (
    <>
      <section className="teams">
        <div className="teams-wrapper">
          <Header />
          <Description />
          <Image />
        </div>
      </section>
    </>
  );
};

const Header = () => {
  return (
    <>
      <div className="header">
        <h3>The Transporters</h3>
      </div>
    </>
  );
};

const Description = () => {
  return (
    <>
      <div className="team-desc">
        <h1>Meet Our Team of Experts</h1>
      </div>
    </>
  );
};

const Image = () => {
  return (
    <>
      <div className="teams-image">
        <div className="teams-image-wrapper">
          <div className="teams-stuff">
            <div className="teams-items">
              <div className="teams-image">
                <img src="/image/team (2).png" alt="" />
              </div>
              <div className="social-icon">
                <i class="ri-twitter-fill"></i>
                <i class="ri-facebook-fill"></i>
                <i class="ri-instagram-fill"></i>
              </div>
              <div className="campatriot-name">
                <h2>Jessca Arow</h2>
                <h4>Designer</h4>
              </div>
            </div>
            <div className="teams-items">
              <div className="teams-image">
                <img src="/image/team (1).png" alt="" />
              </div>
              <div className="social-icon">
                <i class="ri-linkedin-box-fill"></i>
                <i class="ri-twitter-fill"></i>
                <i class="ri-facebook-fill"></i>
                <i class="ri-instagram-fill"></i>
              </div>
              <div className="campatriot-name">
                <h2>Kathleen Smith</h2>
                <h4>Designer</h4>
              </div>
            </div>
            <div className="teams-items">
              <div className="teams-image">
                <img src="/image/team.png" alt="" />
              </div>
              <div className="social-icon">
                <i class="ri-facebook-fill"></i>
                <i class="ri-instagram-fill"></i>
              </div>
              <div className="campatriot-name">
                <h2>Rebecca Tylor</h2>
                <h4>Designer</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Teams;
