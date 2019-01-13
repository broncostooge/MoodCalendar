import React, { Component } from 'react';
import ColumnGraph from './ColumnGraph';
import Count from './Count';
import PieGraph from './PieGraph'

export default class extends Component{
    render() {
        return (
            <div className="Stats">
                <div className="Count">
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
    }
}