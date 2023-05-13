import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import sec_7_img_1 from "../assets/images/png/sec_7_img_1.png";
import sec_7_img_2 from "../assets/images/png/sec_7_img_2.png";
import sec_7_img_3 from "../assets/images/png/sec_7_img_3.png";
import mini_img_1 from "../assets/images/svg/sec_7_mini_img_1.svg";
import mini_img_2 from "../assets/images/svg/sec_7_mini_img_2.svg";
import mini_img_3 from "../assets/images/svg/sec_7_mini_img_3.svg";
import watch from "../assets/images/svg/watch.svg";
const OurBlogs = () => {
  return (
    <section className=" bg_darkgery  ">
      <Container className=" custom_container pt-sm-5 pt-4 pb-lg-4 ">
        <h3
          data-aos="fade-up"
          className=" text-center mb-lg-5 pt-lg-4 mb-0 ff_nunito fw_900 fs_4xl color_black letter_spacing_02"
        >
          Our <span className=" common_line_2">Blogs</span>
        </h3>
        <Row className=" py-lg-4">
          <Col
            data-aos="fade-right"
            data-aos-duration="3000"
            sm={10}
            md={6}
            lg={4}
            className=" m-auto mt-4 mt-lg-0 "
          >
            <div className=" blogs_boxes  mx-xl-4">
              <img className="w-100 mt-1" src={sec_7_img_1} alt="sec_7_img_1" />
              <div className="px-3">
                {" "}
                <h4 className=" ff_nunito fw-bold  color_black fs_xxl">
                  Lorem Ipsum is{" "}
                </h4>
                <p className=" ff_lora fw-noraml fs_lg color_black letter_spacing_02">
                  Lorem Ipsum is simply text of the printing and type setting
                  industry. make a type specimen.{" "}
                </p>
              </div>
              <div className="d-flex justify-content-between mx-2 mb-3 pt-3 mt-2 border_top">
                <div className="d-flex align-items-center">
                  <img src={mini_img_1} alt="mini_img_1" />
                  <p className=" ms-1 mb-1">Alex Liones</p>
                </div>
                <div className="d-flex align-items-center">
                  <img className="" src={watch} alt="watch" />
                  <p className=" ff_nunito fw-noraml fs_xsm  color_lightestgrey ms-2 mb-0">
                    28,Aug 2020, 09:48:00
                  </p>
                </div>
              </div>
              <div className=" text-center">
                {" "}
                <button className="  ff_nunito fw-bold fs_xl color_white letter_spacing_05 common_btn_modify_2 mt-2 mb-4 ms-0">
                  Read More
                </button>
              </div>
            </div>
          </Col>{" "}
          <Col
            data-aos="flip-left"
            data-aos-duration="3000"
            sm={10}
            md={6}
            lg={4}
            className=" m-auto mt-4 mt-lg-0"
          >
            <div className=" blogs_boxes  mx-xl-4">
              <img className="w-100 mt-1" src={sec_7_img_2} alt="sec_7_img_2" />
              <div className="px-3">
                {" "}
                <h4 className=" ff_nunito fw-bold  color_black fs_xxl">
                  Lorem Ipsum is{" "}
                </h4>
                <p className=" ff_lora fw-noraml fs_lg color_black letter_spacing_02">
                  Lorem Ipsum is simply text of the printing and type setting
                  industry. make a type specimen.{" "}
                </p>
              </div>
              <div className="d-flex justify-content-between mx-2 mb-3 pt-3 mt-2 border_top">
                <div className="d-flex align-items-center">
                  <img src={mini_img_2} alt="mini_img_2" />
                  <p className=" ms-1 mb-1">Alex Liones</p>
                </div>
                <div className="d-flex align-items-center">
                  <img className="" src={watch} alt="watch" />
                  <p className=" ff_nunito fw-noraml fs_xsm  color_lightestgrey ms-2 mb-0">
                    28,Aug 2020, 09:48:00
                  </p>
                </div>
              </div>
              <div className=" text-center">
                {" "}
                <button className="  ff_nunito fw-bold fs_xl color_white letter_spacing_05 common_btn_modify_2 mt-2 mb-4 ms-0">
                  Read More
                </button>
              </div>
            </div>
          </Col>{" "}
          <Col
            data-aos="fade-left"
            data-aos-duration="3000"
            sm={10}
            md={6}
            lg={4}
            className=" m-auto mt-4 mt-lg-0"
          >
            <div className=" blogs_boxes  mx-xl-4">
              <img className="w-100 mt-1" src={sec_7_img_3} alt="sec_7_img_3" />
              <div className="px-3">
                {" "}
                <h4 className=" ff_nunito fw-bold  color_black fs_xxl">
                  Lorem Ipsum is{" "}
                </h4>
                <p className=" ff_lora fw-noraml fs_lg color_black letter_spacing_02">
                  Lorem Ipsum is simply text of the printing and type setting
                  industry. make a type specimen.{" "}
                </p>
              </div>
              <div className="d-flex justify-content-between mx-2 mb-3 pt-3 mt-2 border_top">
                <div className="d-flex align-items-center">
                  <img src={mini_img_3} alt="mini_img_3" />
                  <p className=" ms-1 mb-1">Alex Liones</p>
                </div>
                <div className="d-flex align-items-center">
                  <img className="" src={watch} alt="watch" />
                  <p className=" ff_nunito fw-noraml fs_xsm  color_lightestgrey ms-2 mb-0">
                    28,Aug 2020, 09:48:00
                  </p>
                </div>
              </div>
              <div className=" text-center">
                {" "}
                <button className="  ff_nunito fw-bold fs_xl color_white letter_spacing_05 common_btn_modify_2 mt-2 mb-4 ms-0">
                  Read More
                </button>
              </div>
            </div>
          </Col>
        </Row>
        <div className="text-center">
          {" "}
          <button className="common_btn_modify mt-lg-4 mt-4  letter_spacing_05  ff_nunito fw-bold color_white fs_xl mb-5 ">
            View More
          </button>
        </div>
      </Container>
    </section>
  );
};

export default OurBlogs;
