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

    changeMood(){
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

        colorCycles.map((colorCycle, index) => {
            if(this.state.mood.color === colorCycle.current){
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

        let color = this.state.mood.color;
        let moodName = "";
        let button = <button className="MoodRating" style={buttonStyle} onClick={this.changeMood}></button>;

        if(color){
            buttonStyle.backgroundColor = color;
        }

        if(this.props.LeapYearDay){
            button = <button className = "MoodRating" id="LeapYearDay" style={buttonStyle} onClick={this.changeMood}></button>;
        }

        if(this.props.name){
            moodName = <span className="MoodName">{this.props.name}</span>;
        }

        if(this.props.TOCButton){
            button = <button className="MoodRating" style={buttonStyle} disabled></button>
        }

        return (
            <div className="CalendarCell">
                {moodName}
                {button}
            </div>
        );
    }
}