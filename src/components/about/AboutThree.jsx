import React from "react";

const AboutThree = () => {
  return (
    <>
      <div className="shane_tm_section" id="about">
        <div className="shane_tm_about">
          <div className="container">
            <div className="about_inner">
              <div className="left">
                <div
                  className="image"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <img src="/img/placeholders/1-1.jpg" alt="placeholder" />

                  <div
                    className="main"
                    style={{ backgroundImage: "url(img/about/3.jpg)" }}
                  ></div>
                </div>
                {/* End image */}
              </div>
              {/* End left */}

              <div className="right">
                <div
                  className="shane_tm_title"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <span>About Me</span>
                  <h3>Insatiable Software Engineer based in Philadelphia, PA</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p style={{marginBottom: "8px"}}>
                    {/* As a software engineer, I am always on a journey of growth. It challenges me every day. It feeds my passions for solving puzzles and finding patterns. Putting each piece into place, writing each line, solving each bug, I can feel the project coming to life.  The only thing that drives me more is the potential to affect positive change in my communities around me. And with software development, I can have both! */}

                    As a software engineer, I am dedicated to continuous growth, as I am in all facets of my life. I embrace the daily challenges that fuel my passion for solving puzzles and uncovering patterns. In putting each component into place, writing each line, solving each bug, I can feel the project coming to life. The only thing that drives me more is the potential to affect positive change in my communities around me. In software development I have found a unique arena where I can follow both paths simultaneously.
                  </p>
                  <p>
                    {/* I can pick up and implement new concepts and skills quickly and easily. With a background in teaching and coaching, I excel at breaking down and illuminating complex concepts for others in a patient and empathetic manner. I take great pleasure in working on teams, supporting those around me and helping them thrive. */}

                    My strong ability to swiftly grasp and apply new concepts is bolstered by my teaching and coaching background. This combination allows me to seamlessly transition between learning novel concepts myself as well as break down the ideas in a patient and empathetic manner, promoting understanding among my peers. Engaging in collaborative teamwork brings me immense satisfaction, and I excel in roles where I can contribute to supporting and empowering my colleagues, guiding them toward reaching their full potential.
                  </p>
                </div>
                <div
                  className="shane_tm_button"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <a href="img/resume/resume.jpg" download>
                    Download CV
                  </a>
                </div>
              </div>
              {/* End right */}
            </div>
          </div>
          {/* End container */}
        </div>
      </div>
    </>
  );
};

export default AboutThree;
