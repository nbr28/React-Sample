import React, { Component } from 'react';
// import whatever else you like here

// Declare your Component here
class SideBar extends Component {
  render() {
    return (
      <div>
        <div className="col-sm-3 col-md-2  sidebar">
          <ul className="nav nav-sidebar">
            <li className="active"><a href="/">Overview <span className="sr-only">(current)</span></a></li>
          </ul>
          <ul className="nav nav-sidebar">
            <li><a href="/projects">Projects</a></li>
            <li><a href="/teams">Teams</a></li>
            <li><a href="/employees">Employees</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

// export the component by name
export default SideBar; 