import React from 'react';
import ReactDOM from 'react-dom';
import { 
    BrowserRouter as Router, 
    Route, Link, NavLink, Switch } from 'react-router-dom';

import Login from './home/Login';

export default class Home extends React.Component {

    constructor() {
        super();
        this.state = {
        }
    }

    render() {
        return (
            <Router>
                <div className ="home-container">
                    <h1>Welcome back to TiMana!</h1>
                    <h2>Log in to TiMana</h2>
                    <Login />
                </div>
            </Router>
        )
    }
}