import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

//Components
import Home from '../HomePage/index'
import CreateUser from '../HomePage/CreateUser'
import MoodCalendar from '../CalendarApp'

export default class Routes extends Component {
    constructor(props){
        super(props)
        this.state = {

        };
    }

    render(){
        return(
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/create' component={CreateUser}/>
                <Route exact path='/MoodCalendar' component={MoodCalendar}/>
            </Switch>
        )
    }

}