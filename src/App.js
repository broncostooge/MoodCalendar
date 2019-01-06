import React, { Component } from 'react';
import './App.css';

class ColumnOfNumbers extends Component {
  render() {
    const days = [];

    for(let i = 0; i < 32; i++)
    {
      days.push(<div key ={i} className="CalendarCell">{i}</div>);
    }

    return (
      <div className="CalendarColumn">{days}</div>
    )
  }
}

class Mood extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mood: {
        name: this.props.name,
        color: this.props.color || "white"
      },
      colorCycle: [ 
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
          next: "red",
        }
      ]
    };

    this.changeMood = this.changeMood.bind(this);
  }
  
  changeMood(){
    this.state.colorCycle.map((colorCycle, index) => {
      if(this.state.mood.color === colorCycle.current)
      {
        this.setState({mood:{name:this.state.mood.name, color: colorCycle.next}});
      }
      console.log(this.state.mood.color)
    })
  }

  render() {

    let color = this.state.mood.color;
    let moodName = "";
    const buttonStyle = {
      backgroundColor: "white"
    };

    let button = <button className="MoodRating" style={buttonStyle} onClick={this.changeMood}></button>;

    if(color){
      buttonStyle.backgroundColor = color;
    }

    if(this.props.name){
      moodName = <span className="MoodName">{this.props.name}</span>;
    }

    if(this.props.TOCButton)
    {
      button = <button className="MoodRating" style={buttonStyle} onClick={this.changeMood} disabled></button>
    }

    return (
      <div className="CalendarCell">
        {moodName}
        {button}
      </div>
    );
  }
}

class Month extends Component {
  constructor(props) {
    super(props)
    this.state = {
      month: {
        name: this.props.name,
        days: this.props.days
      }
    }
  }
  render() {
    
    const buttons = [];

    for(let i = 0; i < this.state.month.days; i++)
    {
      buttons.push(<Mood TOCButton = {false} key={i} />);
    }

    return (
      <div className = "CalendarColumn">
        <div className = "CalendarCell">
          {this.state.month.name[0]}
        </div>
        {buttons}
      </div>
    );
  }
}

class Calendar extends Component {
  constructor(props){
    super(props)
    this.state = {
      months: [
        {
          name: "January",
          days: 31
        },
        {
          name: "Febuary",
          days: 29
        },
        {
          name: "March",
          days: 31
        },
        {
          name: "April",
          days: 30
        },
        {
          name: "May",
          days: 31
        },
        {
          name: "June",
          days: 30
        },
        {
          name: "July",
          days: 31
        },
        {
          name: "August",
          days: 31
        },
        {
          name: "September",
          days: 30
        },
        {
          name: "October",
          days: 31
        },
        {
          name: "November",
          days: 30
        },
        {
          name: "December",
          days: 31
        }
      ]
    }
  }
    render() {

      const columnOfMonths = [];

      this.state.months.map((month, index) => {
        return columnOfMonths.push(<Month name={month.name} days={month.days} key={index} />)
      });

    return (
      <div className="Calendar">
        <ColumnOfNumbers />
        {columnOfMonths}
      </div>
    );
  }
}

class TableOfContents extends Component {
  constructor(props) {
    super(props)
    this.state = {
      moods: [
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
    }
  }
  render() {

    const ListOfMoods = [];

    this.state.moods.map((mood, index) => {
      return ListOfMoods.push(<Mood TOCButton = {true} name={mood.name} color={mood.color} key ={index}/>);
    })

    return (
      <div>
        {ListOfMoods}
      </div>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className="App">
          <div className="Buffer">
            <TableOfContents />
          </div>
          <div className="Calendar">
            <Calendar />
          </div>
          <div className="Buffer"></div>
      </div>
    );
  }
}

export default App;
