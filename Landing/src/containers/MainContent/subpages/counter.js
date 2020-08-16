import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import CountTo from 'react-count-to';

class counter extends Component {

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
                <Row id="counter">
                    <Col lg="3">
                        <div className="counter-box text-center">
                            <h2 className="counter-count text-white mt-3"> 
                            <CountTo className="counter-value" to={1854} speed={1854} />
                            </h2>
                            <p className="mt-3 text-white-50 mb-0">Projects Finished</p>
                        </div>
                    </Col>

                    <Col lg="3">
                        <div className="counter-box text-center">
                            <h2 className="counter-count text-white mt-3">
                            <CountTo className="counter-value" to={3254} speed={3254} />
                            </h2>
                            <p className="mt-3 text-white-50 mb-0">Line of Coding</p>
                        </div>
                    </Col>

                    <Col lg="3">
                        <div className="counter-box text-center">
                            <h2 className="counter-count text-white mt-3"> 
                            <CountTo className="counter-value" to={584} speed={584} /></h2>
                            <p className="mt-3 text-white-50 mb-0">Award Won</p>
                        </div>
                    </Col>

                    <Col lg="3">
                        <div className="counter-box text-center">
                            <h2 className="counter-count text-white mt-3">
                            <CountTo className="counter-value" to={1713} speed={1713} />
                                 </h2>
                            <p className="mt-3 text-white-50 mb-0">Satisfied Clients</p>
                        </div>
                    </Col>
                </Row>
            </div>

        </section>
            </React.Fragment>
        );
    }
}

export default counter;   
