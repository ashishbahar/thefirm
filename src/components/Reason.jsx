import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import brand from "../assets/images/png/brand.png";
import bhopu from "../assets/images/svg/bhopu.svg";
const Reason = () => {
  const [First, setFirst] = useState(0);
  return (
    <section className=" bg_darkgery pb-lg-5">
      <Container className=" custom_container pt-lg-5 pb-5 ">
        <div className="text-center pt-4 pt-lg-5 ">
          <h2
            className="ff_nunito fw_900 letter_spacing_02 fs_4xl color_black"
            data-aos="flip-left"
          >
            Reason to Choose Us
          </h2>
          <p
            className="sec_5_pera_width m-auto mb-0 ff_lora mt-3 fw-normal fs_xl color_black letter_spacing_02"
            data-aos="flip-right"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,
          </p>
          <div className="overflow_scroll m-auto d-flex justify-content-between  ">
            <div>
              {" "}
              <div className="d-flex align-items-center mt-sm-5 mt-4 mx-3  ">
                <span
                  onClick={() => {
                    setFirst(1);
                  }}
                  className="button_hover d-flex align-items-center"
                >
                  {" "}
                  <svg
                    className=" circle_line"
                    width="58"
                    height="22"
                    viewBox="0 0 58 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      x1="58"
                      y1="12"
                      x2="15"
                      y2="12"
                      stroke="#F7F7F7"
                      stroke-width="2"
                    />
                    <circle
                      cx="11"
                      cy="11"
                      r="10"
                      fill="#F7F7F7"
                      stroke="#F7F7F7"
                      stroke-width="2"
                    />
                  </svg>
                  <button className="sec_5_btn_modify letter_spacing_05 color_darkestgrey ff_nunito fw-bold fs_xl">
                    Market Research
                  </button>
                </span>
              </div>
            </div>{" "}
            <div>
              {" "}
              <div className="d-flex align-items-center mt-sm-5 mt-4 mx-3 justify-content-xl-center  ">
                <span
                  onClick={() => {
                    setFirst(0);
                  }}
                  className="button_hover d-flex align-items-center"
                >
                  {" "}
                  <svg
                    className=" circle_line"
                    width="58"
                    height="22"
                    viewBox="0 0 58 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      x1="58"
                      y1="12"
                      x2="15"
                      y2="12"
                      stroke="#F7F7F7"
                      stroke-width="2"
                    />
                    <circle
                      cx="11"
                      cy="11"
                      r="10"
                      fill="#F7F7F7"
                      stroke="#F7F7F7"
                      stroke-width="2"
                    />
                  </svg>
                  <button className="sec_5_btn_modify px-lg-5 letter_spacing_05 color_darkestgrey ff_nunito fw-bold fs_xl">
                    Branding
                  </button>
                </span>
              </div>
            </div>{" "}
            <div>
              {" "}
              <div className="d-flex align-items-center mt-sm-5 mt-4 mx-3 justify-content-xl-center  ">
                <span
                  onClick={() => {
                    setFirst(2);
                  }}
                  className="button_hover d-flex align-items-center"
                >
                  {" "}
                  <svg
                    className=" circle_line"
                    width="58"
                    height="22"
                    viewBox="0 0 58 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      x1="58"
                      y1="12"
                      x2="15"
                      y2="12"
                      stroke="#F7F7F7"
                      stroke-width="2"
                    />
                    <circle
                      cx="11"
                      cy="11"
                      r="10"
                      fill="#F7F7F7"
                      stroke="#F7F7F7"
                      stroke-width="2"
                    />
                  </svg>
                  <button className="sec_5_btn_modify px-lg-5 letter_spacing_05 color_darkestgrey ff_nunito fw-bold fs_xl">
                    Reporting
                  </button>
                </span>
              </div>
            </div>{" "}
            <div>
              {" "}
              <div className="d-flex align-items-center mt-sm-5 mt-4 mx-3   ">
                <span
                  onClick={() => {
                    setFirst(3);
                  }}
                  className="button_hover d-flex align-items-center"
                >
                  {" "}
                  <svg
                    className=" circle_line"
                    width="58"
                    height="22"
                    viewBox="0 0 58 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      x1="58"
                      y1="12"
                      x2="15"
                      y2="12"
                      stroke="#F7F7F7"
                      stroke-width="2"
                    />
                    <circle
                      cx="11"
                      cy="11"
                      r="10"
                      fill="#F7F7F7"
                      stroke="#F7F7F7"
                      stroke-width="2"
                    />
                  </svg>
                  <button className="sec_5_btn_modify letter_spacing_05 color_darkestgrey ff_nunito fw-bold fs_xl">
                    Data Analysis
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            First === 0
              ? " sec_5_main_box mt-sm-5 mt-4 d-block"
              : " sec_5_main_box mt-sm-5 mt-4 d-none"
          }
        >
          <Row
            data-aos="flip-down"
            className="py-lg-5  justify-content-between"
          >
            <Col lg={5} className="px-sm-5 pt-sm-4 px-4 pt-3 p-lg-0">
              <div className="brand_bg ms-lg-5 p-2  rounded-5 w-100">
                <img className=" w-100 rounded-5" src={brand} alt="brand" />
              </div>
            </Col>
            <Col lg={7} className="ps-lg-5 pb-4 pb-lg-0 pt-2 pt-lg-0">
              <div className="d-flex align-items-start px-lg-4">
                <div className=" p-2 ">
                  <img className="img_modify" src={bhopu} alt="bhopu" />
                </div>
                <div className=" mt-4">
                  <h3 className=" ff_nunito fw-bold fs_3xl color_black common_line_2 letter_spacing_02">
                    Branding
                  </h3>

                  <p className="mb-0 ml_minus me-2 me-sm-0 ff_lora fw-normal fs_xl color_black letter_spacing_02 ">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type
                  </p>
                  <button className=" ff_nunito fw-bold fs_xl color_white letter_spacing_05 common_btn_modify_2 mt-4">
                    Read More
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </div>{" "}
        <div
          className={
            First === 1
              ? " sec_5_main_box mt-sm-5 mt-4 d-block"
              : " sec_5_main_box mt-sm-5 mt-4 d-none"
          }
        >
          <Row className="py-lg-5  justify-content-between">
            <Col lg={5} className="px-sm-5 pt-sm-4 px-4 pt-3 p-lg-0">
              <div className="brand_bg ms-lg-5 p-2  rounded-5 w-100">
                <img className=" w-100 rounded-5" src={brand} alt="brand" />
              </div>
            </Col>
            <Col lg={7} className="ps-lg-5 pb-4 pb-lg-0 pt-2 pt-lg-0">
              <div className="d-flex align-items-start px-lg-4">
                <div className=" p-2 ">
                  <img className="img_modify" src={bhopu} alt="bhopu" />
                </div>
                <div className=" mt-4">
                  <h3 className=" ff_nunito fw-bold fs_3xl color_black common_line_2 letter_spacing_02">
                    Market Research
                  </h3>

                  <p className="mb-0 ml_minus me-2 me-sm-0 ff_lora fw-normal fs_xl color_black letter_spacing_02 ">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type
                  </p>
                  <button className=" ff_nunito fw-bold fs_xl color_white letter_spacing_05 common_btn_modify_2 mt-4">
                    Read More
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </div>{" "}
        <div
          className={
            First === 2
              ? " sec_5_main_box mt-sm-5 mt-4 d-block"
              : " sec_5_main_box mt-sm-5 mt-4 d-none"
          }
        >
          <Row className="py-lg-5  justify-content-between">
            <Col lg={5} className="px-sm-5 pt-sm-4 px-4 pt-3 p-lg-0">
              <div className="brand_bg ms-lg-5 p-2  rounded-5 w-100">
                <img className=" w-100 rounded-5" src={brand} alt="brand" />
              </div>
            </Col>
            <Col lg={7} className="ps-lg-5 pb-4 pb-lg-0 pt-2 pt-lg-0">
              <div className="d-flex align-items-start px-lg-4">
                <div className=" p-2 ">
                  <img className="img_modify" src={bhopu} alt="bhopu" />
                </div>
                <div className=" mt-4">
                  <h3 className=" ff_nunito fw-bold fs_3xl color_black common_line_2 letter_spacing_02">
                    Reporting
                  </h3>

                  <p className="mb-0 ml_minus me-2 me-sm-0 ff_lora fw-normal fs_xl color_black letter_spacing_02 ">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type
                  </p>
                  <button className=" ff_nunito fw-bold fs_xl color_white letter_spacing_05 common_btn_modify_2 mt-4">
                    Read More
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </div>{" "}
        <div
          className={
            First === 3
              ? " sec_5_main_box mt-sm-5 mt-4 d-block"
              : " sec_5_main_box mt-sm-5 mt-4 d-none"
          }
        >
          <Row className="py-lg-5  justify-content-between">
            <Col lg={5} className="px-sm-5 pt-sm-4 px-4 pt-3 p-lg-0">
              <div className="brand_bg ms-lg-5 p-2  rounded-5 w-100">
                <img className=" w-100 rounded-5" src={brand} alt="brand" />
              </div>
            </Col>
            <Col lg={7} className="ps-lg-5 pb-4 pb-lg-0 pt-2 pt-lg-0">
              <div className="d-flex align-items-start px-lg-4">
                <div className=" p-2 ">
                  <img className="img_modify" src={bhopu} alt="bhopu" />
                </div>
                <div className=" mt-4">
                  <h3 className=" ff_nunito fw-bold fs_3xl color_black common_line_2 letter_spacing_02">
                    Data Analysis
                  </h3>

                  <p className="mb-0 ml_minus me-2 me-sm-0 ff_lora fw-normal fs_xl color_black letter_spacing_02 ">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type
                  </p>
                  <button className=" ff_nunito fw-bold fs_xl color_white letter_spacing_05 common_btn_modify_2 mt-4">
                    Read More
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Reason;
