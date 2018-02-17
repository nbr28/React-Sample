import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import whatever else you like here

// Declare your Component here
class TeamsPanel extends Component {
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
      <div className="panel panel-default">
        <div className="panel-heading">
          Teams
      </div>
        <div className="panel-body">
          <div className="table-responsive overview-table">
            <table className="table table-striped table-bordered">
              <tbody>
                {this.state.Teams.map((team, index) => {
                  return (
                    <tr>
                      <td className='hidden'>{team._id}</td>
                      <td>{team.TeamName}</td>
                      <td>{team.Employees.length} Employees</td>
                      
                    </tr>
                  );
                })}

              </tbody>
            </table>
          </div>
          <Link to="/Teams" className="btn btn-primary form-control">View All Team Data</Link>
        </div>
      </div>
    );
  }
}

// export the component by name
export default TeamsPanel; 