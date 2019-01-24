import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './store';
import Logout from './HomePage/Logout'

//CSS
import './Contents/CSS/App.css';

//Compoonents
import Stats from './Components/Stats'
import TableOfContents from './Components/TableOfContents'
import Calendar from './Components/Calendar'

export default class CalendarApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: true
    };
  }

  onCloseModal = () => {
    this.setState({ open: false });
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  render() {

    return (
      <Provider store={store} >
        <PersistGate loading={null} persistor={persistor}>
          <div className="App">
            <div className="Buffer">
              <h2>Table of Contents</h2>
              <Logout />
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
        </PersistGate>
      </Provider>
    );
  }
}