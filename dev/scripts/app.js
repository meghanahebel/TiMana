import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import { 
  BrowserRouter as Router, 
  Route, Link, NavLink, Switch } from 'react-router-dom';

import Home from './components/pages/Home';
import SignUp from './components/pages/SignUp';
import Navigation from './components/sub/Navigation';



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
    this.state = {
      userID: '',
      signedIn: false
    }
    this.signOut = this.signOut.bind(this);
  }
  
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({
          userID: user.uid,
          signedIn: true
        })
      }
      else {
        this.setState({ signedIn: false })
      }
    });
  }

  signOut(e) {
    e.preventDefault();
    firebase.auth().signOut()
      .then((success)=> {
          console.log('Signed out!');
      }, (error)=> {
          console.log(error);
      });
  } // end of signOut - signs out user with firebase
  


  render() {
    return (
      <Router>
        <div>
          <Navigation />
          <Switch>
            <Route exact path = "/" render={(props) => <Home {...props}  userID={this.state.userID} signedIn={this.state.signedIn} signOut = {this.signOut}/> }/>
            <Route exact path="/signup" component={SignUp}/>
          </Switch>
        </div>
      </Router>
    )
  }
} // end of App 

ReactDOM.render(<App />, document.getElementById('app'));
