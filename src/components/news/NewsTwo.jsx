import React, { useState } from "react";
import Modal from "react-modal";
import Social from "../Social";

Modal.setAppElement("#root");

const NewsTwo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  function toggleModalTwo() {
    setIsOpen2(!isOpen2);
  }
  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }

  return (
    <div className="shane_tm_section" id="personal">
      <div className="shane_tm_news">
        <div className="container">
          <div className="shane_tm_title">
            <span>Personal</span>
            <h3>More about Josh</h3>
          </div>
          {/* End shane_tm_title */}
          <div className="news_list">
            <ul>
              <li data-aos="fade-right" data-aos-duration="1200">
                <div className="list_inner">
                  <div className="image" onClick={toggleModalOne}>
                    <img src="/img/placeholders/4-3.jpg" alt="thumb" />
                    <div
                      className="main"
                      style={{
                        backgroundImage: `url(${
                          process.env.PUBLIC_URL + "img/news/travel.jpg"
                        })`,
                      }}
                    ></div>
                  </div>
                  {/* End image */}

                  <div className="details">
                    <h3 className="title" onClick={toggleModalOne}>
                      World Traveler
                    </h3>
                    <p className="date">
                      {/* By <a href="#">Alex Watson</a> <span>20 May 2020</span> */}
                    </p>
                  </div>
                  {/* End details */}

                  {/* START MODAL */}
                  <Modal
                    isOpen={isOpen}
                    onRequestClose={toggleModalOne}
                    contentLabel="My dialog"
                    className="custom-modal"
                    overlayClassName="custom-overlay"
                    closeTimeoutMS={500}
                  >
                    <div className="shane_tm_modalbox_news">
                      <button className="close-modal" onClick={toggleModalOne}>
                        <img src="/img/svg/cancel.svg" alt="close icon" />
                      </button>
                      {/* End close icon */}
                      <div className="box_inner">
                        <div className="description_wrap scrollable">
                          <div className="image">
                            <img src="/img/placeholders/4-3.jpg" alt="thumb" />
                            <div
                              className="main"
                              style={{
                                backgroundImage: `url(${
                                  process.env.PUBLIC_URL + "img/news/travel.jpg"
                                })`,
                              }}
                            ></div>
                          </div>
                          {/* End image */}
                          <div className="details">
                            <h3 className="title">
                              World Traveler
                            </h3>
                            <p className="date">
                              {/* By <a href="#">Brook Kennedy</a>{" "}
                              <span>07 April 2020</span> */}
                            </p>
                          </div>
                          {/* End details */}
                          <div className="description">
                            <p>
                             {/* A few months before my twenty-fourth birthday, I felt strong need for a change of pace. After some deliberation, I  chose embark on a journey to New Zealnd. I split my first few months bewteen working on a vineyard and a dairy farm and taking in stunning landscapes. At the end of my third month, as I ascended a mountain near Queenstown, a serendipitous encounter altered the course of my travels. On the other side of the world, sitting on a bench overlooking the Southern Alps sat a woman who'd grown up just a few hours away from my home. After a short lunch, we continued the hike together and had dinner to celebrate. Our connection was so strong and immediate, we decided to exlpore the wonders of New Zealands South Island together... and then the North Island... and then South East Asia...and then for the next 2+ years we travelled to 15 more countries. (We got married in November, 2019!) */}
                              {/* I have always loved exploring. I love being outdoors especially breathing in cool mountain air. I spent almost three years from 2016-2019 traveling to almost 20 different countries all over the world. I met my now wife while I was on my first stop, spending the better part of a year in New Zealand. Those three years encountering different cultures and environments, I had some of the most formative experiences. Each moment provided a unique perspective, unveiling aspects of life and myself that I hadn't known I was searching for. It taught me to look at the world differently, to listen and observe more, to appreciate new and different perspectives from my own, how to better handle stress, how to think through and make decisions, how bounce back from making the wrong choice and how to work together with another person and manage life as a team. */}
                              I have always loved exploring. I enjoy being outdoors, especially breathing in the cool mountain air. I spent almost three years, from 2016 to 2019, traveling to nearly 20 different countries all over the world. I met my now-wife while I was on my first stop, spending the better part of a year in New Zealand. During those three years, encountering different cultures and environments, I had some of my the most formative experiences of my life. Each moment provided a unique perspective, unveiling aspects of life and myself that I hadn't known I was searching for. It taught me to look at the world differently, to listen and observe more, to appreciate new and different perspectives from my own, how to better handle stress, how to think through and make decisions, how to learn and bounce back from making the wrong decision, and how to work together with another person and manage life as a team. I owe so much of my current happiness to that initial decision fly to the other side of the world.
                            </p>
                            {/* <blockquote>
                              As Vintage decided to have a closer look into
                              fast-paced New York web design realm in person. As
                              Vintage decided to have a closer look into
                              fast-paced New York web design realm in person, we
                              get to acquaint with most diverse and
                              exceptionally captivating personalities. As
                              Vintage decided to have a closer look into
                              fast-paced New York web design realm in person, we
                              get to acquaint with most diverse and
                              exceptionally captivating personalities.
                            </blockquote> */}
                            <p>

                            </p>
                          </div>
                          {/* End description */}
                          {/* <div className="news_share"> */}
                            {/* <Social /> */}
                            {/* End social share */}
                          {/* </div> */}
                          {/* End news share */}
                        </div>
                      </div>
                      {/* End box inner */}
                    </div>
                    {/* End modal box news */}
                  </Modal>
                  {/* End modal */}
                </div>
              </li>
              {/* End single blog */}

              <li
                data-aos="fade-right"
                data-aos-duration="1200"
                data-aos-delay="150"
              >
                <div className="list_inner">
                  <div className="image" onClick={toggleModalTwo}>
                    <img src="/img/placeholders/4-3.jpg" alt="thumb" />
                    <div
                      className="main"
                      style={{
                        backgroundImage: `url(${
                          process.env.PUBLIC_URL + "img/news/canoe.jpg"
                        })`,
                      }}
                    ></div>
                  </div>
                  {/* End image */}

                  <div className="details">
                    <h3 className="title" onClick={toggleModalTwo}>
                      Maker
                    </h3>
                    <p className="date">
                      {/* By <a href="#">Brook Kennedy</a>{" "}
                      <span>07 April 2020</span> */}
                    </p>
                  </div>
                  {/* End details */}

                  <Modal
                    isOpen={isOpen2}
                    onRequestClose={toggleModalTwo}
                    contentLabel="My dialog"
                    className="custom-modal"
                    overlayClassName="custom-overlay"
                    closeTimeoutMS={500}
                  >
                    <div className="shane_tm_modalbox_news">
                      <button className="close-modal" onClick={toggleModalTwo}>
                        <img src="/img/svg/cancel.svg" alt="close icon" />
                      </button>
                      {/* End close modal */}
                      <div className="box_inner">
                        <div className="description_wrap scrollable">
                          <div className="image">
                            <img src="/img/placeholders/4-3.jpg" alt="thumb" />
                            <div
                              className="main"
                              style={{
                                backgroundImage: `url(${
                                  process.env.PUBLIC_URL + "img/news/canoe.jpg"
                                })`,
                              }}
                            ></div>
                          </div>
                          {/* End image */}
                          <div className="details">
                            <h3 className="title">
                            Maker
                            </h3>
                            <p className="date">
                              {/* By <a href="#">Brook Kennedy</a>{" "}
                              <span>07 April 2020</span> */}
                            </p>
                          </div>
                          {/* End details */}
                          <div className="description">
                            <p>
                            I've always found great satisfaction in the process of creating something from scratch. In 2015, I dedicated four months to the construction of a 15-foot Hiawatha canoe, meticulously crafting it from cedar and walnut. Progressing inch by inch each evening and weekend, I watched it evolve into a seaworthy vessel. The moment I finally placed it in the water and settled inside was undeniably one of the most gratifying experiences of my life.
                            </p>
                            {/* <blockquote>
                              As Vintage decided to have a closer look into
                              fast-paced New York web design realm in person. As
                              Vintage decided to have a closer look into
                              fast-paced New York web design realm in person, we
                              get to acquaint with most diverse and
                              exceptionally captivating personalities. As
                              Vintage decided to have a closer look into
                              fast-paced New York web design realm in person, we
                              get to acquaint with most diverse and
                              exceptionally captivating personalities.
                            </blockquote> */}
                            <p>
                            Periodically, I incorporate a new craft or material into my life. In 2017, I taught myself to crochet, resulting in a vibrant, multicolored blanket large enough to comfortably cover a queen-sized bed. Then, in 2020, I delved into the world of drawing, an activity I now engage in regularly which I find quite therapeutic and relaxing.
                            </p>
                          </div>
                          {/* End description */}
                          {/* <div className="news_share">
                            <Social /> */}
                            {/* End social share */}
                          {/* </div> */}
                          {/* End news share */}
                        </div>
                      </div>
                    </div>
                  </Modal>
                  {/* End modal */}
                </div>
                {/* End list inner */}
              </li>
              {/* End single blog */}

              <li
                data-aos="fade-right"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                <div className="list_inner">
                  <div className="image" onClick={toggleModalThree}>
                    <img src="/img/placeholders/4-3.jpg" alt="thumb" />
                    <div
                      className="main"
                      style={{
                        backgroundImage: `url(${
                          process.env.PUBLIC_URL + "img/news/dad.jpg"
                        })`,
                      }}
                    ></div>
                  </div>
                  {/* END IMAGE */}

                  <div className="details">
                    <h3 className="title" onClick={toggleModalThree}>
                      Dad
                    </h3>
                    <p className="date">
                      {/* By <a href="#">Paola Atkins</a> <span>02 March 2020</span> */}
                    </p>
                  </div>
                  {/* END DETAILS */}

                  {/* START MODAL */}
                  <Modal
                    isOpen={isOpen3}
                    onRequestClose={toggleModalThree}
                    contentLabel="My dialog"
                    className="custom-modal"
                    overlayClassName="custom-overlay"
                    closeTimeoutMS={500}
                  >
                    <div className="shane_tm_modalbox_news">
                      <button
                        className="close-modal"
                        onClick={toggleModalThree}
                      >
                        <img src="/img/svg/cancel.svg" alt="close icon" />
                      </button>
                      {/* END CLOSE MODAL */}
                      <div className="box_inner">
                        <div className="description_wrap scrollable">
                          <div className="image">
                            <img src="/img/placeholders/4-3.jpg" alt="thumb" />
                            <div
                              className="main"
                              style={{
                                backgroundImage: `url(${
                                  process.env.PUBLIC_URL + "img/news/dad.jpg"
                                })`,
                              }}
                            ></div>
                          </div>
                          {/* END IMAGE */}
                          <div className="details">
                            <h3 className="title">
                              Dad
                            </h3>
                            <p className="date">
                              {/* By <a href="#">Brook Kennedy</a>{" "}
                              <span>07 April 2020</span> */}
                            </p>
                          </div>
                          {/* END DETAILS */}
                          <div className="description">
                            <p>
                              Becoming a dad was a truly life changing experience. It is the most fulfilling and the most challenging role I have ever undertaken. Parenthood has taught me a whole new level of patience and empathy. It also brings me endless joy. There is nothing I love more than goofing around with my little munchkin. She just makes the whole world melt away. My most treasured memories are just days spending hours running around with my wife and kiddo. They are my heart. 
                            </p>
                            {/* <blockquote>
                              As Vintage decided to have a closer look into
                              fast-paced New York web design realm in person. As
                              Vintage decided to have a closer look into
                              fast-paced New York web design realm in person, we
                              get to acquaint with most diverse and
                              exceptionally captivating personalities. As
                              Vintage decided to have a closer look into
                              fast-paced New York web design realm in person, we
                              get to acquaint with most diverse and
                              exceptionally captivating personalities.
                            </blockquote> */}
                            <p>

                            </p>
                          </div>
                          {/* END DESCRIPTION */}
                          {/* <div className="news_share">
                            <Social /> */}
                            {/* END SOCIAL SHARE */}
                          {/* </div> */}
                        </div>
                      </div>
                    </div>
                  </Modal>
                </div>
                {/* END LIST INNER */}
              </li>

              {/* End single blog */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsTwo;
