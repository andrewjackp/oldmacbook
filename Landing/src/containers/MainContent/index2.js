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
import Typing from 'react-typing-animation';

import homeImg from '../../images/home-img.png';

class index2 extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
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
                                            <h3 className="home-title-3 line-height_1_4 mt-5 pt-5">
                                                    <Typing>
                                                        <span className="element">We help startups launch awesome website</span>
                                                        <Typing.Backspace count={42} />
                                                        <span className="element">We are creative</span>
                                                        <Typing.Backspace count={18} />
                                                        <span className="element">   We are modern</span>
                                                    </Typing>
                                            </h3>
                                            <p className="home-desc line-height_1_8 mt-4 f-16 text-white-50">Feugiat ullamcorper facilisis phasellus malesuada massa et accumsan porttitor.</p>
                                            <div className="home-button mt-4">
                                                <Link to="/index-2" className="btn btn-outline btn-round mt-3 mr-2 mr-lg-0">How It work</Link>
                                                <span className="mr-3 ml-3 text-white">or</span>
                                                <Link to="/index-2" className="btn btn-custom btn-round mt-3">Get Started <i className="mdi mdi-arrow-right pl-1"></i></Link>
                                            </div>
                                            <div className="home-img mt-5">
                                                <img src={homeImg } className="img-fluid" alt="" />
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

export default index2;   
