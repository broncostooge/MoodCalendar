import React, { Component } from 'react';

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