import React from 'react';
import ReactDOM from 'react-dom';
import { 
  BrowserRouter as Router, 
  Route, Link, NavLink, Switch } from 'react-router-dom';

import Home from './components/pages/Home';
import Login from './components/pages/home/Login';

class App extends React.Component {
  constructor() {
    super();
  }
  
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path = "/" component={Home}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
