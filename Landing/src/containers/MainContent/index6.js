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

import ReactTextRotator from 'react-text-rotator';
  
const content = [
    {
      text: 'We love make things amazing and simple',
      className: 'classA',
      animation: 'fade',
    },
    {
      text: 'Create amazing landing page with Zehen',
      className: 'classB',
      animation: 'fade',
    },
    {
      text: 'Perfact solution for small businesses',
      className: 'classC',
      animation: 'fade',
    }
  ];


class index6 extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {


        return (
            <React.Fragment>
                <section className="bg-home-6" id="home">
                    <div className="bg-overlay"></div>
                    <div className="home-center">
                        <div className="home-desc-center">
                            <div className="container">
                                <Row className="justify-content-center">
                                    <Col lg="10">
                                        <div className="home-content text-center">
                                            <h3 className="home-title-6 text-rotate line-height_1_4">
                                              <ReactTextRotator
                                                content={content}
                                                time={5000}
                                                startDelay={800}
                                                />
                                            </h3>
                                            <p className="home-desc line-height_1_8 mt-4 f-16 text-white-50">Feugiat ullamcorper facilisis phasellus malesuada massa et accumsan porttitor.</p>
                                            <div className="home-button mt-4">
                                                <Link to="/index-6" className="btn btn-outline btn-round mt-3">How It work</Link>&nbsp;
                                                <span className="mr-3 ml-3 text-white">or</span>
                                                &nbsp;<Link to="/index-6" className="btn btn-custom btn-round mt-3">Get Started <i className="mdi mdi-arrow-right pl-1"></i>
                                                </Link>
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

export default index6;   
