import React from 'react';
import ReactDOM from 'react-dom';
import { 
    BrowserRouter as Router, 
    Route, Link, NavLink, Switch } from 'react-router-dom';

import Login from './home/Login';

export default class Home extends React.Component {

    render() {
        return (
            <Router>
                <div>
                    <div>This is the Home Page</div>
                    <Login />
                </div>
            </Router>
        )
    }
}