import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

//Components
import Home from '../HomePage/index';
import CreateUser from '../HomePage/CreateUser';
import MoodCalendar from '../CalendarApp';

export default class Routes extends Component {
    render(){

        return(
            <Switch>
                <Route exact path='/MoodCalendar' component={Home}/>
                <Route exact path='/Create' component={CreateUser}/>
                <Route exact path='/MoodCalendar/App' component={MoodCalendar}/>
            </Switch>
        );
    };
}