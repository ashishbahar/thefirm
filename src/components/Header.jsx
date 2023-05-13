import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import header_img from "../assets/images/png/header_img.png";
import c from "../assets/images/png/c.png";
const Header = () => {
  return (
    <header className="bg_img">
      <Container className=" custom_container2 pb-lg-5  rounded-5  ">
        <Row className=" position-relative  pb-xxl-0 pb-4 flex-column-reverse flex-lg-row">
          <Col
            data-aos="flip-left"
            lg={6}
            className="ps-xxl-5 ms-xxl-5 py-lg-5 position-relative z_index_2  "
          >
            {" "}
            <div className="py-xxl-5 my-xxl-5">
              <h1 className=" fs_5xl   ff_nunito letter_spacing_02  color_black h1_text_shadow">
                Get Bussiness{" "}
                <span className=" d-xl-block  ">
                  Solutions with <span className=" fs_6xl">TheFirm.</span>
                </span>
              </h1>
              <p className="header_pera_width mt-sm-3 mt-2 letter_spacing_02 ff_lora fw-normal fs_xl color_black ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy.
              </p>{" "}
              <button className="common_btn_modify mt-lg-4 mt-2 letter_spacing_05  ff_nunito fw-bold color_white fs_xl ">
                Get in Touch
              </button>
            </div>
          </Col>
          <Col
            data-aos="flip-right"
            xl={7}
            lg={6}
            md={10}
            className=" py-lg-5 pt-4 pb-sm-4 py-xl-0 p-0 position_xl_absolute  end-0 z_index_1  "
          >
            <div className="position-relative">
              {" "}
              <img
                className="w-100 rounded-5 p-2 p-sm-0"
                src={header_img}
                alt="header_img"
              />
              <img
                className=" position-absolute c_poisiton d-none d-xl-block"
                src={c}
                alt="c"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
