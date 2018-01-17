import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import { 
  BrowserRouter as Router, 
  Route, Link, NavLink, Switch } from 'react-router-dom';

import Home from './components/pages/Home';
import Login from './components/pages/home/Login';


// FIREBASE
var config = {
  apiKey: "AIzaSyCRusQmoJ1YbOKZ8g-jn5LJSwLBvft1M_A",
  authDomain: "timana-b9f09.firebaseapp.com",
  databaseURL: "https://timana-b9f09.firebaseio.com",
  projectId: "timana-b9f09",
  storageBucket: "timana-b9f09.appspot.com",
  messagingSenderId: "937903541996"
};
firebase.initializeApp(config);

// APP COMPONENT
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
} // end of App 

ReactDOM.render(<App />, document.getElementById('app'));
