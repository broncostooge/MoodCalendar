import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import firebase from '../Firebase';

export default class CreateUser extends Component {
    constructor(props){
        super(props)
        this.state = {
            WarningMessage : "",
            ErrorCode : "",
            ErrorMessage : ""
        };

        this.CreateUser = this.CreateUser.bind(this);

    }

    componentDidMount(){
        document.getElementById('create_warning').style.display = "none";
        document.getElementById('create_danger').style.display = "none";
        document.getElementById('create_success').style.display = "none";
    }

    CreateUser(email, password) {
        
        this.setState (() => {
            return {WarningMessage: "", ErrorCode: "", ErrorMessage : ""};
        })

        document.getElementById('create_warning').style.display = "none";
        document.getElementById('create_danger').style.display = "none";
        document.getElementById('create_success').style.display = "none";

        if(email && password){
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(function(){
                document.getElementById('create_success').style.display = "block";

                firebase.firestore().collection("UserMoodCalendar").doc(firebase.auth().currentUser.uid).set({
                    Horrible:0,
                    Bad:0,
                    Average:0,
                    Good:0,
                    Great:0,
                })
                .then(function() {
                    console.log("Document successfully written!");
                })
                .catch(function(error) {
                    console.error("Error writing document: ", error);
                });

                setTimeout(() => {
                    this.props.history.push('/MoodCalendar/App');
                }, 1000);
            })
            .catch((error) => {
                this.setState (() => {
                    return {WarningMessage: "", ErrorCode : error.code.toString(), ErrorMessage: error.message.toString()};
                })
                document.getElementById('create_danger').style.display = "block";
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
            document.getElementById('create_warning').style.display = "block";
        }
    }

    render(){
        
        return(
            <div className="wrapper fadeInDown">
                <div id="formContent">
                    <div className="fadeIn first">
                    <h1>Create User</h1>
                    </div>
                    <form>
                        <input type="text" id="login" className="fadeIn second" name="login" placeholder="Email"/>
                        <input type="text" id="password" className="fadeIn third" name="login" placeholder="Password"/>
                        <input type="button" className="fadeIn fourth" value="Create User" onClick={ () => { this.CreateUser(document.getElementById('login').value, document.getElementById('password').value) }}/>

                        <div id="formFooter">
                            <span className="underlineHover"><Link to='/MoodCalendar'>Go Back To Login Page</Link></span>
                            <div className="alert alert-success" id="create_success">
                                <strong>Success!</strong> User Created
                            </div>
                            <div className="alert alert-warning" id="create_warning">
                                <strong>Warning!</strong>{this.state.WarningMessage} Missing!
                            </div>
                            <div className="alert alert-danger" id="create_danger">
                                <strong>Danger!</strong> {this.state.ErrorCode} {this.state.ErrorMessage}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}