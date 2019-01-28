import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './store';

//CSS
import './Contents/CSS/App.css';

//Compoonents
import Stats from './Components/Stats'
import Calendar from './Components/Calendar'
import Logout from './HomePage/Logout'

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
        <Logout/>
          <div className="App">
            <div className="Calendar">
              <Calendar />
            </div>
            <div className="Buffer">
              <h1>Stats</h1>
              <Stats />
            </div>
          </div>
        </PersistGate>
      </Provider>
    );
  }
}