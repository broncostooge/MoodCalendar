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
      if(this.state.mood.color === colorCycle.current)
      {
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

    if(this.props.TOCButton)
    {
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
    }
  }
    render() {
      const ListOfMonthsAndDays = [
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
      const columnOfMonths = [];

      ListOfMonthsAndDays.map((month, index) => {
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

class Stats extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className="Stats">
        <div className="Count">
          <Count />
        </div>
        <div className="ColumnGraph">
          <ColumnGraph />
        </div>
        <div className="PieGraph">
          <PieGraph />
        </div>
      </div>
    )
  }
}

class Count extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render() {

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

    let CountList = []

    moods.map((mood, index) => {
      return CountList.push(<tr key={index}>{mood.name}Count:<td key={index} className={mood.name+'Count'}>0</td></tr>)
    })

    return (
      <div>
        <h3>Count</h3>
        <table>
          <tbody>
            {CountList}
          </tbody>
        </table>
      </div>
    )
  }
}

class ColumnGraph extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }
  render() {
    return (
      <div>
      <h3>Column Graph</h3>
      </div>
    )
  }
}

class PieGraph extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }
  render() {
    return (
      <div>
      <h3>Pie Graph</h3>
      </div>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      MoodCounter: {
        Horrible: 0,
        Bad: 0,
        Average: 0,
        Good: 0,
        Great: 0
      }
    }
    
  }

  render() {
    return (
      <div className="App">
        <div className="Buffer">
          <h2>Table of Contents</h2>
          <TableOfContents />
        </div>
        <div className="Calendar">
        <h2>Calendar</h2>
          <Calendar />
        </div>
        <div className="Buffer">
          <h2>Stats</h2>
          <Stats />
        </div>
      </div>
    );
  }
}

export default App;
