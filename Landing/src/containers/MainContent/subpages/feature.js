import React, { Component } from "react";
import { Row, Col, Card, CardBody, Collapse } from "reactstrap";
import { Link } from "react-router-dom";
import img1 from "../../../images/features/img-1.png";

class feature extends Component {
  constructor(props) {
    super(props);

    this.state = {
      col1: true,
      col2: false,
      col3: false,
      col5: false,
    };

    this.t_col1 = this.t_col1.bind(this);
    this.t_col2 = this.t_col2.bind(this);
    this.t_col3 = this.t_col3.bind(this);
    this.t_col5 = this.t_col5.bind(this);
  }

  t_col1() {
    this.setState({
      col1: !this.state.col1,
      col2: false,
      col3: false,
      col5: false,
    });
  }
  t_col2() {
    this.setState({
      col2: !this.state.col2,
      col1: false,
      col3: false,
      col5: false,
    });
  }
  t_col3() {
    this.setState({ col3: !this.state.col3, col2: false, col5: false });
  }
  t_col5() {
    this.setState({
      col5: !this.state.col5,
      col2: false,
      col3: false,
      col1: false,
    });
  }

  render() {
    return (
      <React.Fragment>
        <section className="section bg-light">
          <div className="container">
            <Row className="vertical-content">
              <Col lg="6">
                <div className="features-img text-center mt-4">
                  <img src={img1} className="img-fluid" alt="" />
                </div>
              </Col>

              <Col lg="5" className="offset-lg-1">
                <div className="features-box">
                  <div className="accordion mt-4" id="accordionExample">
                    <Card className="mt-3 p-1 btn-round">
                      <Link to="#" className="collapsed" onClick={this.t_col1}>
                        <div className="card-header" id="headingone">
                          <h5 className="mb-0">Where can I get some?</h5>
                        </div>
                      </Link>
                      <Collapse isOpen={this.state.col1}>
                        <div className="card-body pt-0 mt-2">
                          <p className="mb-0 text-muted">
                            Vulputate lobortis tincidunt porttitor massa morbi
                            suscipit mollis luctus ornare vulputate.
                          </p>
                          <div className="mt-3">
                            <Link to="#" className="read-more">
                              Read More{" "}
                              <i className="mdi mdi-chevron-right"></i>
                            </Link>
                          </div>
                        </div>
                      </Collapse>
                    </Card>
                    <Card className="mt-3 p-1 btn-round">
                      <Link to="#" onClick={this.t_col2}>
                        <div className="card-header" id="headingtwo">
                          <h5 className="mb-0">Where does it come from?</h5>
                        </div>
                      </Link>
                      <Collapse isOpen={this.state.col2}>
                        <CardBody>
                          <p className="mb-0 text-muted">
                            Quisque tincidunt the malesuada aliquet ullamcorper
                            Suspendisse lectus congue vitae pulvinar.
                          </p>
                          <div className="mt-3">
                            <Link to="" className="read-more">
                              Read More{" "}
                              <i className="mdi mdi-chevron-right"></i>
                            </Link>
                          </div>
                        </CardBody>
                      </Collapse>
                    </Card>
                    <Card className="mt-3 p-1 btn-round">
                      <Link to="#" onClick={this.t_col3}>
                        <div className="card-header" id="headingthree">
                          <h5 className="mb-0">What is Lorem Ipsum?</h5>
                        </div>
                      </Link>

                      <Collapse isOpen={this.state.col3}>
                        <CardBody>
                          <p className="mb-0 text-muted">
                            Pellentesque tincidunt imperdiet metus interdum
                            ligula tristique aenean facilisis congue ictumst.
                          </p>
                          <div className="mt-3">
                            <Link to="" className="read-more">
                              Read More{" "}
                              <i className="mdi mdi-chevron-right"></i>
                            </Link>
                          </div>
                        </CardBody>
                      </Collapse>
                    </Card>
                    <Card className="mt-3 p-1 btn-round">
                      <Link to="#" onClick={this.t_col5}>
                        <div className="card-header" id="headingfour">
                          <h5 className="mb-0">Why do we use it?</h5>
                        </div>
                      </Link>
                      <Collapse isOpen={this.state.col5}>
                        <CardBody>
                          <p className="mb-0 text-muted">
                            Vestibulum sodales turpis vestibulum praesent
                            consectetur magna tortor interdum.{" "}
                          </p>
                          <div className="mt-3">
                            <Link to="" className="read-more">
                              Read More{" "}
                              <i className="mdi mdi-chevron-right"></i>
                            </Link>
                          </div>
                        </CardBody>
                      </Collapse>
                    </Card>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default feature;
