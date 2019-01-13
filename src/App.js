import React, { Component } from 'react';
import Stats from './Components/Stats'
import TableOfContents from './Components/TableOfContents'
import Calendar from './Components/Calendar'
import './Contents/CSS/App.css';

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
