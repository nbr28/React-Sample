import React, { Component } from 'react';
import axios from 'axios';
import momment from 'moment';
// import whatever else you like here

// Declare your Component here
class ProjectsPanel extends Component {
  constructor() {
    super();
    this.state = { projects: [] }
  }

  componentDidMount() {
    axios.get("https://teams-api012894.herokuapp.com/projects").then((res) => {
      this.setState({ projects: res.data, });
    }).catch((err) => {
      //TODO:Redirect to 404
    });
  }

  render() {
    return (
      <div >
        <h1>Projects</h1>
   
      <div className="table-responsive overview-table">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>
                Name:
            </th>
              <th>
                Description:
            </th>
              <th>
                Start Date:
            </th>
              <th>
                End Date:
            </th>
            </tr>
          </thead>
          <tbody>

            {this.state.projects.map((project, index) => {
              return (
                <tr>
                  <td className='hidden'>{project._id}</td>
                  <td>{project.ProjectName}</td>
                  <td>{project.ProjectDescription}</td>
                  <dateDisplay currentDate={project.ProjectStartDate}/>
                  <dateDisplay currentDate={project.ProjectEndDate}/>
                </tr>
              );
            })}

          </tbody>
        </table>
      </div>
      </div>
    );
  }
}

function dateDisplay (currentDate){
  if (!currentDate) { // evaluates to true if currentVideo is null
    return <td>N/A</td>; 
  }
  return (
    <td>{momment(currentDate).format("ddd, MMMM Do YYYY")}</td>
  );
};

// export the component by name
export default ProjectsPanel; 