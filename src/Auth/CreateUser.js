import React, { Component } from 'react';
import firebase from '../Firebase';

export default class CreateUser extends Component{
    constructor(props) {
        super(props)
        this.state = {
        };

        this.CreateUser = this.CreateUser.bind(this);

    }
    CreateUser(email, password) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function(){
            alert('User: ' + email + ' Created');
        })
        .catch(function(error) {
    
          var errorCode = error.code;
          var errorMessage = error.message;
    
          console.log(errorCode);
          console.log(errorMessage);
        });
      }

    render(){
        return(
            <div>
                <h1>Mood Calendar Create User</h1>
                Username: <input id = "CreateEmail" type="text" name="email"></input>
                Password: <input id = "CreatePassword" type="text" name="password"></input>
                <button onClick={ () => { this.CreateUser(document.getElementById('CreateEmail').value, document.getElementById('CreatePassword').value) }}>Create User</button>
            </div>
        )
    }
}