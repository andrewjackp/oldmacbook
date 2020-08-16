import React from "react";
import Jobs from "../subpages/Jobs";
import Friends from "../subpages/Friends";
import Login from "../subpages/Login";
import Register from "../subpages/Register";
import Events from "../subpages/Events";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <section className="section bg-home" id="HomePage">
          <div className="container">
            <h1 className="text-white">
              {" "}
              Hello {this.props.currentUserinfo.name}
            </h1>
          </div>
        </section>
        <section className="bg Login" id="Login">
          <Login />
        </section>
        <section className="bg Jobs" id="Jobs">
          <Jobs {...this.props} />
        </section>
        <section className="bg light" id="Friends">
          <Friends {...this.props} />
        </section>

        <section className="bg Register" id="Register">
          <Register />
        </section>
        <section className="bg Events" id="Events">
          <Events {...this.props} />
        </section>
      </React.Fragment>
    );
  }
}

export default HomePage;
