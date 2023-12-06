import React, { useState } from "react";
import Modal from "react-modal";
import Map from "../Map";
import Contact from "../Contact";
import Social from "../Social";

Modal.setAppElement("#root");

const CallToAction = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="shane_tm_section" id="contact">
      <div
        className="shane_tm_talk bg_image_props"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "img/callto-action/1.jpg"
          })`,
        }}
      >
        <div className="shape">
          <img className="svg" src="/img/svg/paper.svg" alt="partners brand" />
        </div>
        {/* End shape */}

        <div className="background" id="talk">
          <a className="player"></a>
          <div className="overlay"></div>
        </div>
        {/* End background */}

        <div className="talk_inner">
          <div className="text">
            <h3>Let's work together!</h3>
          </div>
          <div className="button">
            <button className="white-fill-bg" onClick={toggleModalOne}>
              Make an enquiry
            </button>
          </div>
        </div>
        {/* End talk_inner */}
      </div>
      {/* Start Modal */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="shane_tm_mobalbox_contact">
          <button className="close-modal" onClick={toggleModalOne}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* End close icon */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              {/* Start modal content */}
              <div className="title">
                <h3>Get in touch</h3>
              </div>
              {/* End title */}

              <div className="wrapper">
                <div className="left">
                  <div className="fields">
                    <Contact />
                  </div>
                </div>
                {/* End left */}
                <div className="right">
                  <div className="map_wrap">
                    <Map />
                  </div>
                </div>
                {/* End right */}
              </div>
              {/* End wrapper */}

              <div className="short_info">
                <ul>
                  <li>
                    <div className="list_inner">
                      <img
                        className="svg"
                        src="img/svg/location.svg"
                        alt="location"
                      />
                      <p>Brook 103, 90021 New York, USA</p>
                    </div>
                  </li>
                  {/* End silgle address */}

                  <li>
                    <div className="list_inner">
                      <img
                        className="svg"
                        src="img/svg/phone.svg"
                        alt="phone"
                      />
                      <p>
                        <a href="tel:215 869 2852">215 869 2852</a>
                      </p>
                    </div>
                  </li>
                  {/* End silgle address */}

                  <li>
                    <div className="list_inner">
                      <img
                        className="svg"
                        src="img/svg/share.svg"
                        alt="share"
                      />

                      <Social />
                    </div>
                  </li>
                  {/* End silgle address */}
                </ul>
              </div>
              {/* End modal conetent */}
            </div>
          </div>
          {/* End box inner */}
        </div>
        {/* End modalbox news */}
      </Modal>
      {/* End modal */}
    </div>
  );
};

export default CallToAction;
