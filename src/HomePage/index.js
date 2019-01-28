import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import firebase from '../Firebase';
import '../Contents/CSS/LoginPage.css'

export default class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            WarningMessage : "",
            ErrorCode : "",
            ErrorMessage : ""
        };

        this.Login = this.Login.bind(this);

    }

    HideAlerts(){
        document.getElementById('login_warning').style.display = "none";
        document.getElementById('login_danger').style.display = "none";
        document.getElementById('login_success').style.display = "none";
    }

    componentDidMount(){
        this.HideAlerts();
    }

    Login(email, password) {

        this.setState (() => {
            return {WarningMessage: "", ErrorCode: "", ErrorMessage : ""};
        })

        this.HideAlerts();

        if(email && password){
            firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {

                document.getElementById('login_success').style.display = "block";
                
                setTimeout(() => {
                    this.props.history.push('/MoodCalendar/App');
                }, 1000);
            })
            .catch((error) => {
                this.setState (() => {
                    return {WarningMessage: "", ErrorCode : error.code.toString(), ErrorMessage: error.message.toString()};
                })
                document.getElementById('login_danger').style.display = "block";
            });
        }
        else{
            if(email && !password){
                this.setState (() => {
                    return {WarningMessage: " Password", ErrorCode: "", ErrorMessage : ""};
                })
            }
            else if(!email && password){
                this.setState (() => {
                    return {WarningMessage: " Email", ErrorCode: "", ErrorMessage : ""};
                })
            }
            else if(!email && !password){
                this.setState (() => {
                    return {WarningMessage: " Email & Password", ErrorCode: "", ErrorMessage : ""};
                })
            }
            document.getElementById('login_warning').style.display = "block";
        }
    }

    render() {
        return (
            <div className="wrapper fadeInDown">
                <div id="formContent">
                    <div class="fadeIn first">
                    <h1>Mood Calendar Home Page</h1>
                    </div>
                    <form>

                        <input type="text" id="login" class="fadeIn second" name="login" placeholder="username"/>
                        <input type="text" id="password" class="fadeIn third" name="login" placeholder="password"/>
                        <input type="button" class="fadeIn fourth" value="Log In" onClick={ () => { this.Login(document.getElementById('login').value, document.getElementById('password').value) }}/>
                        
                        <div id="formFooter">
                            Not Registerd?<span class="underlineHover"><Link to='/MoodCalendar/create'>Create an account</Link></span>
                            <div className="alert alert-success" id="login_success">
                                <strong>Success!</strong> Login Successfull
                            </div>
                            <div className="alert alert-warning" id="login_warning">
                                <strong>Warning!</strong>{this.state.WarningMessage} Missing!
                            </div>
                            <div className="alert alert-danger" id="login_danger">
                                <strong>Danger!</strong> {this.state.ErrorCode} {this.state.ErrorMessage}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}