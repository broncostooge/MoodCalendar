import React, { Component } from 'react';
import firebase from '../Firebase';

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
            this.props.router.push('/');
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
            <input type="button" onClick={ () => { this.Logout() }} value="Logout"/>
        )
    }
}