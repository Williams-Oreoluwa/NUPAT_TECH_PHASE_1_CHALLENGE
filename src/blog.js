import React from "react";

const Blog = () => {
  return (
    <>
      <section className="blog-section">
        <div className="blog-details">
          <div className="blog-wrapper">
            <h2 style={{fontSize:'14px', padding:'.6rem .6rem', borderLeft:'5px solid #FFB82B', background:'#E8E8E880'}}>Our Blog</h2>
            <h1>Our Latest News</h1>
          </div>
          <div className="blog-bog">
            <div className="blog-bog-wrapper">
              <div className="blog-image">
                <img src="image/blog (1).png" alt="" />
                <div className="blog-icon">
                  <i class="ri-calendar-2-fill"></i>
                  <h2>08</h2>
                  <h3>September</h3>
                </div>
              </div>

              <div className="blog-text">
                <h3>
                  Inland freight a worthy <br /> solution for your business
                </h3>
                <h4>
                  We are dedicated in creating added value <br /> for our
                  customers by implementing modern <br /> technology in our
                  work.
                </h4>
                <ul>
                  <li>Urgent transport solution</li>
                  <li>Reliable and experienced staffs</li>
                  <li>Urgent transport solution</li>
                  <li>Reliable and experienced staffs</li>
                </ul>
              </div>
            </div>
            <div className="blog-bog-wrapper">
              <div className="blog-image">
                <img src="image/blog (2).png" alt="" />
                <div className="blog-icon">
                  <i class="ri-calendar-2-fill"></i>
                  <h2>08</h2>
                  <h3>September</h3>
                </div>
              </div>

              <div className="blog-text">
                <h3>
                How technology can help <br /> redraw the supply chain map
                </h3>
                <h4>
                  We are dedicated in creating added value <br /> for our
                  customers by implementing modern <br /> technology in our
                  work.
                </h4>
                <ul>
                  <li>Urgent transport solution</li>
                  <li>Reliable and experienced staffs</li>
                  <li>Urgent transport solution</li>
                  <li>Reliable and experienced staffs</li>
                </ul>
              </div>
            </div>
            <div className="blog-bog-wrapper">
              <div className="blog-image">
                <img src="image/blog (3).png" alt="" />
                <div className="blog-icon">
                  <i class="ri-calendar-2-fill"></i>
                  <h2>08</h2>
                  <h3>September</h3>
                </div>
              </div>

              <div className="blog-text">
                <h3>
                Five things you should have <br /> ready for your broker
                </h3>
                <h4>
                  We are dedicated in creating added value <br /> for our
                  customers by implementing modern <br /> technology in our
                  work.
                </h4>
                <ul>
                  <li>Urgent transport solution</li>
                  <li>Reliable and experienced staffs</li>
                  <li>Urgent transport solution</li>
                  <li>Reliable and experienced staffs</li>
                </ul>
              </div>
            </div>
            <div className="blog-btn">
              <button className="">More Blog</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
