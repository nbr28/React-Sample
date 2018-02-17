import React, { Component } from 'react';
import axios from 'axios';
import MainContainer from '../DisplayItems/MainContainer';

// import whatever else you like here

// Declare your Component here
class Teams extends Component {
  constructor() {
    super();
    this.state = { Teams: [] }
  }

  componentDidMount() {
    axios.get("https://teams-api012894.herokuapp.com/teams").then((res) => {
      this.setState({ Teams: res.data, });
    }).catch((err) => {
      //TODO:Redirect to 404
    });
  }

  render() {
    return (
      <MainContainer SideBar='Teams'>

        <div className="panel panel-default">
          <div className="panel-heading">
            Teams
      </div>
          <div className="panel-body">
            <div className="table-responsive overview-table">
              <table className="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Projects</th>
                    <th>Employees</th>
                    <th>Team Lead</th>
                  </tr>
                </thead>

                <tbody>
                  {this.state.Teams.map((team, index) => {
                    return (
                      <tr>
                        <td className='hidden'>{team._id}</td>
                        <td>{team.TeamName}</td>
                        <td>{team.Projects.map((project, index) => {
                          return (
                            <ul>
                              <li>{project.ProjectName}</li>
                            </ul>
                          );
                        })}</td>
                        <td>{team.Employees.length} Employees</td>
                        <td>{team.TeamLead.FirstName} {team.TeamLead.LastName}</td>
                      </tr>
                    );
                  })}

                </tbody>
              </table>
            </div>
            <a href="/projects" className="btn btn-primary form-control">View All Project Data</a>
          </div>
        </div>
      </MainContainer>
    );
  }
}

// export the component by name
export default Teams; 