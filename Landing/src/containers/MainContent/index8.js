import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import ClientLogo from './subpages/client-logo';
import Feature from './subpages/feature';
import Services from './subpages/services';
import Counter from './subpages/counter';
import Client from './subpages/client';
import Pricing from './subpages/pricing';
import Cta from './subpages/cta';
import Blog from './subpages/blog';
import Contact from './subpages/contact';

class index8 extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <React.Fragment>
                  
                <section className="bg-home-8" id="home">
           
                    <div className="bg-overlay"></div>
                    <div className="home-center">
                        <div className="home-desc-center">
                            <div className="container">
                                <Row className="vertical-content">
                                    <Col lg="7">
                                        <div className="home-content">
                                            <h3 className="home-title-9 line-height_1_4">We Are Marketing & Innovation</h3>
                                            <p className="home-desc line-height_1_8 mt-4 f-16 text-white-50">Randomised words which don't look even slightly believable If you are going to use a passage of Lorem Ipsum
                                         you need to be sure there isnt anything embarrassing hidden in the middle of text.</p>
                                         <div className="home-button mt-4">
                                                <Link to="/index-8" className="btn btn-outline btn-round mt-3 mr-2 mr-lg-0">How It work</Link>&nbsp;
                                                <span className="mr-3 ml-3 text-white">or</span>
                                                &nbsp;<Link to="/index-8" className="btn btn-custom btn-round mt-3">Get Started <i className="mdi mdi-arrow-right pl-1"></i>
                                                </Link>
                                            </div>

                                        </div>
                                    </Col>

                                    <Col lg="5" className="mt-5 mt-lg-0">
                                        <div className="home-registration-form bg-white mx-auto w-75 p-4">
                                            <h5 className="form-title mb-4 text-center">Get 30 days FREE Trial</h5>
                                            <form className="registration-form">
                                                <label className="text-muted">First Name</label>
                                                <input type="text" id="exampleInputName1" className="form-control mb-2 registration-input-box" />
                                                <label className="text-muted">Email</label>
                                                <input type="email" id="exampleInputEmail1" className="form-control mb-2 registration-input-box" />
                                                <label className="text-muted">Password</label>
                                                <input type="password" id="password1" className="form-control mb-2 registration-input-box" />
                                                <button className="btn btn-custom w-100 mt-3 text-uppercase">Get Started</button>
                                            </form>
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

export default index8;   
