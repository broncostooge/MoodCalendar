import React, { Component } from 'react';

//COMPONENTS
import ColumnGraph from './ColumnGraph';
import Count from './Count';
import PieGraph from './PieGraph'

export default class Stats extends Component{
    render() {

        return (
            <div className="Stats">
                <div className="Count">
                    <h3>Count</h3>
                    <Count />
                </div>
                <div className="ColumnGraph">
                    <ColumnGraph />
                </div>
                <div className="PieGraph">
                    <PieGraph />
                </div>
            </div>
        );
    };
}