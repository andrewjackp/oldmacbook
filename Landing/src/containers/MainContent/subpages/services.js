import React, { Component } from "react";
import { Row, Col } from "reactstrap";

class services extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <section className="section bg-white" id="services">
          <div className="container">
            <Row>
              <Col lg="12">
                <div className="title-box text-center">
                  <h3 className="title-heading">Key features of the product</h3>
                  <p className="title-desc text-muted mt-3">
                    Condimentum auctor ante sed interdum proin viverra sed
                    lectus et iaculis maecenas tortor lorem bibendum pretium.
                  </p>
                </div>
              </Col>
            </Row>

            <Row className="mt-5">
              <Col lg="4">
                <div className="services-box text-center mt-4">
                  <div className="services-icon">
                    <i className="mdi mdi-desktop-mac-dashboard text-custom"></i>
                  </div>
                  <h5 className="mt-3">Web design</h5>
                  <p className="text-muted mt-3 mb-0">
                    Donec erat eget ante efficitur eleifend dolor scelerisque
                    erat magna justo carsras condimentum mauada.
                  </p>
                </div>
              </Col>

              <Col lg="4">
                <div className="services-box text-center mt-4">
                  <div className="services-icon">
                    <i className="mdi mdi-web text-custom"></i>
                  </div>
                  <h5 className="mt-3">Production</h5>
                  <p className="text-muted mt-3 mb-0">
                    Maecenas viverra ornare sed maximus libero maximus on
                    faucibus elit efficitur purus sollicitudin libero.
                  </p>
                </div>
              </Col>

              <Col lg="4">
                <div className="services-box text-center mt-4">
                  <div className="services-icon">
                    <i className="mdi mdi-responsive text-custom"></i>
                  </div>
                  <h5 className="mt-3">Responsive design</h5>
                  <p className="text-muted mt-3 mb-0">
                    Suspendisse nirtbh finibus efficitur viverra masuada massa
                    mauris suscipit purus pellentesque pharetra.
                  </p>
                </div>
              </Col>
            </Row>

            <Row className="mt-4">
              <Col lg="4">
                <div className="services-box text-center mt-4">
                  <div className="services-icon">
                    <i className="mdi mdi-cellphone-android text-custom"></i>
                  </div>
                  <h5 className="mt-3">Mobile app</h5>
                  <p className="text-muted mt-3 mb-0">
                    Quisque iaculis magna the dolor sollicitudin efficitur eget
                    nirak the lectus praesent consectetur lacinia.
                  </p>
                </div>
              </Col>

              <Col lg="4">
                <div className="services-box text-center mt-4">
                  <div className="services-icon">
                    <i className="mdi mdi-code-tags text-custom"></i>
                  </div>
                  <h5 className="mt-3">Coding</h5>
                  <p className="text-muted mt-3 mb-0">
                    Vivamus dolor hendrerit tempor elementum Interdum et fames
                    ac ante ipsum primis malesuada in faucibus.
                  </p>
                </div>
              </Col>

              <Col lg="4">
                <div className="services-box text-center mt-4">
                  <div className="services-icon">
                    <i className="mdi mdi-lifebuoy text-custom"></i>
                  </div>
                  <h5 className="mt-3">Support</h5>
                  <p className="text-muted mt-3 mb-0">
                    Suspendisse nunc lacus tincidunt telealus pelesques
                    facilisis cursus mollis tidunt condimentum montes.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default services;
