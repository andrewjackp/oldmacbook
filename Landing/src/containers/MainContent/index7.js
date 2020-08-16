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

import Carousel from 'react-bootstrap/Carousel';

class index7 extends Component {

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
            direction: e.direction,
        });
    }


    render() {
        const { index, direction } = this.state;

        return (
            <React.Fragment>

                <section className="bg-home-7" id="home">
                    <div className="bg-overlay"></div>
                    <div className="home-center">
                        <div className="home-desc-center">
                            <div className="container">
                                <Row className="justify-content-center">
                                    <Col lg="10">
                                        <div className="home-content text-center">
                                            <ul className="slides"  style={{  margin: "0", padding: "0",listStyle: "none" }}>
                                               
                                                <Carousel
                                                   fade = {true}
                                                    activeIndex={index}
                                                    direction={direction}
                                                    onSelect={this.handleSelect}>
                                                    <Carousel.Item>
                                                        <li>
                                                            <h3 className="home-title line-height_1_4">We love make things amazing and simple</h3>
                                                            <p className="home-desc line-height_1_8 mt-4 f-16 text-white-50">Feugiat ullamcorper facilisis phasellus malesuada massa et accumsan porttitor.</p>
                                                            <div className="home-button mt-4">
                                                <Link to="" className="btn btn-outline btn-round mt-3">How It work</Link>&nbsp;
                                                <span className="mr-3 ml-3 text-white">or</span>
                                                &nbsp;<Link to="" className="btn btn-custom btn-round mt-3">Get Started <i className="mdi mdi-arrow-right pl-1"></i>
                                                </Link>
                                            </div>
                                                        </li>
                                                    </Carousel.Item>

                                                    <Carousel.Item>
                                                        <li>
                                                            <h3 className="home-title line-height_1_4">Create amazing landing page with Zehen</h3>
                                                            <p className="home-desc line-height_1_8 mt-4 f-16 text-white-50">Feugiat ullamcorper facilisis phasellus malesuada massa et accumsan porttitor.</p>
                                                            <div className="home-button mt-4">
                                                <Link to="" className="btn btn-outline btn-round mt-3">How It work</Link>&nbsp;
                                                <span className="mr-3 ml-3 text-white">or</span>
                                                &nbsp;<Link to="" className="btn btn-custom btn-round mt-3">Get Started <i className="mdi mdi-arrow-right pl-1"></i>
                                                </Link>
                                            </div>
                                                        </li>
                                                    </Carousel.Item>
                                                    <Carousel.Item>
                                                        <li>
                                                            <h3 className="home-title line-height_1_4">Perfact solution for small businesses</h3>
                                                            <p className="home-desc line-height_1_8 mt-4 f-16 text-white-50">Feugiat ullamcorper facilisis phasellus malesuada massa et accumsan porttitor.</p>
                                                            <div className="home-button mt-4">
                                                <Link to="/index-7" className="btn btn-outline btn-round mt-3">How It work</Link>&nbsp;
                                                <span className="mr-3 ml-3 text-white">or</span>
                                                &nbsp;<Link to="/index-7" className="btn btn-custom btn-round mt-3">Get Started <i className="mdi mdi-arrow-right pl-1"></i>
                                                </Link>
                                            </div>
                                                        </li>
                                                    </Carousel.Item>

                                                </Carousel>
                                            </ul>
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

            </React.Fragment >
        );
    }
}

export default index7;   
