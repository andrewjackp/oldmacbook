import React, { Component } from "react";
import { Row, Col } from "reactstrap";

import client1 from "../../../images/clients/1.png";
import client2 from "../../../images/clients/2.png";
import client3 from "../../../images/clients/3.png";
import client4 from "../../../images/clients/4.png";

class clientLogo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <section
          className="pt-5 pb-5 client-logo"
          style={{ position: "relative" }}
        >
          <div className="container">
            <Row>
              <Col lg="3" md="3">
                <div className="client-images">
                  <img
                    src={client1}
                    alt="logo-img"
                    className="mx-auto img-fluid d-block"
                  />
                </div>
              </Col>

              <Col lg="3" md="3">
                <div className="client-images">
                  <img
                    src={client2}
                    alt="logo-img"
                    className="mx-auto img-fluid d-block"
                  />
                </div>
              </Col>

              <div className="col-lg-3 col-md-3 ">
                <div className="client-images">
                  <img
                    src={client3}
                    alt="logo-img"
                    className="mx-auto img-fluid d-block"
                  />
                </div>
              </div>

              <Col lg="3" md="3">
                <div className="client-images">
                  <img
                    src={client4}
                    alt="logo-img"
                    className="mx-auto img-fluid d-block"
                  />
                </div>
              </Col>
            </Row>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default clientLogo;
