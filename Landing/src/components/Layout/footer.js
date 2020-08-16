import React, { Component } from 'react';
import logolight from '../../images/logo-light.png';
import { Link } from 'react-router-dom';

class Footer extends Component {
    
    render() {
        return (
            <React.Fragment>
                <footer className="section bg-home">
                    <div className="container">
                        <div className="row">   
                            <div className="col-lg-4">
                                <div className="footer-contant">
                                    <img src={logolight} className="" alt="" />
                                    <p className="mt-4 text-muted">Business it will repudiated and annoyances wise accepted man therefore always in these matters pleasures avoid worse plans.</p>
                                    <div className="mt-4">
                                        <ul className="list-inline footer-social">
                                            <li className="list-inline-item mr-2">
                                                <Link to="#" className="rounded-circle">
                                                    <i className="mdi mdi-facebook"></i>
                                                </Link>
                                            </li>

                                            <li className="list-inline-item mr-2 ml-1">
                                                <Link to="#" className="rounded-circle">
                                                    <i className="mdi mdi-dribbble"></i>
                                                </Link>
                                            </li>

                                            <li className="list-inline-item mr-2 ml-1" >
                                                <Link to="#" className="rounded-circle">
                                                    <i className="mdi mdi-twitter"></i>
                                                </Link>
                                            </li>

                                            <li className="list-inline-item mr-2 ml-1">
                                                <Link to="#" className="rounded-circle">
                                                    <i className="mdi mdi-linkedin"></i>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3">
                                <div className="footer-contant">
                                    <h6 className="footer-title f-15">Ressources</h6>
                                    <ul className="list-unstyled footer-link mt-4">
                                        <li><Link to="">Monitoring Grader </Link></li>
                                        <li><Link to="">Video Tutorial</Link></li>
                                        <li><Link to="">Term & Service</Link></li>
                                        <li><Link to="">Community</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3">
                                <div className="footer-contant">
                                    <h6 className="footer-title f-15">Workflows</h6>
                                    <ul className="list-unstyled footer-link mt-4">
                                        <li><Link to="">Manegement</Link></li>
                                        <li><Link to="">Reporting</Link></li>
                                        <li><Link to="">Tracking </Link></li>
                                        <li><Link to="">All Users</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-2">
                                <div className="footer-contant">
                                    <h6 className="footer-title f-15">Help</h6>
                                    <ul className="list-unstyled footer-link mt-4">
                                        <li><Link to="">Terms of Services</Link></li>
                                        <li><Link to="">Privacy Policy</Link></li>
                                        <li><Link to="">Sign Up </Link></li>
                                        <li><Link to="">Login</Link></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="text-center mt-5">
                        <p className="footer-alt mb-0">©  { new Date().getFullYear() } Zehen. Develope by Themesbrand</p>
                    </div>
                </footer>
            </React.Fragment>
        );
    }
}

export default Footer;






