import React, { Component } from 'react';
import firebase from '../Firebase';

export default class Logout extends Component{
    constructor(props) {
        super(props)
        this.state = {
            history: this.props.history
        };

        this.Logout = this.Logout.bind(this);
    }

    Logout(history) {
        firebase.auth().signOut()
        .then(function(){
            history.push('/MoodCalendar');
        })
        .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
        });
    }

    render(){
        return(
            <input type="button" onClick={ () => { this.Logout(this.state.history) }} value="Logout"/>
        );
    };
}