import React, { Component } from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom'
import { store } from '../store/'

export default class Logout extends Component{
    constructor(props) {
        super(props)
        this.state = {
        };

        this.Logout = this.Logout.bind(this);

    }

    Logout() {
        firebase.auth().signOut()
        .then(function(){
            store.dispatch({ type: 'SET_AUTHENTICATE_FALSE' });
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
            <Link to='/'>
                <button onClick={ () => { this.Logout() }}>Logout</button>
            </Link>
        )
    }
}