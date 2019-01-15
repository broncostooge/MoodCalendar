import React, { Component } from 'react';

export default class ColumnOfNumbers extends Component {
    render() {
        const days = [];

        for(let i = 0; i < 32; i++){
            if(i === 0){
                days.push(<div key ={i} className="CalendarCell FirstColumnNumber"></div>);
            }else{
                days.push(<div key ={i} className="CalendarCell">{i}</div>);
            }
        }

        return (
            <div className="CalendarColumn">{days}</div>
        )
    }
}