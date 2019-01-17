import React, { Component } from 'react';
import store from '../../store'

export default class Mood extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mood: {
                name: this.props.name || "default",
                color: this.props.color || "white"
            }
        };

        this.changeMood = this.changeMood.bind(this);
    }

    componentDidMount() {
    }
    
    changeMood(colorCycles){

        colorCycles.map((colorCycle, index) => {
            if(colorCycle.current === this.state.mood.color){
                if(colorCycle.next === "red"){
                    store.dispatch({ type: 'INCREASE_HORRIBLE_MOOD_COUNT' });
                }
                else if(colorCycle.next === "orange"){
                    store.dispatch({ type: 'DECREASE_HORRIBLE_MOOD_COUNT' });
                    store.dispatch({ type: 'INCREASE_BAD_MOOD_COUNT' });
                }
                else if(colorCycle.next === "yellow"){
                    store.dispatch({ type: 'DECREASE_BAD_MOOD_COUNT' });
                    store.dispatch({ type: 'INCREASE_AVERAGE_MOOD_COUNT' });
                }
                else if(colorCycle.next === "blue"){
                    store.dispatch({ type: 'DECREASE_AVERAGE_MOOD_COUNT' });
                    store.dispatch({ type: 'INCREASE_GOOD_MOOD_COUNT' });
                }
                else if(colorCycle.next === "green"){
                    store.dispatch({ type: 'DECREASE_GOOD_MOOD_COUNT' });
                    store.dispatch({ type: 'INCREASE_GREAT_MOOD_COUNT' });
                }
                else if(colorCycle.next === "white"){
                    store.dispatch({ type: 'DECREASE_GREAT_MOOD_COUNT'});
                }
                return this.setState({mood:{name:this.state.mood.name, color: colorCycle.next}});
            }
            return null;
        })
    }

    render() {

        const buttonStyle = {
            backgroundColor: "white"
        };
        
        const colorCycles = [ 
            {
                current: "white",
                next: "red"
            },
            {
                current: "red",
                next: "orange",
            },
            {
                current: "orange",
                next: "yellow",
            },
            {
                current: "yellow",
                next: "blue",
            },
            {
                current: "blue",
                next: "green",
            },
            {
                current: "green",
                next: "white",
            }
        ]

        const output = [];

        let button;

        buttonStyle.backgroundColor = this.state.mood.color;

        if(this.props.LeapYearDay){
            button = <button key={Math.random} className = "MoodRating" id="LeapYearDay" style={buttonStyle} onClick={() => this.changeMood(colorCycles)}></button>;
        }else if(this.props.TOCButton){
            button = <button key={Math.random} className="MoodRating" style={buttonStyle} onClick={() => this.changeMood(colorCycles)} disabled></button>
        }
        else{
            button = <button key={Math.random} className="MoodRating" style={buttonStyle} onClick={() => this.changeMood(colorCycles)}></button>;
        }

        if(this.props.name){
            output.push(<span key={this.props.name} className="MoodName">{this.props.name}</span>)
        }

        output.push(button);

        return (
            <div className="CalendarCell">
                {output}
            </div>
        );
    }
}