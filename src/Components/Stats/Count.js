import React, { Component }  from 'react';
import { connect } from 'react-redux';

class Count extends Component {
    constructor(props){
        super(props)
          this.state = {
        }
      }

    render() {
        const moods =  [
            {
                name: "Horrible", 
                color: "Red"
            }, 
            {
                name: "Bad", 
                color: "Orange"
            },
            {
                name: "Average", 
                color: "Yellow"
            },
            {
                name: "Good", 
                color: "Blue"
            },
            {
                name: "Great", 
                color: "Green"
            }
        ]

        let CountList = []

        function CountOutput(countList, name, index, moodCount){
            return countList.push(<tr key={index}>{name}: <td key={index} className={name+'Count'}>{moodCount}</td></tr>);
        }

        moods.map((mood, index) => {
            if(mood.name === "Horrible"){
                CountOutput(CountList, mood.name, index, this.props.Horrible);
            }
            if(mood.name === "Bad"){
                CountOutput(CountList, mood.name, index, this.props.Bad);
            }
            if(mood.name === "Average"){
                CountOutput(CountList, mood.name, index, this.props.Average);
            }
            if(mood.name === "Good"){
                CountOutput(CountList, mood.name, index, this.props.Good);
            }
            if(mood.name === "Great"){
                CountOutput(CountList, mood.name, index, this.props.Great);
            }

            return -1;
        })

        return (
            <div>
                <h3>Count</h3>
                <table>
                    <tbody>
                        {CountList}
                    </tbody>
                </table>
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

export default connect(mapStateToProps)(Count);
