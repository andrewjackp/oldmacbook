import React from "react";
import { register } from "../../../services/UserService";
import { Row, Col, Button } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirm: "",
      avatarUrl: "",
      tenantId: "U011CJS215M",
    };
  }

  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    register(this.state)
      .then(this.onRegisterSuccess)
      .catch(this.onRegisterError);
  };

  onRegisterSuccess = () => {
    console.log("successful registration");
  };

  onRegisterError = () => {
    console.log("error registering");
  };

  render() {
    return (
      <React.Fragment>
        <section className="section bg-light" id="login">
          <div className="container">
            <Row>
              <Col lg="12">
                <div className="title-box text-center">
                  <h3 className="title-heading">Register with us</h3>
                  <p className="title-desc text-muted mt-3">
                    Condimentum auctor ante sed interdum proin viverra sed
                    lectus et iaculis maecenas tortor lorem bibendum pretium.
                  </p>
                </div>
              </Col>
            </Row>

            <div className="row mt-5">
              <Col lg="12">
                <div className="custom-form mt-4">
                  <div id="message"></div>
                  <AvForm id="login-form">
                    <Row>
                      <Col lg="4">
                        <div className="form-group">
                          <AvField
                            name="firstName"
                            label="First Name"
                            onChange={this.handleChange}
                            placeholder="First Name"
                            type="text"
                            errorMessage="Enter First Name"
                            value={this.state.firstName}
                          />
                        </div>
                      </Col>
                      <Col lg="4">
                        <div className="form-group">
                          <AvField
                            name="lastName"
                            label="Last Name"
                            onChange={this.handleChange}
                            placeholder="Last Name"
                            type="text"
                            errorMessage="Enter Last Name"
                            value={this.state.lastNamw}
                          />
                        </div>
                      </Col>
                      <Col lg="4">
                        <div className="form-group">
                          <AvField
                            name="email"
                            label="Email address"
                            onChange={this.handleChange}
                            placeholder="Your email..."
                            type="text"
                            errorMessage="Enter Valid Email"
                            value={this.state.email}
                          />
                        </div>
                      </Col>
                      <Col lg="4">
                        <div className="form-group">
                          <AvField
                            name="password"
                            label="Password"
                            onChange={this.handleChange}
                            placeholder="Password"
                            type="password"
                            errorMessage="Enter Password"
                            value={this.state.password}
                          />
                        </div>
                      </Col>
                      <Col lg="4">
                        <div className="form-group">
                          <AvField
                            name="passwordConfirm"
                            label="Password Confirm"
                            onChange={this.handleChange}
                            placeholder="Password Confirm"
                            type="password"
                            errorMessage="Enter Password Confirm"
                            value={this.state.passwordConfirm}
                          />
                        </div>
                      </Col>
                      <Col lg="4">
                        <div className="form-group">
                          <AvField
                            name="avatarUrl"
                            label="AvatarUrl"
                            onChange={this.handleChange}
                            placeholder="AvatarUrl"
                            type="text"
                            errorMessage="Enter AvatarUrl"
                            value={this.state.avatarUrl}
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row className="mt-3"></Row>
                    <Row className="mt-3">
                      <Col lg="12">
                        <Button
                          onClick={this.handleSubmit}
                          className="submitBnt btn btn-custom btn-round"
                        >
                          Register
                        </Button>{" "}
                        &nbsp;
                      </Col>
                    </Row>
                  </AvForm>
                </div>
              </Col>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Register;
