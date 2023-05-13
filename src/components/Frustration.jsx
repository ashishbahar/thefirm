import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import sec_3_img from "../assets/images/png/3sec_img.png";
import question_mark from "../assets/images/svg/questionmark.svg";
const Frustration = () => {
  return (
    <section className="bg_light_white">
      <Container className=" custom_container">
        <Row className=" justify-content-lg-between py-lg-5 flex-column-reverse flex-lg-row">
          <Col lg={6} className="py-lg-5" data-aos="zoom-out-right">
            <div className=" pt-3">
              <h2 className=" ff_nunito fw_900 letter_spacing_02 fs_4xl color_black ">
                Frustration of <span className="common_line">Clients</span>
              </h2>
              <p className=" ff_lora fw-normal fs_xl color_black letter_spacing_02">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
              <div className=" ps-lg-4 pt-2">
                <p className=" mt-2 mb-0 ff_lora fw-normal fs_xl color_black letter_spacing_02">
                  <img
                    className="me-2"
                    src={question_mark}
                    alt="question_mark"
                  />{" "}
                  Loren rasion gravida auem is bibenua tase
                </p>{" "}
                <p className=" mt-2 mb-0 ff_lora fw-normal fs_xl color_black letter_spacing_02">
                  <img
                    className="me-2"
                    src={question_mark}
                    alt="question_mark"
                  />{" "}
                  Lorem Ipsum is simply dummy text of the.
                </p>{" "}
                <p className=" mt-2 mb-0 ff_lora fw-normal fs_xl color_black letter_spacing_02">
                  <img
                    className="me-2"
                    src={question_mark}
                    alt="question_mark"
                  />{" "}
                  Printing and typesetting industry. Lorem Ipsum
                </p>{" "}
                <p className=" mt-2 mb-0 ff_lora fw-normal fs_xl color_black letter_spacing_02">
                  <img
                    className="me-2"
                    src={question_mark}
                    alt="question_mark"
                  />{" "}
                  When an unknown printer took a galley of type and scrambled it
                </p>{" "}
              </div>
            </div>
          </Col>
          <Col
            md={10}
            lg={6}
            data-aos="zoom-out-left"
            className="py-lg-4 m-auto pt-4"
          >
            <div>
              <img className="w-100" src={sec_3_img} alt="sec_3_img" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Frustration;
