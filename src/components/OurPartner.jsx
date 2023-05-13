import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import safari from "../assets/images/svg/safari.svg";
import micro from "../assets/images/svg/microsoft.svg";
import google from "../assets/images/svg/google.svg";
import firfox from "../assets/images/svg/firefox.svg";
const OurPartner = () => {
  let settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          dots: false,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1190,
        settings: {
          slidesToShow: 3,
          dots: false,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 996,
        settings: {
          slidesToShow: 2,
          dots: false,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="" data-aos="flip-right">
      <Container className=" custom_container pt-lg-5 pt-4 ">
        <h2 className=" text-center pt-lg-5 mt-lg-2 ff_nunito fw_900 letter_spacing_02 fs_4xl color_black ">
          Our <span className="common_line">Partner</span>
        </h2>
        <div className="mx-5  ">
          {" "}
          <Slider {...settings} className=" py-5 mb-lg-4 partner ">
            <div className="slider_box text-center py-3 ">
              <img src={micro} alt="micro" />
            </div>
            <div className="slider_box text-center py-3  ">
              <img src={google} alt="google" />
            </div>
            <div className="slider_box text-center py-3 ">
              <img src={firfox} altfirfox />
            </div>
            <div className="slider_box text-center py-3 ">
              <img src={safari} alt="safari" />
            </div>
            <div className="slider_box text-center py-3 ">
              <img src={google} alt="google" />
            </div>
          </Slider>
        </div>
      </Container>
    </section>
  );
};

export default OurPartner;
