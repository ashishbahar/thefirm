import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const GetTouch = () => {
  return (
    <section className=" sec_9_height ">
      <div className="sec_last_img pt-5">
        <Container className=" custom_container py-5   ">
          <div data-aos="zoom-out-up" className=" sec_9_box m-auto mb-5 mt-5 ">
            <h2 className=" text-center pt-5 ff_nunito fw_900 letter_spacing_02 fs_4xl color_black ">
              Get in <span className="common_line">Touch</span>
            </h2>
            <Row className="p-md-4">
              <Col lg={6} data-aos="zoom-out-right" data-aos-duration="3000">
                <div className=" mx-5 mt-5">
                  <p className="mb-0 ff_nunito fw-normal letter_spacing_02 color_lightgrey fs_md ps-2 ">
                    Name
                  </p>
                  <input
                    className="w-100 input_border_bottom  ff_nunito fw-bold color_black letter_spacing_02 fs_xl"
                    type="text"
                    placeholder="Lorem Ipusum"
                  />
                </div>
              </Col>{" "}
              <Col lg={6} data-aos="zoom-out-left" data-aos-duration="3000">
                <div className=" mx-5 mt-5">
                  <p className="mb-0 ff_nunito fw-normal letter_spacing_02 color_lightgrey fs_md ps-2 ">
                    Email
                  </p>
                  <input
                    className="w-100 input_border_bottom  ff_nunito fw-bold color_black letter_spacing_02 fs_xl"
                    type="text"
                    placeholder="LoremIpusum@mail.com"
                  />
                </div>
              </Col>{" "}
              <Col lg={6} data-aos="zoom-out-right" data-aos-duration="3000">
                <div className=" mx-5 mt-5">
                  <p className="mb-0 ff_nunito fw-normal letter_spacing_02 color_lightgrey fs_md ps-2 ">
                    Phone
                  </p>
                  <input
                    className="w-100 input_border_bottom  ff_nunito fw-bold color_black letter_spacing_02 fs_xl"
                    type="text"
                    placeholder="+0 968 856 1524"
                  />
                </div>
              </Col>{" "}
              <Col lg={6} data-aos="zoom-out-left" data-aos-duration="3000">
                <div className=" mx-5 mt-5">
                  <p className="mb-0 ff_nunito fw-normal letter_spacing_02 color_lightgrey fs_md ps-2 ">
                    Subject
                  </p>

                  <select name="" className=" input_border_bottom" id="">
                    <option value="" disabled selected hidden>
                      Choose your subject
                    </option>
                    <option value="">html</option>
                    <option value="">css</option>
                    <option value="">react js</option>
                  </select>
                </div>
              </Col>
            </Row>
            <div className="text-center pb-lg-4">
              {" "}
              <button className="common_btn_modify my-lg-5 my-3 letter_spacing_05 px-5  ff_nunito fw-bold color_white fs_xl ">
                Submit
              </button>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default GetTouch;
