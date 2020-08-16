import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

class cta extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <React.Fragment>
                <section className="section bg-cta">
                    <div className="container">
                        <Row className="justify-content-center">
                            <Col lg="6">
                                <div className="cta-box text-center">
                                    <h3 className="cta-title text-white">Get started Today!</h3>
                                    <p className="cta-desc text-white-50 mt-4 f-17">Aenean blandit metus erat at semper libero venenatis eu donec mattis ex convSelected projectis dolor tempus.</p>
                                    <div className="mt-5">
                                        <Link to="" className="btn btn-custom btn-rounded">Request Free Demo <i className="mdi mdi-chevron-right"></i></Link>
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

export default cta;   
