import React, { useEffect, useState } from "react";

const Footer = () => {
  const [clickedEmail, setClickedEmail] = useState(false)
  const [clickedPhone, setClickedPhone] = useState(false)

  useEffect(() => {
    if(clickedPhone) {
      setTimeout(() => {
        setClickedPhone(false)
      }, 150);
    }

    if(clickedEmail) {
      setTimeout(() => {
        setClickedEmail(false)
      }, 150);
    }
  }, [clickedPhone, clickedEmail])


 async function copyTextToClipboard(text) {
    if(text === '2158692852') setClickedPhone(true)
    if(text === 'jgoldenberg29@gmail.com') setClickedEmail(true)
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand('copy', true, text);
    }
  }

  const copiedEmailButtonClass = clickedEmail ? 'copied' : ''
  const copiedPhoneButtonClass = clickedPhone ? 'copied' : ''

  return (
    <>
      <div className="shane_tm_section">
        <div className="shane_tm_copyright">
          <div className="container">
            <div className="inner">
                <div className="list_inner">
                  {/* <img
                    className="svg"
                    src="img/svg/phone.svg"
                    alt="phone"
                  /> */}
                  <p>
                  <a href="tel:215 869 2852">215 869 2852</a>
                  <button
                  onClick={() => copyTextToClipboard('2158692852')}
                  style={{border: "none", backgroundColor: "black"}}><i  className={`fa-regular fa-copy ${copiedPhoneButtonClass}`}></i></button>
                  </p>
                </div>
                <div className="list_inner">
                  {/* <img
                    className="svg"
                    src="img/svg/phone.svg"
                    alt="phone"
                  /> */}
                  <p onClick={() => copyTextToClipboard('jgoldenberg29@gmail.com')}>
                  <span>jgoldenberg29@gmail.com <button style={{ border: "none", backgroundColor: "black"}}><i  className={`fa-regular fa-copy ${copiedEmailButtonClass}`}></i></button></span>
                  </p>
                </div>
              {/* <p>
                &copy; {new Date().getFullYear()} by{" "}
                <a
                  href="https://themeforest.net/user/ib-themes"
                  target="_blank"
                  rel="noreferrer"
                >
                  ib-themes
                </a>
                . All rights reserved.
              </p> */}
            </div>
            {/* End inner */}
          </div>
        </div>
        {/* End shane_tm_copyright */}
      </div>
    </>
  );
};

export default Footer;
