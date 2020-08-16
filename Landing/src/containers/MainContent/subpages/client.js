import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

import img1 from "../../../images/user/img-1.jpg";
import img2 from "../../../images/user/img-2.jpg";
import img3 from "../../../images/user/img-3.jpg";

class client extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      direction: null,
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      // direction: e.direction,
    });
  }

  render() {
    const { index, direction } = this.state;

    return (
      <React.Fragment>
        <section className="section bg-light" id="clients">
          <div className="container">
            <Row>
              <Col lg="12">
                <div className="title-box text-center">
                  <h3 className="title-heading">Our Client</h3>
                  <p className="title-desc text-muted mt-3">
                    It is a long established fact that a reader will be of a
                    page when established fact looking at its layout.
                  </p>
                </div>
              </Col>
            </Row>

            <div className="row justify-content-center mt-5">
              <Col lg="8">
                <Carousel
                  activeIndex={index}
                  direction={direction}
                  onSelect={this.handleSelect}
                >
                  <Carousel.Item>
                    <div className="text-center mt-4">
                      <div className="client-img">
                        <img
                          src={img1}
                          alt=""
                          className="img-fluid rounded-circle"
                        />
                      </div>
                      <p className="text-muted client-txt mt-4">
                        The European languages are members of the same family
                        Their separate existence is a myth For science music,
                        sport, etc, europe their pronunciation and their most
                        European languages common book is a treatise on the
                        theory book is the theory of popular words.
                      </p>
                      <div className="client-info mt-4">
                        <h6 className="client-user-name">James Sizemore</h6>
                        <p>
                          Job position
                          <Link to="" className="client-position text-custom">
                            &nbsp;Web Development
                          </Link>
                        </p>
                      </div>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div className="text-center mt-4">
                      <div className="client-img">
                        <img
                          src={img2}
                          alt=""
                          className="img-fluid rounded-circle"
                        />
                      </div>
                      <p className="text-muted client-txt mt-4">
                        The European languages are members of the same family
                        Their separate existence is a myth For science music,
                        sport, etc, europe their pronunciation and their most
                        European languages common book is a treatise on the
                        theory book is the theory of popular words.
                      </p>
                      <div className="client-info mt-4">
                        <h6 className="client-user-name">Thomas Rudnick</h6>
                        <p>
                          Job position
                          <Link to="" className="client-position text-custom">
                            &nbsp;Creative Design
                          </Link>
                        </p>
                      </div>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div className="text-center mt-4">
                      <div className="client-img">
                        <img
                          src={img3}
                          alt=""
                          className="img-fluid rounded-circle"
                        />
                      </div>
                      <p className="text-muted client-txt mt-4">
                        The European languages are members of the same family
                        Their separate existence is a myth For science music,
                        sport, etc, europe their pronunciation and their most
                        European languages common book is a treatise on the
                        theory book is the theory of popular words.
                      </p>
                      <div className="client-info mt-4">
                        <h6 className="client-user-name">Naomi Smith</h6>
                        <p>
                          Job position
                          <Link to="" className="client-position text-custom">
                            &nbsp;Marketing Services
                          </Link>
                        </p>
                      </div>
                    </div>
                  </Carousel.Item>
                </Carousel>
              </Col>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default client;
