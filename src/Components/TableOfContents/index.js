import React, { Component } from 'react';
import Mood from '../Calendar/Mood';

export default class extends Component{
    constructor(props) {
        super(props)
        this.state = {
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
            {ListOfMoods}
          </div>
        )
      }
}