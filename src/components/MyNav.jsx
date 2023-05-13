import React, { useState } from "react";
import { Container } from "react-bootstrap";
import pagelogo from "../assets/images/svg/pagelogo.svg";
import cross from "../assets/images/svg/cross.svg";
const MyNav = () => {
  const [First, setFirst] = useState(true);
  if (First) {
    document.body.classList.remove("overflow-hidden");
  } else {
    document.body.classList.add("overflow-hidden");
  }
  return (
    <nav className="border_1">
      <Container className="custom_container ">
        <div className="d-flex justify-content-between align-items-center">
          <ul className="ps-0 mb-0">
            <li className="my-4">
              <a href="#">
                <img className="pagelogo_width" src={pagelogo} alt="pagelogo" />
              </a>
            </li>
          </ul>
          <ul
            className={
              First
                ? "d-flex align-items-center flex-column  gap-4 gap-lg-0 flex-lg-row mb-0 ps-0 mobile_ul hide"
                : "d-flex align-items-center flex-column  gap-4 gap-lg-0 flex-lg-row mb-0 ps-0 mobile_ul show "
            }
          >
            <img
              onClick={() => {
                setFirst(true);
              }}
              className=" cross_position d-lg-none"
              src={cross}
              alt=" cross"
            />
            <li className="mx-xl-3 mx-2">
              <a
                onClick={() => {
                  setFirst(true);
                }}
                className="ff_nunito fw-bold color_black letter_spacing_05 fs_xl nav_link_hover"
                href="#"
              >
                Home
              </a>
            </li>{" "}
            <li className="mx-xl-3 mx-2">
              <a
                onClick={() => {
                  setFirst(true);
                }}
                className="ff_nunito fw-bold color_black letter_spacing_05 fs_xl nav_link_hover"
                href="#"
              >
                Solutions
              </a>
            </li>{" "}
            <li className="mx-xl-3 mx-2">
              <a
                onClick={() => {
                  setFirst(true);
                }}
                className="ff_nunito fw-bold color_black letter_spacing_05 fs_xl nav_link_hover"
                href="#"
              >
                Cases
              </a>
            </li>{" "}
            <li className="mx-xl-3 mx-2">
              <a
                onClick={() => {
                  setFirst(true);
                }}
                className="ff_nunito fw-bold color_black letter_spacing_05 fs_xl nav_link_hover"
                href="#"
              >
                About Us
              </a>
            </li>{" "}
            <li className="mx-xl-3 mx-2">
              <a
                onClick={() => {
                  setFirst(true);
                }}
                className="ff_nunito fw-bold color_black letter_spacing_05 fs_xl nav_link_hover"
                href="#"
              >
                Blog
              </a>
            </li>{" "}
            <li className="mx-xl-3 mx-2">
              <a
                onClick={() => {
                  setFirst(true);
                }}
                className="ff_nunito fw-bold color_black letter_spacing_05 fs_xl nav_link_hover"
                href="#"
              >
                Contact Us
              </a>
            </li>
            <button
              onClick={() => {
                setFirst(true);
              }}
              className="common_btn_modify ms-2 letter_spacing_05 ff_nunito fw-bold color_white fs_xl "
            >
              Get in Touch
            </button>
          </ul>
          <div
            onClick={() => {
              setFirst(false);
            }}
            className="menuicon d-lg-none "
          >
            <div className="line"></div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default MyNav;
