import React, { Component } from 'react';

//COMPONENTS
import Mood from './Mood';

export default class Month extends Component {
    constructor(props) {
        super(props)
        this.state = {
            month: {
                name: this.props.name,
                days: this.props.days
            }
        };
    };

    render(){

        const buttons = [];

        for (let i = 0; i < this.state.month.days; i++){
            if (this.state.month.name === "Febuary" && i === 28){
                buttons.push(<Mood LeapYearDay={true} TOCButton = {false} key={i} month={this.state.month.name} day={i} />);
            }else{
                buttons.push(<Mood TOCButton = {false} key={i} month={this.state.month.name} day={i} />);
            }
        }

        return (
            <div className = "CalendarColumn">
                <div className = "CalendarCell">
                    {this.state.month.name[0]}
                </div>
                {buttons}
            </div>
        );
    };
}