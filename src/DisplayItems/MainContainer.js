import React, { Component } from 'react';
import SideBar from "./SideBar";
import NavBar from "./NavBar";
// import whatever else you like here

// Declare your Component here
class MainContainer extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="container-fluid">
          <div className="row">
            <SideBar highlight={this.props.SideBar} />
            <div className=" col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// export the component by name
export default MainContainer; 