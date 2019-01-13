import React, { Component } from 'react';
import ColumnOfNumbers from './ColumnOfNumbers'
import Month from './Month'

export default class extends Component{
    constructor(props){
        super(props)
            this.state = {
        }
    }

    render() {
        const ListOfMonthsAndDays = [
            {
                name: "January",
                days: 31
            },
            {
                name: "Febuary",
                days: 29
            },
            {
                name: "March",
                days: 31
            },
            {
                name: "April",
                days: 30
            },
            {
                name: "May",
                days: 31
            },
            {
                name: "June",
                days: 30
            },
            {
                name: "July",
                days: 31
            },
            {
                name: "August",
                days: 31
            },
            {
                name: "September",
                days: 30
            },
            {
                name: "October",
                days: 31
            },
            {
                name: "November",
                days: 30
            },
            {
                name: "December",
                days: 31
            }
        ]

        const columnOfMonths = [];

        ListOfMonthsAndDays.map((month, index) => {
            return columnOfMonths.push(<Month name={month.name} days={month.days} key={index} />)
        });

        return (
            <div className="Calendar">
                <ColumnOfNumbers />
                {columnOfMonths}
            </div>
        );
    }
}