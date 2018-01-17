import React from 'react';
import { 
    BrowserRouter as Router, 
    Route, Link, NavLink, Switch } from 'react-router-dom';

export default class Navigation extends React.Component {
    constructor() {
        super();
    }
    
    render() {
        return (
            <nav className="nav-signed-out">
                <ul>
                    <li>
                        <NavLink to "/" activeClassName="current">
                        <h3>Log In</h3>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to "/signup" activeClassName="current">
                        <h3>Sign Up</h3>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        )
    }
}