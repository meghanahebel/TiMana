import React from 'react';
import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCRusQmoJ1YbOKZ8g-jn5LJSwLBvft1M_A",
    authDomain: "timana-b9f09.firebaseapp.com",
    databaseURL: "https://timana-b9f09.firebaseio.com",
    projectId: "timana-b9f09",
    storageBucket: "timana-b9f09.appspot.com",
    messagingSenderId: "937903541996"
};


export default class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            loginEmail: '',
            loginPassword: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.signIn = this.signIn.bind(this);
    }


    handleChange(e, field) {
        let newState = Object.assign({}, this.state);
        newState[field] = e.target.value;
        this.setState(newState);
    } // end of handleChange - assigns input values to state dynamically from login and sign-up forms

    signIn(e) {
        e.preventDefault();
        let email = this.state.loginEmail;
        let password = this.state.loginPassword;

        firebase.auth().signInWithEmailAndPassword(email , password)
            .then((success) => {
                console.log(`Logged in successfully as ${success.email}`)
            }, (error) => {
                console.log(error);
            });
    } // end of signIn - signs in a user with email and password collected

    render() {
        return (
            <div className = "login_container">

                <div className = 'sign-in'>
                    <form className="sign-in-form" onSubmit = {(e) => this.signIn(e)}>
                        <label htmlFor="sign-in-email">Email <span>(or username)</span></label>
                        <input type="text" name="sign-in-email" id="sign-in-email" placeholder = "e.g. sherlock.holmes@baker.com" 
                            onChange = {(e)=>this.handleChange(e, "loginEmail")}/>
                        <label htmlFor="sign-in-password">Password</label>
                        <input type="password" name="sign-in-password" id="sign-in-password" placeholder = "e.g. sherlocked" 
                            onChange = {(e)=>this.handleChange(e, "loginPassword")}/>
                        <button className="sign-in-submit">Login</button>
                    </form>
                </div>

            </div>
        )
    }
}