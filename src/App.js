import React, { Component } from 'react';
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
            <Route path='/Projects/' render={() => (
              <Projects />
            )} />
            <Route exact path='/*' render={() => (
              <PageNotFound />
            )} />
          </Switch>
      </div>
    );
  }
}

export default App;