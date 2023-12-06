import React from "react";

const SkillsTwo = () => {
  return (
    <>
      <div className="shane_tm_section">
        <div className="shane_tm_skills">
          <div className="container">
            <div className="skills_inner">
              <div
                className="left"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <div className="shane_tm_title">
                  <h3>I excel at mastering new concepts within tight timelines </h3>
                </div>
                <div className="text">
                  <p>
                  My proficiency in discerning patterns, comprehending and extrapolating logic and syntax, and recognizing areas where I require additional information enables me to rapidly absorb new concepts and continually build upon them during implementation. When faced with gaps in my understanding, I proactively seek out the necessary information. Moreover, I am not hesitant to ask questions when needed to ensure my thorough understanding.
                  </p>
                  {/* I can implement new concepts and even explain them to others in a comprhensive way having shortly my initial exposure to the topic.  */}
                </div>
              </div>
              {/* End .left */}

              <div
                className="right"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <div className="tokyo_progress">
                  <div className="progress_inner">
                    <span>
                      <span className="label">Front-end Development</span>
                      <span className="number">90%</span>
                    </span>
                    <div className="background">
                      <div className="bar">
                        <div
                          className="bar_in"
                          style={{ width: 90 + "%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  {/* End .progress_inner */}

                  <div className="progress_inner">
                    <span>
                      <span className="label">Back-end Development</span>
                      <span className="number">90%</span>
                    </span>
                    <div className="background">
                      <div className="bar">
                        <div
                          className="bar_in"
                          style={{ width: 90 + "%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  {/* End .progress_inner */}

                  <div className="progress_inner">
                    <span>
                      <span className="label">Front-end Styling</span>
                      <span className="number">80%</span>
                    </span>
                    <div className="background">
                      <div className="bar">
                        <div
                          className="bar_in"
                          style={{ width: 80 + "%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  {/* End .progress_inner */}
                </div>
              </div>
              {/* End .right */}
            </div>
          </div>
          {/* End .conainer */}
        </div>
      </div>
    </>
  );
};

export default SkillsTwo;
