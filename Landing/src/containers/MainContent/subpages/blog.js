import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import img1 from '../../../images/blog/img-1.jpg';
import img2 from '../../../images/blog/img-2.jpg';
import img3 from '../../../images/blog/img-3.jpg';

class blog extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <React.Fragment>
                <section className="section bg-white">
                    <div className="container">
                        <Row>
                            <Col lg="12">
                                <div className="title-box text-center">
                                    <h3 className="title-heading">Latest News</h3>
                                    <p className="title-desc text-muted mt-3">Condimentum auctor ante sed interdum proin viverra sed lectus et iaculis maecenas tortor lorem bibendum pretium.</p>
                                </div>
                            </Col>
                        </Row>
                        <div className="row mt-5 pt-3">
                            <Col lg="4">
                                <div className="blog-box mt-4">
                                    <div className="blog-img">
                                        <img src={img1} className="img-fluid rounded" alt="" />
                                    </div>
                                    <div className="blog-content mt-3">
                                        <h5 className="blog-title f-17"><Link to="">Pelesque sodales diam facilisis dolor.</Link></h5>
                                        <div className="mt-3">
                                            <p className="text-muted"><i className="mdi mdi-account pr-1"></i> Patrick Newton <span className="pl-4"><i className="mdi mdi-calendar-today pr-1"></i></span> 08-07-2018</p>

                                            <div className="mt-3">
                                                <Link to="" className="read-more">Read More <i className="mdi mdi-chevron-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4">
                                <div className="blog-box mt-4">
                                    <div className="blog-img">
                                        <img src={img2} className="img-fluid rounded" alt="" />
                                    </div>
                                    <div className="blog-content mt-3">
                                        <h5 className="blog-title f-17"><Link to="">Molestie lacus lobortis bibendum amet.</Link></h5>
                                        <div className="mt-3">
                                            <p className="text-muted"><i className="mdi mdi-account pr-1"></i> Patrick Newton <span className="pl-4"><i className="mdi mdi-calendar-today pr-1"></i></span> 12-05-2018</p>

                                            <div className="mt-3">
                                                <Link to="" className="read-more">Read More <i className="mdi mdi-chevron-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4">
                                <div className="blog-box mt-4">
                                    <div className="blog-img">
                                        <img src={img3} className="img-fluid rounded" alt="" />
                                    </div>
                                    <div className="blog-content mt-3">
                                        <h5 className="blog-title f-17"><Link to="">Convallis praesent dignissim dolor.</Link></h5>
                                        <div className="mt-3">
                                            <p className="text-muted"><i className="mdi mdi-account pr-1"></i> Patrick Newton <span className="pl-3"><i className="mdi mdi-calendar-today pr-1"></i></span> 29-09-2018</p>
                                            <div className="mt-3">
                                                <Link to="" className="read-more">Read More <i className="mdi mdi-chevron-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default blog;   
