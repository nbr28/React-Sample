import React, { Component } from 'react';
// import whatever else you like here

// Declare your Component here
class NavBar extends Component{
  render(){
    return (
      <div>
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="/">&#9758;Natan Ross's Amazing React App&#9756;</a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

// export the component by name
export default NavBar; 