import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class CreateUser extends Component {
    constructor(props){
        super(props)
        this.state = {

        };
    }

    render(){
        return(
            <div>
                <h1>Create User</h1>
                <form>
                    <input type="text" placeholder="First Name"/>
                    <input type="text" placeholder="Last Name"/>
                    <input type="text" placeholder="Username"/>
                    <input type="text" placeholder="Password"/>
                    <Link to='/'>
                        <button>Submit</button>
                    </Link>
                </form>
            </div>
        )
    }
}