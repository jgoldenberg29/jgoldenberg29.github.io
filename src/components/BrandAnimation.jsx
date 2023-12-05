import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const partnerList = [
  { img: "react", animationDealay: "13" },
  { img: "js", animationDealay: "26" },
  { img: "python", animationDealay: "39" },
  { img: "redux", animationDealay: "52" },
  { img: "flask", animationDealay: "65" },
  { img: "sqlalchemy", animationDealay: "78" },
  { img: "express", animationDealay: "91" },
  { img: "sequelize", animationDealay: "104" },
  { img: "postgres", animationDealay: "117" },
  { img: "sqlite", animationDealay: "130" },
  { img: "docker", animationDealay: "143" },
  { img: "aws", animationDealay: "156" },
  { img: "html5", animationDealay: "169" },
  { img: "css", animationDealay: "182" },
  { img: "node", animationDealay: "195" },
  { img: "npm", animationDealay: "208" },
];

// const partnerList = [

//   "devicon-redux-original colored",

// ]

export default function BrandAnimation() {
  var settings = {
    dots: false,
    arrow: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 3,
    autoplay: true,
    speed: 2000,
    responsive: [
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          speed: 1000
        },
      },
    ],
  };
  return (
    <ul>
      <Slider {...settings}>
        {partnerList.map((val, i) => (
          <li className="item" key={i}>
            <img
              src={`img/partners/${val.img}.png`}
              alt="partners brand"
              data-aos="fade"
              data-aos-duration="1200"
              data-aos-delay={val.animationDealay}
            />
          </li>
        ))}
        {/* End single parter image */}
      </Slider>
    </ul>
  );
}
