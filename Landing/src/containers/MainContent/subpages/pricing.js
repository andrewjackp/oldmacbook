import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

class pricing extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <React.Fragment>
                <section className="section bg-white" id="pricing">
                    <div className="container">

                        <Row>
                            <Col lg="12">
                                <div className="title-box text-center">
                                    <h3 className="title-heading">Pricing Plan</h3>
                                    <p className="title-desc text-muted mt-3">Condimentum auctor ante sed interdum proin viverra sed lectus et iaculis maecenas tortor lorem bibendum pretium.</p>
                                </div>
                            </Col>
                        </Row>

                        <Row className="mt-5">
                            <Col lg="4">
                                <div className="price-box mt-4">
                                    <div className="pricing-name text-center">
                                        <h4>Deluxe</h4>
                                        <span className="text-muted">Perfect For Freelancer</span>
                                    </div>

                                    <div className="plan-price text-center mt-4">
                                        <h2 className="text-custom"><span className="dolar">$</span> 59 <span>Per/month</span></h2>
                                    </div>

                                    <div className="price-features mt-5 ml-4">
                                        <p><i className="mdi mdi-check"></i> Bandwidth: <span className="font-weight-bold">1GB</span></p>
                                        <p><i className="mdi mdi-check"></i> Onlinespace: <span className="font-weight-bold">500MB</span></p>
                                        <p><i className="mdi mdi-close"></i> Support: <span className="font-weight-bold">No</span></p>
                                        <p><i className="mdi mdi-check"></i> Domain: <span className="font-weight-bold">1</span></p>
                                        <p><i className="mdi mdi-check"></i> Hidden Fees: <span className="font-weight-bold">No</span></p>
                                    </div>
                                    <div className="text-center mt-5">
                                        <Link to="#" className="btn btn-custom btn-round">Join Now</Link>
                                    </div>
                                </div>
                            </Col>

                            <Col lg="4">
                                <div className="price-box mt-4">
                                    <div className="pricing-name text-center">
                                        <h4>Economy</h4>
                                        <span className="text-muted">Perfect For Freelancer</span>
                                    </div>
                                    <div className="plan-price text-center mt-4">
                                        <h2 className="text-custom"><span className="dolar">$</span> 79 <span>Per/month</span></h2>
                                    </div>
                                    <div className="price-features mt-5 ml-4">
                                        <p><i className="mdi mdi-check"></i> Bandwidth: <span className="font-weight-bold">2GB</span></p>
                                        <p><i className="mdi mdi-check"></i> Onlinespace: <span className="font-weight-bold">1GB</span></p>
                                        <p><i className="mdi mdi-check"></i> Support: <span className="font-weight-bold">Yes</span></p>
                                        <p><i className="mdi mdi-check"></i> Domain: <span className="font-weight-bold">3</span></p>
                                        <p><i className="mdi mdi-check"></i> Hidden Fees: <span className="font-weight-bold">No</span></p>
                                    </div>
                                    <div className="text-center mt-5">
                                        <Link to="#" className="btn btn-custom btn-round">Join Now</Link>
                                    </div>
                                </div>
                            </Col>

                            <Col lg="4">
                                <div className="price-box mt-4">
                                    <div className="pricing-name text-center">
                                        <h4>Ultimate</h4>
                                        <span className="text-muted">Perfect For Freelancer</span>
                                    </div>
                                    <div className="plan-price text-center mt-4">
                                        <h2 className="text-custom"><span className="dolar">$</span> 99 <span>Per/month</span></h2>
                                    </div>
                                    <div className="price-features mt-5 ml-4">
                                        <p><i className="mdi mdi-check"></i> Bandwidth: <span className="font-weight-bold">3GB</span></p>
                                        <p><i className="mdi mdi-check"></i> Onlinespace: <span className="font-weight-bold">2GB</span></p>
                                        <p><i className="mdi mdi-check"></i> Support: <span className="font-weight-bold">Yes</span></p>
                                        <p><i className="mdi mdi-check"></i> Domain: <span className="font-weight-bold">Unlimited</span></p>
                                        <p><i className="mdi mdi-check"></i> Hidden Fees: <span className="font-weight-bold">No</span></p>
                                    </div>
                                    <div className="text-center mt-5">
                                        <Link to="#" className="btn btn-custom btn-round">Join Now</Link>
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

export default pricing;   
