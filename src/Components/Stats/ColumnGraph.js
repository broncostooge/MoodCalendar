import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

class ColumnGraph extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }

    render() {
        const data = [
            {name: 'Horrible', Horrible: this.props.Horrible},
            {name: 'Bad', Bad: this.props.Bad},
            {name: 'Average', Average: this.props.Average},
            {name: 'Good', Good: this.props.Good},
            {name: 'Great', Great: this.props.Great}
        ];

        return (
            <div>
                <h3>Column Graph</h3>
                <BarChart width={600} height={300} data={data}
                    margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend />
                    <Bar dataKey="Horrible" fill="red" />
                    <Bar dataKey="Bad" fill="orange" />
                    <Bar dataKey="Average" fill="yellow" />
                    <Bar dataKey="Good" fill="blue" />
                    <Bar dataKey="Great" fill="green" />
                </BarChart>
            </div>
        )
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

export default connect(mapStateToProps)(ColumnGraph);