import React, { Component } from 'react';
import Mood from '../Calendar/Mood';
import { store } from '../../store'

export default class extends Component{
    constructor(props) {
        super(props)
        this.state = {
        }
      }
      
      handleChange(e){
        const sel = document.getElementById("LeapYearSelect");
        let leapYearButton = document.getElementById("LeapYearDay");
        let text= sel.options[sel.selectedIndex].text;

        if(text === "Yes"){
          leapYearButton.style.display = "";
        }
        else{
          leapYearButton.style.display = "none";

          if(leapYearButton.style.backgroundColor === "red"){
            store.dispatch({ type: 'DECREASE_HORRIBLE_MOOD_COUNT' });
            console.log("red");
          }
          else if(leapYearButton.style.backgroundColor === "orange"){
            store.dispatch({ type: 'DECREASE_BAD_MOOD_COUNT' });
          }
          else if(leapYearButton.style.backgroundColor === "yellow"){
            store.dispatch({ type: 'DECREASE_AVERAGE_MOOD_COUNT' });
          }
          else if(leapYearButton.style.backgroundColor === "blue"){
            store.dispatch({ type: 'DECREASE_GOOD_MOOD_COUNT' });
          }
          else if(leapYearButton.style.backgroundColor === "green"){
            store.dispatch({ type: 'DECREASE_GREAT_MOOD_COUNT' });
          }

          leapYearButton.style.backgroundColor = "white";
          localStorage.removeItem('Febuary 28');

        }
      }

      render() {
    
        const ListOfMoods = [];
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
    
        moods.map((mood, index) => {
          return ListOfMoods.push(<Mood TOCButton = {true} name={mood.name} color={mood.color} key ={index}/>);
        })

        return (
          <div>
          Leap Year
          <select id="LeapYearSelect" onChange={this.handleChange.bind(this)}>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
            {ListOfMoods}
          </div>
        )
      }
}