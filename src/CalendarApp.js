import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { store } from './store';

//CSS
import './Contents/CSS/App.css';

//Compoonents
import Stats from './Components/Stats'
import Calendar from './Components/Calendar'
import TableOfContents from './Components/TableOfContents'

export default class CalendarApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: true
    };
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  render() {
    return (
      <Provider store={store} >
          <div className="App">
            <div className="Buffer">
              <h2>Table of Contents</h2>
              <TableOfContents history = {this.props.history}/>
            </div>
            <div className="Calendar-Container">
              <h1>Calendar</h1>
              <Calendar />
            </div>
            <div className="Buffer">
              <h1>Stats</h1>
              <Stats />
            </div>
          </div>
      </Provider>
    );
  }
}