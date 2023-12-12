import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TestimonialTwo() {
  var settings = {
    dots: false,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <ul>
      <Slider {...settings}>
        <li className="item">
          <div className="texts">
            <p>
            I once joked that Josh's back must be sore from carrying me all the time, but a lot of truth is said in jest. Josh grasps concepts quickly and is not satisfied with surface-level explanations; he digs deep to find answers and excels at problem-solving. His upbeat personality, eagerness to learn, and willingness to help others easily separate him from the crowd, and Josh quickly became my "Go-To" whenever I needed another set of eyes for debugging or finding an alternate solution. He'll be an asset on any Team lucky enough to have him, and I have no doubt he will be successful in his future endeavors!
            </p>
            <div className="author">
              <div className="image">
                <div
                  className="main"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL + "img/about/Lan.jpeg"
                    })`,
                  }}
                ></div>
              </div>
              <div className="short">
                <h3 className="author">
                  <span>Nolan Oribello</span>
                </h3>
                <h3 className="job">
                  <span>Software Developer</span>
                </h3>
              </div>
            </div>
          </div>
        </li>
        {/* End single slide item */}

        <li className="item">
          <div className="texts">
            <p style={{marginBottom: '8px'}}>
            As a man who prides himself on being at least 15 minutes early to everything, punctuality is important to me. Meeting Josh for the first time, I was struck by the obvious conclusion that... one person out there makes it a point to be at least 16 minutes early to everything!! My hat is off!!
            </p>
            <p>
            My immediate impression of Josh was that he was a charming and diligent fellow! Having had more time to work with him over the coming month, I see that I was only scraping the surface at that time. Josh is a passionate and driven developer! His mind is razor-sharp and he digests new material quickly!! Always pushing to improve and hone his craft further!! I also came to see, that Josh is a deeply caring person and will always advocate for those around him! He is a natural leader and a compassionate one. The only thing that continues to confuse me about Josh, is that he isn’t already the CEO of a company! What are we all waiting for?!
            </p>
            <div className="author">
              <div className="image">
                <div
                  className="main"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL + "img/about/Brian_K.jpeg"
                    })`,
                  }}
                ></div>
              </div>
              <div className="short">
                <h3 className="author">
                  <span>Brian Kiesel</span>
                </h3>
                <h3 className="job">
                  <span>Project Manager</span>
                </h3>
              </div>
            </div>
          </div>
        </li>
        {/* End single slide item */}

        <li className="item">
          <div className="texts">
            <p style={{marginBottom: '8px'}}>
            I had the big pleasure of working closely with Josh on a project, and I must say, he is an exceptionally focused and caring leader. Josh has an innate ability to push projects to highest levels, consistently delivering work of the utmost excellence. His attention to detail is unmatched, and I've had the privilege of witnessing his brilliant code solutions, earning my utmost admiration and respect.
            </p>
            <p>
            What sets Josh apart is not only his technical prowess but also his outstanding qualities as a team player. He is the epitome of a collaborative spirit, always willing to go the extra mile to ensure the success of the team. Josh's kindness, understanding, and warm demeanor create a positive and natural working environment.
            I am grateful for the times Josh generously extended his help, always approaching challenges with eagerness and true care. Working with Josh has been an enriching experience, and I wholeheartedly recommend him as a colleague and a leader.
            </p>
            <div className="author">
              <div className="image">
                <div
                  className="main"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL + "img/about/Mira.jpeg"
                    })`,
                  }}
                ></div>
              </div>
              <div className="short">
                <h3 className="author">
                  <span>Mira Borkowska</span>
                </h3>
                <h3 className="job">
                  <span>Software Engineer</span>
                </h3>
              </div>
            </div>
          </div>
        </li>
        {/* End single slide item */}
      </Slider>
    </ul>
  );
}
