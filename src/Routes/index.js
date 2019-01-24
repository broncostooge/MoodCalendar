import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

//Components
import Home from '../HomePage/index'
import CreateUser from '../HomePage/CreateUser'
import MoodCalendar from '../CalendarApp'
import { connect } from 'react-redux';

class Routes extends Component {
    constructor(props){
        super(props)
        this.state = {

        };
    }

    render(){
        let MoodCalendarRoute;

        if(this.props.authenticated){
            MoodCalendarRoute = <Route exact path='/MoodCalendar' component={MoodCalendar}/>
        }
        else{
            MoodCalendarRoute = <Route exact path='/' component={Home}/>
        }

        return(
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/create' component={CreateUser}/>
                {MoodCalendarRoute}
            </Switch>
        )
    }
}

function mapStateToProps(state) {
    return { 
        authenticated: state.authenticated
    };
  }

export default connect(mapStateToProps)(Routes);