import React, { Component } from 'react';

import Topbar from './topbar';
import Footer from './footer';

class Layout extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <React.Fragment>
        <main>
          <div className="wrapper">
            <Topbar />
            {this.props.children}
            <Footer />
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default Layout;
