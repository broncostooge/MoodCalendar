import React, { Component } from 'react';
import firebase from '../Firebase';

export default class Login extends Component{
    constructor(props) {
        super(props)
        this.state = {
        };

        this.Login = this.Login.bind(this);

    }

    Login(username, password) {
        firebase.auth().signInWithEmailAndPassword(username, password)
        .then(function(){
            alert('Logged In');
        })
        .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;

            if (errorCode === 'auth/wrong-password') {
                alert('Wrong password.');
            } else if(errorCode === 'auth/argument-error') {
                alert('A UserName must be supplied');
            }else{
                alert(errorMessage);
            }
        });
    }

    render(){
        return(
            <div>
                <h1>Mood Calendar Login</h1>
                Username: <input id = "LoginUserName" type="text" name="username"></input>
                Password: <input id = "LoginPassword" type="text" name="password"></input>
                <button onClick={ () => { this.Login(document.getElementById('LoginUserName').value, document.getElementById('LoginPassword').value) }}>Login</button>
            </div>
        )
    }
}