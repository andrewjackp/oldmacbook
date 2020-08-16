import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import ClientLogo from "./subpages/client-logo";
import Feature from "./subpages/feature";
import Services from "./subpages/services";
import Counter from "./subpages/counter";
import Client from "./subpages/client";
import Pricing from "./subpages/pricing";
import Cta from "./subpages/cta";
import Blog from "./subpages/blog";
import Contact from "./subpages/contact";
import Home from "./subpages/HomePage";
import LogIn from "./subpages/Login";
import Register from "./subpages/Register";

import homeImg from "../../images/home-img.png";

class index1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <section className="bg-home" id="home">
          <div className="bg-overlay"></div>
          <div className="home-center">
            <div className="home-desc-center">
              <div className="container">
                <Row className="justify-content-center">
                  <Col lg="10">
                    <div className="home-content text-center">
                      <h3 className="home-title line-height_1_4 mt-5 pt-5">
                        We love making things amazing and simple
                      </h3>
                      <p className="home-desc line-height_1_8 mt-4 f-16 text-white-50">
                        Feugiat ullamcorper facilisis phasellus malesuada massa
                        et accumsan porttitor.
                      </p>
                      <div className="home-button mt-4">
                        <Link
                          to="/index-1"
                          className="btn btn-outline btn-round mt-3"
                        >
                          How It work
                        </Link>
                        &nbsp;
                        <span className="mr-3 ml-3 text-white">or</span>
                        &nbsp;
                        <Link
                          to="/index-1"
                          className="btn btn-custom btn-round mt-3"
                        >
                          Get Started{" "}
                          <i className="mdi mdi-arrow-right pl-1"></i>
                        </Link>
                      </div>
                      <div className="home-img mt-5">
                        <img src={homeImg} className="img-fluid" alt="" />
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </section>

        <Home />
        <Register />
        <LogIn />
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

export default index1;
