import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import ClientLogo from "./subpages/client-logo";
import Feature from "./subpages/feature";
import Services from "./subpages/services";
import Counter from "./subpages/counter";
import Client from "./subpages/client";
import Pricing from "./subpages/pricing";
import Cta from "./subpages/cta";
import Blog from "./subpages/blog";
import Contact from "./subpages/contact";

class index5 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <section className="bg-home-5" id="home">
          <div className="bg-overlay"></div>
          <div className="home-center">
            <div className="home-desc-center">
              <div className="container">
                <Row className="justify-content-center">
                  <Col lg="10">
                    <div className="home-content text-center">
                      <h3 className="home-title line-height_1_4">
                        We love making things amazing and simple
                      </h3>
                      <p className="home-desc line-height_1_8 mt-4 f-16 text-white-50">
                        Feugiat ullamcorper facilisis phasellus malesuada massa
                        et accumsan porttitor.
                      </p>

                      <div className="subscribe mt-5">
                        <form action="/index-5">
                          <input placeholder="Email" type="text" />
                          <button type="submit" className="btn btn-custom">
                            subscribe
                          </button>
                        </form>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </section>

        <ClientLogo />
        <Feature />
        <Services />
        <Counter />
        <Client />
        <Pricing />
        <Cta />
        <Blog />
        <Contact />
      </React.Fragment>
    );
  }
}

export default index5;
