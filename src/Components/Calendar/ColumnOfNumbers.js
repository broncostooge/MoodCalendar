import React, { Component } from 'react';

export default class ColumnOfNumbers extends Component {
    render() {
        const days = [];

        for(let i = 0; i < 32; i++){
            days.push(<div key ={i} className="CalendarCell">{i}</div>);
        }

        return (
            <div className="CalendarColumn">{days}</div>
        )
    }
}