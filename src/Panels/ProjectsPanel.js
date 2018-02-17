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
      <div className="panel panel-default">
        <div className="panel-heading">
          Projects
      </div>
        <div className="panel-body">
          <div className="table-responsive overview-table">
            <table className="table table-striped table-bordered">
              <tbody>
                {this.state.projects.map((project, index) => {
                  return (
                    <tr>
                      <td className='hidden'>{project._id}</td>
                      <td>{project.ProjectName}</td>
                      <td>Active {momment().diff(momment(project.ProjectStartDate),'days')} Days</td>
                    </tr>
                  );
                })}

              </tbody>
            </table>
          </div>
          <a href="/projects" className="btn btn-primary form-control">View All Project Data</a>
        </div>
      </div>
    );
  }
}

// export the component by name
export default ProjectsPanel; 