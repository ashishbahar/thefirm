import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img_1 from "../assets/images/svg/img_1.svg";
import img_2 from "../assets/images/svg/img_2.svg";
import img_3 from "../assets/images/svg/img_3.svg";
import tf from "../assets/images/png/ff.png";
import circle_1 from "../assets/images/svg/circle_1.svg";
import circle_2 from "../assets/images/svg/circle_2.svg";
import circle_3 from "../assets/images/png/circle_2.png";
const PerfectSolution = () => {
  return (
    <section>
      <Container className=" custom_container pt-4 pt-sm-0">
        <Row className=" justify-content-between py-4 py-lg-5 align-items-center">
          <Col lg={7} xl={6} className="position-relative py-xl-5">
            <img
              className=" position-absolute d-none d-sm-block tf_position"
              src={tf}
              alt="tf"
            />
            <Row className=" justify-content-between">
              <Col lg={6} data-aos="zoom-out-down">
                <div className="text-center sec_4_boxes py-4 mx-2 position-relative  ">
                  <img className=" mt-3" src={img_1} alt="img_1" />
                  <img
                    className="position-absolute circle_1_position"
                    src={circle_1}
                    alt="circle"
                  />
                  <p className=" mt-3 ff_nunito fw-bold fs_3xl color_black letter_spacing_05">
                    Coaching
                  </p>{" "}
                  <p className=" mb-3  ff_lora fw-normal fs_xl color_black letter_spacing_02">
                    Loren rasion gravida auem is bibenua tase
                  </p>
                </div>
              </Col>
              <Col
                lg={6}
                data-aos="zoom-out-left"
                className=" transform_translate_y py-4 py-lg-0 "
              >
                <div className="text-center  sec_4_boxes py-4 mx-2 position-relative ">
                  <img
                    className="position-absolute circle_3_position"
                    src={circle_3}
                    alt="circle"
                  />
                  <img className=" mt-3" src={img_2} alt="img_2" />
                  <p className=" mt-3 ff_nunito fw-bold fs_3xl color_black letter_spacing_05">
                    Digital Partner
                  </p>{" "}
                  <p className=" mb-3  ff_lora fw-normal fs_xl color_black letter_spacing_02">
                    Loren rasion gravida auem is bibenua tase
                  </p>
                </div>
              </Col>{" "}
              <Col lg={6} data-aos="zoom-out-up" className="ms-xxl-4">
                <div className="text-center sec_4_boxes position-relative py-4 mx-2 mt-lg-5 ">
                  <img
                    className="position-absolute circle_2_position"
                    src={circle_2}
                    alt="circle"
                  />
                  <img className=" mt-3" src={img_3} alt="img_3" />
                  <p className=" mt-3 ff_nunito fw-bold fs_3xl color_black letter_spacing_05">
                    SEO
                  </p>{" "}
                  <p className=" mb-3  ff_lora fw-normal fs_xl color_black letter_spacing_02">
                    Loren rasion gravida auem is bibenua tase
                  </p>
                </div>
              </Col>
            </Row>
          </Col>{" "}
          <Col lg={5} className=" pt-4 pt-lg-0">
            <h2 className="ff_nunito fw_900 letter_spacing_02 fs_4xl color_black">
              Perfect Solution for Your{" "}
              <span className="common_line"> Bussiness</span>{" "}
            </h2>
            <p className=" mb-0 ff_lora mt-3 fw-normal fs_xl color_black letter_spacing_02">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries,
            </p>
            <button className="common_btn_modify mt-lg-4 mt-2 letter_spacing_05  ff_nunito fw-bold color_white fs_xl ">
              Read More
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PerfectSolution;
