import React, { Component } from 'react';
import axios from 'axios';
// import whatever else you like here

// Declare your Component here
class EmployeesPanel extends Component{
  constructor() {
    super();
    this.state = { Employees: [] }
  }

  componentDidMount() {
    axios.get("https://teams-api012894.herokuapp.com/employees").then((res) => {
      this.setState({ Employees: res.data, });
    }).catch((err) => {
      //TODO:Redirect to 404
    });
  }

  render() {
    return (
      <div class="panel panel-default">
        <div class="panel-heading">
          Teams
      </div>
        <div className="panel-body">
          <div className="table-responsive overview-table">
            <table className="table table-striped table-bordered">
              <tbody>
                {this.state.Employees.map((employee, index) => {
                  return (
                    <tr>
                      <td className='hidden'>{employee._id}</td>
                      <td>{employee.FirstName} {employee.LastName} </td>
                      <td>{employee.Position.PositionName}</td>
                      
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
export default EmployeesPanel; 