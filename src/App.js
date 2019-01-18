import React, { Component } from 'react';
import Stats from './Components/Stats'
import TableOfContents from './Components/TableOfContents'
import Calendar from './Components/Calendar'
import './Contents/CSS/App.css';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './store';

class App extends Component {
  render() {
    console.log(store);
    return (
      <Provider store={store} >
        <PersistGate loading={null} persistor={persistor}>
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
        </PersistGate>
      </Provider>
    );
  }
}
export default App;
