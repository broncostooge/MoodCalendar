import React, { Component } from 'react';
import { store } from '../../store';
import Modal from 'react-responsive-modal';
import firebase from '../../Firebase'
import { connect } from 'react-redux';

class Mood extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mood: {
                name: this.props.name || "default",
                month: this.props.month,
                day: this.props.day,
                color: this.props.Doc[this.props.month + ' ' + this.props.day] || this.props.color || "gray",
                note: this.props.Doc[this.props.month + ' ' + this.props.day + ' note'] || ""
            },
            open: false,
        };
    }
    
    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };
    
    dispatchIncreaseMoodToStore(colorToChangeTo){
        switch(colorToChangeTo){
            case "red":
                store.dispatch({ type: 'INCREASE_HORRIBLE_MOOD_COUNT' });
                firebase.firestore().collection("UserMoodCalendar").doc(firebase.auth().currentUser.uid).get().then((thisDoc) => {
                    firebase.firestore().collection("UserMoodCalendar").doc(firebase.auth().currentUser.uid).update({Horrible: thisDoc.data().Horrible + 1 });
                })
                break;
            case "orange":
                store.dispatch({ type: 'INCREASE_BAD_MOOD_COUNT' });
                firebase.firestore().collection("UserMoodCalendar").doc(firebase.auth().currentUser.uid).get().then((thisDoc) => {
                    firebase.firestore().collection("UserMoodCalendar").doc(firebase.auth().currentUser.uid).update({Bad: thisDoc.data().Bad + 1 });
                })
                break;
            case "yellow":
                store.dispatch({ type: 'INCREASE_AVERAGE_MOOD_COUNT' });
                firebase.firestore().collection("UserMoodCalendar").doc(firebase.auth().currentUser.uid).get().then((thisDoc) => {
                    firebase.firestore().collection("UserMoodCalendar").doc(firebase.auth().currentUser.uid).update({Average: thisDoc.data().Average + 1 });
                })
                break;
            case "blue":
                store.dispatch({ type: 'INCREASE_GOOD_MOOD_COUNT' });
                firebase.firestore().collection("UserMoodCalendar").doc(firebase.auth().currentUser.uid).get().then((thisDoc) => {
                    firebase.firestore().collection("UserMoodCalendar").doc(firebase.auth().currentUser.uid).update({Good: thisDoc.data().Good + 1 });
                })
                break;
            case "green":
                store.dispatch({ type: 'INCREASE_GREAT_MOOD_COUNT' });
                firebase.firestore().collection("UserMoodCalendar").doc(firebase.auth().currentUser.uid).get().then((thisDoc) => {
                    firebase.firestore().collection("UserMoodCalendar").doc(firebase.auth().currentUser.uid).update({Great: thisDoc.data().Great + 1 });
                })
                break;
            default:
        }
    }

    dispatchDecreaseMoodToStore(colorChangingFrom){
        switch(colorChangingFrom){
            case "red":
                store.dispatch({ type: 'DECREASE_HORRIBLE_MOOD_COUNT' });
                firebase.firestore().collection("UserMoodCalendar").doc(firebase.auth().currentUser.uid).get().then((thisDoc) => {
                    firebase.firestore().collection("UserMoodCalendar").doc(firebase.auth().currentUser.uid).update({Horrible: thisDoc.data().Horrible - 1 });
                })
                break;
            case "orange":
                store.dispatch({ type: 'DECREASE_BAD_MOOD_COUNT' });
                firebase.firestore().collection("UserMoodCalendar").doc(firebase.auth().currentUser.uid).get().then((thisDoc) => {
                    firebase.firestore().collection("UserMoodCalendar").doc(firebase.auth().currentUser.uid).update({Bad: thisDoc.data().Bad - 1 });
                })
                break;
            case "yellow":
                store.dispatch({ type: 'DECREASE_AVERAGE_MOOD_COUNT' });
                firebase.firestore().collection("UserMoodCalendar").doc(firebase.auth().currentUser.uid).get().then((thisDoc) => {
                    firebase.firestore().collection("UserMoodCalendar").doc(firebase.auth().currentUser.uid).update({Average: thisDoc.data().Average - 1 });
                })
                break;
            case "blue":
                store.dispatch({ type: 'DECREASE_GOOD_MOOD_COUNT' });
                firebase.firestore().collection("UserMoodCalendar").doc(firebase.auth().currentUser.uid).get().then((thisDoc) => {
                    firebase.firestore().collection("UserMoodCalendar").doc(firebase.auth().currentUser.uid).update({Good: thisDoc.data().Good - 1 });
                })
                break;
            case "green":
                store.dispatch({ type: 'DECREASE_GREAT_MOOD_COUNT' });
                firebase.firestore().collection("UserMoodCalendar").doc(firebase.auth().currentUser.uid).get().then((thisDoc) => {
                    firebase.firestore().collection("UserMoodCalendar").doc(firebase.auth().currentUser.uid).update({Great: thisDoc.data().Great - 1 });
                })
                break;
            default:
        }

    }

    changeMood(colorToChangeTo, colorChangingFrom){
        
        this.dispatchIncreaseMoodToStore(colorToChangeTo);

        this.dispatchDecreaseMoodToStore(colorChangingFrom);

        firebase.firestore().collection("UserMoodCalendar").doc(firebase.auth().currentUser.uid).get().then((thisDoc) => {
            firebase.firestore().collection("UserMoodCalendar").doc(firebase.auth().currentUser.uid).update({[this.state.mood.month +' '+ this.state.mood.day]: this.state.mood.color });
        })
        
        this.setState({mood:{name:this.state.mood.name, month:this.state.mood.month, day:this.state.mood.day, color:colorToChangeTo, note:this.state.mood.note}});
    }

    saveNote(){
        const noteText =  document.getElementById("NoteTextArea");
        const noteSaved = document.getElementById("NoteSaved");

        firebase.firestore().collection("UserMoodCalendar").doc(firebase.auth().currentUser.uid).get().then((thisDoc) => {
            firebase.firestore().collection("UserMoodCalendar").doc(firebase.auth().currentUser.uid).update({[this.state.mood.month + ' ' + this.state.mood.day + ' note' ]: this.state.mood.note });
        })

        this.setState({mood:{name:this.state.mood.name, month:this.state.mood.month, day:this.state.mood.day, color:this.state.mood.color, note: noteText.value}});
        noteSaved.style.display = "block";

    }

    setTextArea(note){
        setTimeout(function(){
            if(document.getElementById("NoteTextArea")){
                document.getElementById("NoteTextArea").value = note;
            }
        }, 10);
    }

    render() {
        const buttonStyle = {
            backgroundColor: "gray"
        };

        const output = [];

        let button;

        buttonStyle.backgroundColor = this.state.mood.color;

        const colorOfMood = this.props.Doc[this.props.month + ' ' + this.props.day];

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

function mapStateToProps(state) {
    return { 
        User: state.User,
        Doc: state.Doc
    };
  }

export default connect(mapStateToProps)(Mood);