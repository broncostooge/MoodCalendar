import React, { Component } from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom'

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
        })
        .catch(function(error) {
            console.log(error);
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