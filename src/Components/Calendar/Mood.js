import React, { Component } from 'react';
//import { store } from '../../store';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')

export default class Mood extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mood: {
                name: this.props.name || "default",
                month: this.props.month,
                day: this.props.day,
                color: localStorage.getItem(this.props.month + ' ' + this.props.day) || this.props.color || "white",
                modalIsOpen: false
            }
        };
        

        this.changeMood = this.changeMood.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = '#f00';
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }
    
    changeMood(colorCycles){
        this.setState({modalIsOpen: true});/*
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
                localStorage.setItem(this.props.month + ' ' + this.props.day, colorCycle.next);
                return this.setState({mood:{name:this.state.mood.name, month:this.state.mood.month, day:this.state.mood.day, color:colorCycle.next}});
            }
            return null;
        })*/
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

        const colorOfMood = localStorage.getItem(this.state.mood.month + ' ' + this.state.mood.day);

        if(colorOfMood && !this.props.TOCButton){
            buttonStyle.backgroundColor = colorOfMood;
            console.log(this.state)
        }

        if(this.props.LeapYearDay){
            button = <button key={Math.random} className = "MoodRating" id="LeapYearDay" style={buttonStyle} onClick={() => this.changeMood(colorCycles)}></button>;
        }else if(this.props.TOCButton){
            button = <button key={Math.random} className="MoodRating" style={buttonStyle} onClick={() => this.changeMood(colorCycles)} disabled></button>
        }
        else{
            button = <button key={Math.random} className="MoodRating" style={buttonStyle} onClick={() => {this.changeMood(colorCycles)}}></button>;
        }

        if(this.props.name){
            output.push(<span key={this.props.name} className="MoodName">{this.props.name}</span>)
        }

        output.push(button);

        return (
            <div className="CalendarCell">
                <Modal
                isOpen={this.state.modalIsOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                style={customStyles}
                >

                    <h2 ref={subtitle => this.subtitle = subtitle}>Set Mood for {this.state.mood.month} {this.state.mood.day}</h2>
                    <button onClick={this.closeModal}>close</button>
                    <form>
                        <input />
                        <button onClick={() => this.setState({mood:{name:this.state.mood.name, month:this.state.mood.month, day:this.state.mood.day, color:"red"}})}>Horrible</button>
                        <button>Bad</button>
                        <button>Average</button>
                        <button>Good</button>
                        <button>Great</button>
                        <textbox></textbox>
                    </form>
                </Modal>
                {output}
            </div>
        );
    }
}