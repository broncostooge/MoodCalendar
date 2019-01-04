import React, { Component } from 'react';
import './App.css';

class TableOfContents extends Component {
  render() {
    return (
      <div className="TableOfContents">
      <h2 className = "TableOfContentsHeader">Table Of Contents</h2>
      </div>
    )
  }
}

class ColumnOfNumbers extends Component {
  render() {
    const options = [];

    for(let i = 1; i < 32; i++)
    {
      options.push(<tr key = {i}><td key = {i}>{i}</td></tr>);
    }

    return (
      <table className="DaysTextColumnTable">
        <thead><tr><td>&nbsp;</td></tr></thead>
        <tbody>{options}</tbody>
      </table>
    )
  }
}

class Square extends Component {
  render() {
    return (
      <tr>
        <td>
          <button className="Rating" key ={this.props.days}></button>
        </td>
      </tr>
    );
  }
}

class Column extends Component {
  render() {

    const options = [];
    let monthParameter = [];
    monthParameter = this.props.Month.split(' ');
 
    let days = parseInt(monthParameter[1]);

    for (let i = 0; i < days; i++){
      options.push(<Square key = {i}/>);
    }

    return (
      <table className="Month">
        <thead>
          <tr>
            <td>
              {monthParameter[0][0]}
            </td>
          </tr>
        </thead>
        <tbody>
            {options}
        </tbody>
      </table>
      
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      months: ["January 31", "Febuary 28", "March 31" ,"April 30", "May 31", "June 30", "July 31", "August 31", "September 30", "October 31", "November 30", "December 31"],
      moods: ["Horrible", "Bad", "Average", "Good", "Great"]
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
          <div className="Buffer">
            <TableOfContents />
          </div>
          <div className="Calendar">
            <ColumnOfNumbers />
            {this.renderCalendar()}
          </div>
          <div className="Buffer"></div>
      </div>
    );
  }
}

export default App;