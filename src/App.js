import React, { Component } from 'react';
import Stats from './Components/Stats'
import TableOfContents from './Components/TableOfContents'
import Calendar from './Components/Calendar'
import './Contents/CSS/App.css';
import myReducer from './reducers'
import { Provider } from 'react-redux'

const { createStore } = require('redux');

const store = createStore(myReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store} >
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
              <Stats 
                IncreaseHorrible={() => store.dispatch({ type: 'INCREASE_HORRIBLE_MOOD_COUNT' })}
              />
            </div>
        </div>
      </Provider>
    );
  }
}
export default App;
