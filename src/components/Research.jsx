import slider_1 from "../assets/images/png/slider_1.png";
import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import rightrrow from "../assets/images/png/rightarrow.png";
import leftarrow from "../assets/images/png/left.png";
import circle_3 from "../assets/images/png/circle_3.png";
export default class PreviousNextMethods extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <section>
          <Container className=" custom_container pt-xl-5">
            <h2
              data-aos="zoom-in"
              className=" text-center pt-sm-5 pt-4 ff_nunito fw_900
              letter_spacing_02 fs_4xl color_black "
            >
              {" "}
              Our Research & Case <span className="common_line">Studies</span>
            </h2>
            <p
              data-aos="zoom-in"
              className="sec_5_pera_width text-center m-auto mb-0 ff_lora mt-3 fw-normal fs_xl color_black letter_spacing_02"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries,
            </p>
            <Row className=" justify-content-between mt-lg-5 align-items-center pb-lg-5 mb-xl-5 flex-lg-row flex-column-reverse ">
              <Col data-aos="zoom-in-right"
                
                lg={5}>
                <div>
                  <h3 className=" ff_nunito fw-bold  fs_3xl color_black letter_spacing_05">
                    Lorem Ipsum is simply
                  </h3>
                  <p className=" ff_lora fw-normal color_black letter_spacing_02 fs_xl mt-3">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type Lorem Ipsum is simply dummy
                    text of the printing and typesetting industry. Lorem Ipsum
                    has been the industry's standard dummy text ever since the
                    1500s, when an unknown printer took.
                  </p>
                  <button className="common_btn_modify mb-5 mt-lg-4 mt-2 letter_spacing_05  ff_nunito fw-bold color_white fs_xl ">
                    Read More
                  </button>
                </div>
              </Col>
              <Col data-aos="zoom-in-left" lg={6}>
                <div className=" position-relative">
                    <img className=" position-absolute bottom-0 start-0" src={circle_3} alt="circle" />
                  <Slider
                    ref={(c) => (this.slider = c)}
                    {...settings}
                    className="research_section"
                  >
                    <div key={1}>
                      <img src={slider_1} alt="slider_1" className="w-100" />
                    </div>
                    <div key={2}>
                      <img src={slider_1} alt="slider_1" className="w-100" />
                    </div>
                    <div key={3}>
                      <img src={slider_1} alt="slider_1" className="w-100" />
                    </div>
                    <div key={4}>
                      <img src={slider_1} alt="slider_1" className="w-100" />
                    </div>
                    <div key={5}>
                      <img src={slider_1} alt="slider_1" className="w-100" />
                    </div>
                    <div key={6}>
                      <img src={slider_1} alt="slider_1" className="w-100" />
                    </div>
                  </Slider>
                  <div
                    className=" position-absolute aroows_posiiton"
                    style={{ textAlign: "center" }}
                  >
                    <div className="white_box_border ">
                      <div className="d-flex align-items-center pt-1">
                        <div
                          className="left_yellow bg_light_yellow  c_pointer"
                          onClick={this.previous}
                        >
                          <button className="pt-1 bg-transparent border-0 ">
                            <img src={leftarrow} alt="leftarrow" />
                          </button>
                        </div>
                        <div
                          className=" right_yellow bg_light_yellow c_pointer"
                          onClick={this.next}
                        >
                          <button className=" border-0 bg-transparent pt-1">
                            <img src={rightrrow} alt="rightrrow" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    );
  }
}
