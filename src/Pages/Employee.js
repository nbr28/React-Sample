import React, { Component } from 'react';
import axios from 'axios';
import MainContainer from '../DisplayItems/MainContainer';
import moment from 'moment';
// import whatever else you like here

// Declare your Component here
class Employees extends Component {
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
      <MainContainer SideBar='Employees'>
        <h1> Employees:</h1>
            <div className="table-responsive">
              <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>Name and Position</th>
                  <th>Address</th>
                  <th>Phone Number</th>
                  <th>Hire Date</th>
                  <th>Salary Bonus</th>
                  <th>Total Salary</th>
                </tr>
              </thead>
                <tbody>
                  {this.state.Employees.map((employee, index) => {
                    return (
                      <tr>
                        <td className='hidden'>{employee._id}</td>
                        <td>{employee.FirstName} {employee.LastName} - {employee.Position.PositionName} </td>
                        <td>{employee.AddressStreet} {employee.AddressCity}, {employee.AddressState} {employee.AddressZip}</td>
                        <td>{employee.PhoneNum} ext: {employee.Extension}</td>
                        <td>{moment(employee.HireDate).format("ddd, MMMM Do YYYY")}</td>
                        <td>{new Intl.NumberFormat('en-IN',{ style: 'currency', currency: 'USD' }).format(employee.SalaryBonus)}</td>
                        <td>{new Intl.NumberFormat('en-IN',{ style: 'currency', currency: 'USD' }).format(employee.Position.PositionBaseSalary+employee.SalaryBonus)}</td>
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
export default Employees; 