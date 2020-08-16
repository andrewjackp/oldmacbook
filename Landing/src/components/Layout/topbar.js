import React, { Component } from "react";
import { Link } from "react-router-dom";
import logolight from "../../images/logo-light.png";
import logodark from "../../images/logo-dark.png";
import { logOut } from "../../services/UserService";
import ScrollspyNav from "react-scrollspy-nav";

class Topbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iscollapse: true,
      logIn: true,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    var scrollY = window.scrollY;
    if (scrollY >= 10) {
      document.getElementById("sticky1").classList.add("nav-sticky");
    } else {
      document.getElementById("sticky1").classList.remove("nav-sticky");
    }
  };

  handleLogOut = (e) => {
    e.preventDefault();
    logOut().then(this.onLogOutSuccess).catch(this.onLogOutError);
  };

  onLogOutSuccess = () => {
    console.log("Logout successful");
  };
  onLogOutError = () => {
    console.log("logout error");
  };

  render() {
    return (
      <React.Fragment>
        <nav
          id="sticky1"
          className="navbar navbar-expand-lg fixed-top navbar-custom sticky sticky-dark nav-wrapper"
        >
          <div className="container">
            <Link className="navbar-brand logo text-uppercase" to="/HomePage">
              <img src={logolight} className="logo-light img-fluid" alt="" />
              <img src={logodark} className="logo-dark img-fluid" alt="" />
            </Link>
            <button
              onClick={() =>
                this.setState({ iscollapse: !this.state.iscollapse })
              }
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="mdi mdi-menu"></i>
            </button>
            <div
              className={
                this.state.iscollapse
                  ? "collapse navbar-collapse"
                  : "collapse navbar-collapse show"
              }
              id="navbarCollapse"
            >
              <ScrollspyNav
                scrollTargetIds={[
                  "HomePage",
                  "Friends",
                  "Jobs",
                  "Login",
                  "Logout",
                  "Register",
                ]}
                activeNavClass="st-active"
                scrollDuration="1000"
                headerBackground="true"
              ></ScrollspyNav>
              <ul className="navbar-nav ml-auto navbar-center" id="mySidenav">
                <li className="nav-item pt-1">
                  <a href="#HomePage" className="nav-link st-active">
                    Home
                  </a>
                </li>
                <li className="nav-item pt-1">
                  <a href="#Friends" className="nav-link">
                    Friends
                  </a>
                </li>
                <li className="nav-item pt-1">
                  <a href="#Jobs" className="nav-link">
                    Jobs
                  </a>
                </li>
                <li className="nav-item pt-1">
                  <a href="#Login" className="nav-link">
                    Login
                  </a>
                </li>
                <li className="nav-item pt-1">
                  <a
                    href="logout"
                    onClick={this.handleLogOut}
                    className="nav-link"
                  >
                    Logout
                  </a>
                </li>
                <li className="nav-item pt-1">
                  <a href="#Register" className="nav-link">
                    Register
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Topbar;
