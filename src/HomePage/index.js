import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
        };
    }

    render() {

        return (
            <div>
                <h1>Mood Calendar Home Page</h1>
                <form>
                    <input type="text" placeholder="Username"/>
                    <input type="password" placeholder="Password"/>
                    <Link to='/MoodCalendar'>
                        <button>Submit</button>
                    </Link>
                    <span>Not Registerd? 
                        <Link to='/create'>Create an account</Link>
                    </span>
                </form>
            </div>
        )
    }
}