import React, { Component } from "react";
import { Row, Col, Button } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";

class contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <section className="section bg-light" id="contact">
          <div className="container">
            <Row>
              <Col lg="12">
                <div className="title-box text-center">
                  <h3 className="title-heading">Get In Touch</h3>
                  <p className="title-desc text-muted mt-3">
                    Condimentum auctor ante sed interdum proin viverra sed
                    lectus et iaculis maecenas tortor lorem bibendum pretium.
                  </p>
                </div>
              </Col>
            </Row>

            <div className="row mt-5">
              <Col lg="12">
                <div className="custom-form mt-4">
                  <div id="message"></div>
                  <AvForm id="contact-form">
                    <Row>
                      <Col lg="4">
                        <div className="form-group">
                          <AvField
                            name="name"
                            label="Name"
                            placeholder="Your name..."
                            type="text"
                            errorMessage="Enter Name"
                            validate={{ required: { value: true } }}
                          />
                        </div>
                      </Col>
                      <Col lg="4">
                        <div className="form-group">
                          <AvField
                            name="name"
                            label="Email address"
                            placeholder="Your email..."
                            type="text"
                            errorMessage="Enter Valid Email"
                            validate={{
                              required: { value: true },
                              email: { value: true },
                            }}
                          />
                        </div>
                      </Col>
                      <Col lg="4">
                        <div className="form-group">
                          <AvField
                            name="name"
                            label="Subject"
                            placeholder="Your Subject.."
                            type="text"
                            errorMessage="Enter Subject"
                            validate={{ required: { value: true } }}
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row className="mt-3">
                      <Col lg="12">
                        <div className="form-group">
                          <label htmlFor="comments">Message</label>
                          <textarea
                            name="comments"
                            id="comments"
                            rows="4"
                            className="form-control"
                            placeholder="Your message..."
                          ></textarea>
                        </div>
                      </Col>
                    </Row>
                    <Row className="mt-3">
                      <Col lg="12">
                        <Button className="submitBnt btn btn-custom btn-round">
                          Send Message
                        </Button>{" "}
                        &nbsp;
                      </Col>
                    </Row>
                  </AvForm>
                </div>
              </Col>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default contact;
