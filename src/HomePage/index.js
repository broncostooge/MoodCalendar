import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import firebase from '../Firebase';
import { store } from '../store/'

export default class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
        };

        this.Login = this.Login.bind(this);

    }

    Login(username, password) {
        firebase.auth().signInWithEmailAndPassword(username, password)
        .then(function(){
            store.dispatch({ type: 'SET_AUTHENTICATE_TRUE' });
        })
        .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;

            console.log(errorCode);
            console.log(errorMessage);
        });
    }

    render() {
        return (
            <div>
                <h1>Mood Calendar Home Page</h1>
                <form>
                    <input id="LoginUserName" type="text" placeholder="Username"/>
                    <input id="LoginPassword" type="password" placeholder="Password"/>
                    <Link to='/MoodCalendar'>
                        <button onClick={ () => { this.Login(document.getElementById('LoginUserName').value, document.getElementById('LoginPassword').value) }}>Submit</button>
                    </Link>
                    <span>
                    Not Registerd?<Link to='/create'>Create an account</Link>
                    </span>
                </form>
            </div>
        )
    }
}