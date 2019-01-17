import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { PieChart, Pie, Cell, Legend } from 'recharts';

class PieGraph extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }

    render() {
        const data = [
            {name: 'Horrible', value: this.props.Horrible}, 
            {name: 'Bad', value: this.props.Bad},
            {name: 'Average', value: this.props.Average}, 
            {name: 'Good', value: this.props.Good}, 
            {name: 'Great', value: this.props.Great}
        ];
        const COLORS = ['red', 'orange', 'yellow', 'blue', 'green'];   

        return (
            <div>
                <h3>Pie Graph</h3>
                <PieChart width={800} height={400} onMouseEnter={this.onPieEnter}>
                <Pie
                dataKey="value"
                data={data} 
                cx={400} 
                cy={125} 
                innerRadius={60}
                outerRadius={80} 
                fill="#8884d8"
                paddingAngle={5}
                >
                    {
                        data.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]}/>)
                    }
                <Legend />
                </Pie>
            </PieChart>
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

export default connect(mapStateToProps)(PieGraph);