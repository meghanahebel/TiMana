import React from 'react';
import ReactDOM from 'react-dom';

export default class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            createEmail: '',
            createPassword: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.createUser = this.createUser.bind(this);
    }

    handleChange(e, field) {
        console.log(e);
        let newState = Object.assign({}, this.state);
        newState[field] = e.target.value;
        this.setState(newState);
    } // end of handleChange - assigns input values to state dynamically
 
    createUser(e) {
        e.preventDefault();
        let email = this.state.createEmail;
        let password = this.state.createPassword;

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch((error) => console.log(error.code, error.message));
    }

    render() {
        return (
            <div>
                <form action="">
                    <label htmlFor="email">Email <span>(or username)</span></label>
                    <input type="text" name="email" id="login_email" placeholder = "e.g. sherlock.holmes@baker.com" 
                        onChange = {(e)=>this.handleChange(e, "createEmail")}/>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="login_password" placeholder = "e.g. sherlocked" 
                        onChange = {(e)=>this.handleChange(e, "createPassword")}/>
                    <button className="login_submit">Login</button>
                </form>
            </div>
        )
    }
}