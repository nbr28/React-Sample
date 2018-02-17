import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
      <div className="panel panel-default">
        <div className="panel-heading">
          Employees
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
          <Link to="/Employees" className="btn btn-primary form-control">View All Employee Data</Link>
        </div>
      </div>
    );
  }
}

// export the component by name
export default EmployeesPanel; 