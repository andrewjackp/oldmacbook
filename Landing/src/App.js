import React, { Component } from "react";
import Layout from "./components/Layout/Layout";
import { Route, Switch } from "react-router-dom";
import mainbuilder from "./containers/mainbuilder/mainbuilder";
import "./App.scss";
import "./materialdesignicons.min.css";
import "./custom.css";

class App extends Component {
  render() {
    let layout = null;

    layout = (
      <Layout>
        <Switch>
          <Route path="/" component={mainbuilder} />
        </Switch>
      </Layout>
    );
    return <React.Fragment>{layout}</React.Fragment>;
  }
}

export default App;
