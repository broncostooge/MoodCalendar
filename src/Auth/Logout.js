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
            alert('Logged Out');
        })
        .catch(function(error) {
            console.log(error);
        });
    }

    render(){
        return(
            <button onClick={ () => { this.Logout() }}>Logout</button>
        )
    }
}