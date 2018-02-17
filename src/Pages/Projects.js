import React, { Component } from 'react';
import axios from 'axios';
import momment from 'moment';
import MainContainer from '../DisplayItems/MainContainer';
// import whatever else you like here


function DateDisplay (props){
  const date = props.date;
  if (date===null) { // evaluates to true if currentVideo is null
    return <div>N/A</div>; 
  }
  return (
    <div>{momment(date).format("ddd, MMMM Do YYYY")}</div>
  );
};


// Declare your Component here
class Projects extends Component {
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
      <MainContainer SideBar='Projects'>
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
                  <td className='hidden'>{index}</td>
                  <td className='col-md-1'>{project.ProjectName}</td>
                  <td className='col-md-9'>{project.ProjectDescription}</td>
                  <td><DateDisplay date={project.ProjectStartDate}/></td>
                  <td><DateDisplay date={project.ProjectEndDate}/></td>
                </tr>
              );
            })}

          </tbody>
        </table>
      </div>
      </MainContainer>
    );
  }
}


// export the component by name
export default Projects; 