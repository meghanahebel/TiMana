import React from 'react';
import { 
    BrowserRouter as Router, 
    Route, Link, NavLink, Switch } from 'react-router-dom';

export default class SignUp extends React.Component {
    constructor() {
        super(); 
        this.state = {
            createEmail: '',
            createPassword: '',
            createName: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.createUser = this.createUser.bind(this);
    }

    handleChange(e, field) {
        let newState = Object.assign({}, this.state);
        newState[field] = e.target.value;
        this.setState(newState);
    } // end of handleChange - assigns input values to state dynamically from login and sign-up forms

    createUser(e) {
        e.preventDefault();
        let email = this.state.createEmail;
        let password = this.state.createPassword;

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((user)=> {
                if(user)
                user.updateProfile({
                    displayName: this.state.createName,
                })
            })
            .catch((error) => console.log(error.code, error.message));
    } // end of createUser - creates User through firebase


    render() {
        return(
            <div className="signup-component">

                <h1>Create a TiMana Account</h1>
                <h3 className="handwriting">
                    Or 
                    <NavLink to="/"> sign in to your account</NavLink>
                </h3>
                <div className="create-user">
                    <form className="create-user-form" onSubmit = {(e)=> this.createUser(e)}>
                        <label htmlFor="sign-up-name">Full Name</label>
                        <input type="text" name="sign-up-name" id="sign-up-name" placeholder = "e.g. Sherlock Holmes" 
                            onChange = {(e)=>this.handleChange(e, "createName")}/>
                        <label htmlFor="sign-up-email">Email <span>(or username)</span></label>
                        <input type="text" name="sign-up-email" id="sign-up-email" placeholder = "e.g. sherlock.holmes@baker.com" 
                            onChange = {(e)=>this.handleChange(e, "createEmail")}/>
                        <label htmlFor="sign-up-password">Password</label>
                        <input type="password" name="sign-up-password" id="sign-up-password" placeholder = "e.g. sherlocked" 
                            onChange = {(e)=>this.handleChange(e, "createPassword")}/>
                        <button className="sign-up-submit">Sign Up</button>
                    </form>
                </div>
            </div>
        )
    }
}