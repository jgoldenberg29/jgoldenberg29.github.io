import React from "react";

const Slider = () => {
  return (
    <>
      <div className="shane_tm_hero" id="home" data-style="two">
        <div className="background">
          <div
            className="image"
            style={{ backgroundImage: "url(img/slider/home.jpg)" }}
          ></div>
        </div>
        {/* End .background */}

        <div className="container">
          <div className="content">
            <div className="name_wrap">
              <h3>
                <span>Josh</span><span className="overlay_effect"></span>
                <p>Goldenberg</p>
              </h3>
            </div>
            {/* End title */}

            <div className="job_wrap">
              <span className="job">
                Software Engineer
                <span className="overlay_effect"></span>
              </span>
            </div>
            {/* End designation */}
          </div>
          {/* End content */}

          <div className="shane_tm_down loaded">
            <div className="line_wrapper">
              <div className="line"></div>
            </div>
          </div>
        </div>
        {/* End .container */}
      </div>
    </>
  );
};

export default Slider;
