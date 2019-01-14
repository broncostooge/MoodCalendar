import React, { Component } from 'react';
import { connect } from 'react-redux'
import ColumnGraph from './ColumnGraph';
import Count from './Count';
import PieGraph from './PieGraph'

class Stats extends Component{
    render() {
        const { IncreaseHorrible } = this.props;
        console.log(this)
        return (
            <div className="Stats">
            <button onClick={IncreaseHorrible}></button>
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

function mapStateToProps(state) {
    return { 
        Horrible: state.Horrible,
        Bad:state.Bad,
        Average:state.Average,
        Good:state.Good,
        Great:state.Great 
    };
  }

export default connect(mapStateToProps)(Stats)