import React from "react";
import { logIn } from "../../../services/UserService";
import { Row, Col, Button } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      tenantId: "U011CJS215M",
    };
  }

  handleChange = (event) => {
    let name = event.target.name; // "name"
    let value = event.target.value;

    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    logIn(this.state).then(this.onLogInSuccess).catch(this.onLogInError);
  };

  onLogInSuccess = () => {
    console.log("login success");
  };

  onLogInError = () => {
    console.log("login error");
  };

  render() {
    return (
      <React.Fragment>
        <section className="section bg-cta" id="login">
          <div className="container">
            <div className="row mt-5">
              <Col lg="12">
                <div className="custom-form mt-4">
                  <div id="message"></div>
                  <AvForm>
                    <Row>
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
                    </Row>
                    <Row className="mt-3"></Row>
                    <Row className="mt-3">
                      <Col lg="12">
                        <Button
                          onClick={this.handleSubmit}
                          className="submitBnt btn btn-custom btn-round"
                        >
                          Login
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
export default Login;
