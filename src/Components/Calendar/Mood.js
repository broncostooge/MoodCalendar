import React, { Component } from 'react';
import { store } from '../../store';
import Modal from 'react-responsive-modal';

export default class Mood extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mood: {
                name: this.props.name || "default",
                month: this.props.month,
                day: this.props.day,
                color: localStorage.getItem(this.props.month + ' ' + this.props.day) || this.props.color || "white",
                note: ""
            },
            open: false,
        };
    }

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
        const noteSaved = document.getElementById("NoteSaved");
        noteSaved.style.display = "none";
    };
    
    dispatchIncreaseMoodToStore(colorToChangeTo){
        switch(colorToChangeTo){
            case "red":
                store.dispatch({ type: 'INCREASE_HORRIBLE_MOOD_COUNT' });
                break;
            case "orange":
                store.dispatch({ type: 'INCREASE_BAD_MOOD_COUNT' });
                break;
            case "yellow":
                store.dispatch({ type: 'INCREASE_AVERAGE_MOOD_COUNT' });
                break;
            case "blue":
                store.dispatch({ type: 'INCREASE_GOOD_MOOD_COUNT' });
                break;
            case "green":
                store.dispatch({ type: 'INCREASE_GREAT_MOOD_COUNT' });
                break;
            default:
        }
    }

    dispatchDecreaseMoodToStore(colorChangingFrom){
        switch(colorChangingFrom){
            case "red":
                store.dispatch({ type: 'DECREASE_HORRIBLE_MOOD_COUNT' });
                break;
            case "orange":
                store.dispatch({ type: 'DECREASE_BAD_MOOD_COUNT' });
                break;
            case "yellow":
                store.dispatch({ type: 'DECREASE_AVERAGE_MOOD_COUNT' });
                break;
            case "blue":
                store.dispatch({ type: 'DECREASE_GOOD_MOOD_COUNT' });
                break;
            case "green":
                store.dispatch({ type: 'DECREASE_GREAT_MOOD_COUNT' });
                break;
            default:
        }

    }

    changeMood(colorToChangeTo, colorChangingFrom){
        
        this.dispatchIncreaseMoodToStore(colorToChangeTo);

        this.dispatchDecreaseMoodToStore(colorChangingFrom);
        
        localStorage.setItem(this.props.month + ' ' + this.props.day, colorToChangeTo);
        
        this.setState({mood:{name:this.state.mood.name, month:this.state.mood.month, day:this.state.mood.day, color:colorToChangeTo, note:this.state.mood.note}});
    }

    saveNote(){
        const noteText =  document.getElementById("NoteTextArea");
        const noteSaved = document.getElementById("NoteSaved");

        this.setState({mood:{name:this.state.mood.name, month:this.state.mood.month, day:this.state.mood.day, color:this.state.mood.color, note: noteText.value
        }}, function() {
        });
        noteSaved.style.display = "block";

    }

    setTextArea(note){
        setTimeout(function(){
            if(document.getElementById("NoteTextArea")){
                document.getElementById("NoteTextArea").value = note;
            }
        }, 100);
    }

    render() {

        const buttonStyle = {
            backgroundColor: "white"
        };
        
        /*
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
        ]*/

        const output = [];

        let button;

        buttonStyle.backgroundColor = this.state.mood.color;

        const colorOfMood = localStorage.getItem(this.state.mood.month + ' ' + this.state.mood.day);

        if(colorOfMood && !this.props.TOCButton){
            buttonStyle.backgroundColor = colorOfMood;
        }

        if(this.props.LeapYearDay){
            button = <button key={Math.random} className = "MoodRating" id="LeapYearDay" style={buttonStyle} onClick={() => {this.onOpenModal()}}></button>;
        }else if(this.props.TOCButton){
            button = <button key={Math.random} className="MoodRating" style={buttonStyle} disabled></button>
        }
        else{
            button = <button key={Math.random} className="MoodRating" style={buttonStyle} onClick={() => {this.onOpenModal()}}></button>;
        }

        if(this.props.name){
            output.push(<span key={this.props.name} className="MoodName">{this.props.name}</span>)
        }

        output.push(button);

        return (
            <div className="CalendarCell">
                <Modal onEntered={this.setTextArea(this.state.mood.note)} open={this.state.open} onClose={this.onCloseModal} center>
                    <div className="ModalWindow">
                        <div className="LeftSideModal">
                            <div>
                                <button className="ModalHorribleButton MoodRating ModalButton" onClick={() => {this.changeMood("red", this.state.mood.color)}}></button>Horrible
                            </div>
                            <div>
                                <button className="ModalBadButton MoodRating ModalButton" onClick={() => {this.changeMood("orange", this.state.mood.color)}}></button>Bad
                            </div>
                            <div>
                                <button className="ModalAverageButton MoodRating ModalButton" onClick={() => {this.changeMood("yellow", this.state.mood.color)}}></button>Average 
                            </div>
                            <div>
                                <button className="ModalGoodButton MoodRating ModalButton" onClick={() => {this.changeMood("blue", this.state.mood.color)}}></button>Good
                            </div>
                            <div>
                                <button className="ModalGreatButton MoodRating ModalButton" onClick={() => {this.changeMood("green", this.state.mood.color)}}></button>Great
                            </div>
                        </div>
                        <div className="RightSideModal">
                            <h2>Leave A Note About The Day</h2>
                            <textarea id="NoteTextArea">{this.state.note}</textarea>
                            <button onClick={() => {this.saveNote()}}>Save Note</button>
                            <span id="NoteSaved">Note Saved</span>
                        </div>
                    </div>
                </Modal>
                {output}
            </div>
        );
    }
}