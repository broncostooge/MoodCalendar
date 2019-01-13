import React, { Component } from 'react';
import Mood from './Mood'

export default class Month extends Component {
    constructor(props) {
        super(props)
        this.state = {
            month: {
                name: this.props.name,
                days: this.props.days
            }
        }
    }
    render() {

        const buttons = [];

        for(let i = 0; i < this.state.month.days; i++){
            buttons.push(<Mood TOCButton = {false} key={i} />);
        }

        return (
            <div className = "CalendarColumn">
                <div className = "CalendarCell">
                    {this.state.month.name[0]}
                </div>
                {buttons}
            </div>
        );
    }
}