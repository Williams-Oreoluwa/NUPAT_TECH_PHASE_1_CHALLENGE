import React from "react";

const Transport = () => {
  return (
    <>
      <section className="transport-main-container">
        <div className="transport-container">
          <div className="transport-wrapper">
            <div className="title">
              <h2>Transporting Across The World</h2>
            </div>
            <div className="transport-photos">
              <div className="transport-photo-wrapper">
                <div className="image-stuff">
                  <img src="/image/pexels-alexander-9739039.jpg" alt="" />
                  <span>
                    <h2>Liquid Transpoation</h2>
                    <h4>Premium Tankers</h4>
                  </span>
                </div>

                <div className="image-stuff">
                  <img src="/image/pexels-anna-shvets-5324862.jpg" alt="" />
                  <span>
                    <h2>Liquid Transpoation</h2>
                    <h4>Premium Tankers</h4>
                  </span>
                </div>

                <div className="image-stuff">
                  <img src="/image/pexels-antonius-natan-11835352.jpg" alt="" />
                  <span>
                    <h2>Liquid Transpoation</h2>
                    <h4>Premium Tankers</h4>
                  </span>
                </div>
                <div className="image-stuff">
                  <img
                    src="/image/pexels-matthis-volquardsen-2091159.jpg"
                    alt=""
                  />
                  <span>
                    <h2>Liquid Transpoation</h2>
                    <h4>Premium Tankers</h4>
                  </span>
                </div>
                <div className="image-stuff">
                  <img src="/image/pexels-quintin-gellar-2199293.jpg" alt="" />
                  <span>
                    <h2>Liquid Transpoation</h2>
                    <h4>Premium Tankers</h4>
                  </span>
                </div>

                {/* <img src="/image/pexels-anna-shvets-5324862.jpg" alt="" />
                <img src="/image/pexels-antonius-natan-11835352.jpg" alt="" />
                <img
                  src="/image/pexels-matthis-volquardsen-2091159.jpg"
                  alt=""
                />
                <img src="/\image/pexels-tom-fisk-1554646.jpg" alt="" /> */}
              </div>
            </div>
            <div className="more-btn">
              <button>Read more</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Transport;
