import React from 'react';
import ReactDOM from 'react-dom';
import { 
    BrowserRouter as Router, 
    Route, Link, NavLink, Switch } from 'react-router-dom';

import Login from './home/Login';

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            signedIn: props.signedIn
        }
    }

    

    render() {
        return (
            <Router>
                <div className ="home-container">
                
                    { this.props.signedIn ?
                    <div>
                        <div className='sign-out'>
                            <button onClick = {(e)=>this.props.signOut(e)}>Sign Out</button>
                        </div>
                    </div>
                    :
                    <div>
                        <Login />
                    </div>
                    }
                </div>
            </Router>
        )
    }
}