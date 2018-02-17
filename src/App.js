import React, { Component } from 'react';
import MainContainer from './DisplayItems/MainContainer';
import Overview from './DisplayItems/Overview';
import Projects from './Pages/Projects';
import Teams from './Pages/Teams';
import Employees from './Pages/Employee';
import PageNotFound from './Pages/PageNotFound'
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <MainContainer SideBar="Overview">
          <Switch>
            <Route exact path='/' render={() => (
              <Overview />
            )} />
            <Route exact path='/Teams' render={() => (
              <Teams />
            )} />
            <Route exact path='/Employees' render={() => (
              <Employees />
            )} />
            <Route exact path='/Projects' render={() => (
              <Projects />
            )} />
          </Switch>

          {/* <Overview /> */}
          {/* <Projects /> */}
          {/* <Teams /> */}
          {/* <Employees /> */}
          {<PageNotFound />}
        </MainContainer>
        {/* <div className="container-fluid">
          <div className="row">
            <div className=" col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
              <h1 className="page-header">Overview</h1>
              <div className="row">
                <div className="col-md-4">
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h3 className="panel-title">Projects</h3>

                  </div>
                </div>
                <div className="col-md-4">
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h3 className="panel-title">Teams</h3>
                    </div>
                    <div className="panel-body">
                      <div className="table-responsive overview-table">
                        <table className="table table-striped table-bordered">
                          <tbody>
                            <tr>
                              <td>Team 1</td>
                              <td># Employees</td>
                            </tr>
                            <tr>
                              <td>Team 2</td>
                              <td># Employees</td>
                            </tr>
                            <tr>
                              <td>Team 3</td>
                              <td># Employees</td>
                            </tr>
                            <tr>
                              <td>Team 4</td>
                              <td># Employees</td>
                            </tr>
                            <tr>
                              <td>Team 5</td>
                              <td># Employees</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <a href="/teams" className="btn btn-primary form-control">View All Team Data</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h3 className="panel-title">Employees</h3>
                    </div>
                    <div className="panel-body">
                      <div className="table-responsive overview-table">
                        <table className="table table-striped table-bordered">
                          <tbody>
                            <tr>
                              <td>Employee 1</td>
                              <td>Position</td>
                            </tr>
                            <tr>
                              <td>Employee 2</td>
                              <td>Position</td>
                            </tr>
                            <tr>
                              <td>Employee 3</td>
                              <td>Position</td>
                            </tr>
                            <tr>
                              <td>Employee 4</td>
                              <td>Position</td>
                            </tr>
                            <tr>
                              <td>Employee 5</td>
                              <td>Position</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <a href="/employees" className="btn btn-primary form-control">View All Employee Data</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> 
        </div>*/}
      </div>
    );
  }
}

export default App;