import React, { Component } from 'react';
import './App.css';

class Square extends Component {
  render() {
    return (
      <button className="Rating"></button>
    );
  }
}

class Column extends Component {
  render() {
    return (
      <div className="Month">
        {this.props.Month}
        <div>
          <Square />
          <Square />
          <Square />
        </div>
      </div>
      
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      months: ["January", "Febuary", "March" ,"April", "May", "June", "July", "August", "September", "October", "November", "December"]
    }
  }
  renderCalendar() {
    return this.state.months.map((month, index) => (
      <Column Month={month} key ={index} />
    ));
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
         Mood Calendar
        </header>
        <div className="Calendar">
            {this.renderCalendar()}
        </div>
      </div>
    );
  }
}

export default App;
