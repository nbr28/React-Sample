import React, { Component } from 'react';
import ProjectPanle from '../Panels/ProjectsPanel';
import TeamsPanel from '../Panels/TeamsPanel';
// import whatever else you like here

// Declare your Component here
class Overview extends Component {
  render() {
    return (
      <div>
        <h1 className='page-header'>Overview</h1>
        <div className="row">
          <div className="col-md-4">
        <ProjectPanle/>
          </div>
          <div className="col-md-4">
         <TeamsPanel/>
          </div>
          <div className="col-md-4">
          <p>Placeholder</p>
          </div>
        </div>

      </div>

    );
  }
}

// export the component by name
export default Overview; 