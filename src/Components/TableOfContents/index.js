import React, { Component } from 'react';
import Mood from '../Calendar/Mood';

export default class extends Component{
    constructor(props) {
        super(props)
        this.state = {
        }
      }
      
      handleChange(e){
        let sel = document.getElementById("LeapYearSelect");
        let text= sel.options[sel.selectedIndex].text;

        text === "Yes" ? document.getElementById("LeapYearDay").style.display = "" : document.getElementById("LeapYearDay").style.display = "none";
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