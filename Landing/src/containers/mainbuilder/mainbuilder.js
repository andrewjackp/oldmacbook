import React, { Component } from "react";
import { getCurrentUser, getUserById } from "../../../src/services/UserService";
import Index1 from "../MainContent/index1";
import Index2 from "../MainContent/index2";
import Index3 from "../MainContent/index3";
import Index4 from "../MainContent/index4";
import Index5 from "../MainContent/index5";
import Index6 from "../MainContent/index6";
import Index7 from "../MainContent/index7";
import Index8 from "../MainContent/index8";
import Login from "../MainContent/subpages/Login";
import Register from "../MainContent/subpages/Register";
import HomePage from "../MainContent/subpages/HomePage";
import Friends from "../MainContent/subpages/Friends";
import FriendForm from "../MainContent/subpages/FriendForm";
import AddFriend from "../MainContent/subpages/AddFriend";
import Jobs from "../MainContent/subpages/Jobs";
import JobForm from "../MainContent/subpages/JobFormWrapper";
import { Route, Switch, withRouter } from "react-router-dom";
import FriendCardV2 from "../MainContent/subpages/FriendsV2/FriendCardV2";
import Events from "../MainContent/subpages/Events";
// import EventWrapper from "../MainContent/subpages/EventWrapper";

class mainbuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {
        id: 0,
        name: "",
        tenantId: "",
        userIsAuthenticated: true,
      },
      data: {
        firstName: "",
        lastName: "",
      },
    };
  }

  componentDidMount() {
    this.handleGetCurrentUser();
  }

  handleGetCurrentUser = () => {
    getCurrentUser()
      .then(this.onGetCurrentUserSuccess)
      .catch(this.onGetCurrentUserError);
  };

  onGetCurrentUserSuccess = (response) => {
    console.log(response.item.id);
    let id = response.item.id;
    getUserById(id)
      .then(this.onGetUserByIdSuccess)
      .catch(this.onGetUserByIdError);
  };

  onGetCurrentUserError = (response) => {
    console.log("Current User Error", response);
  };

  onGetUserByIdSuccess = (response) => {
    let id = response.item.id;
    let firstName = response.item.firstName;
    this.setState((prevState) => {
      return {
        ...prevState,
        currentUser: {
          ...prevState.currentUser,
          id: id,
          name: firstName,
        },
      };
    });
  };

  onGetUserByIdError = (response) => {
    console.log("no ID", response);
  };

  render() {
    return (
      <Switch>
        <Route path="/index-1" component={Index1} />
        <Route path="/index-2" component={Index2} />
        <Route path="/index-3" component={Index3} />
        <Route path="/index-4" component={Index4} />
        <Route path="/index-5" component={Index5} />
        <Route path="/index-6" component={Index6} />
        <Route path="/index-7" component={Index7} />
        <Route path="/index-8" component={Index8} />
        <Route exact path="/FriendCardV2" component={FriendCardV2} />
        <Route exact path="/Jobs" component={Jobs} />
        <Route path="/JobFormWrapper/:id" exact={true} component={JobForm} />
        <Route exact path="/JobFormWrapper" component={JobForm} />
        <Route exact path="/Friends" component={Friends} />
        <Route path="/FriendForm/:id" exact={true} component={FriendForm} />
        <Route path="/AddFriend/add" exact={true} component={AddFriend} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Register" component={Register} />
        <Route exact path="/Events" component={Events} />
        {/* <Route exact path="/EventWrapper" component={EventWrapper} />
        <Route exact path="/EventWrapper/:id" component={EventWrapper} /> */}
        <Route
          exact
          path="/"
          render={(props) => (
            <HomePage
              {...props}
              userIsAuthenticated={true}
              currentUserinfo={this.state.currentUser}
            />
          )}
        />
        {/* <Route path="/" component={Index1} /> */}
      </Switch>
    );
  }
}

export default withRouter(mainbuilder);
