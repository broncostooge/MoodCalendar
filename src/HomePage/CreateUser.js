import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import firebase from '../Firebase';

export default class CreateUser extends Component {
    constructor(props){
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
                <h1>Create User</h1>
                <form>
                    <input id="CreateEmail" type="text" placeholder="Email"/>
                    <input id="CreatePassword" type="text" placeholder="Password"/>
                    <Link to='/'>
                        <button onClick={ () => { this.CreateUser(document.getElementById('CreateEmail').value, document.getElementById('CreatePassword').value) }}>Submit</button>
                    </Link>
                </form>
            </div>
        )
    }
}