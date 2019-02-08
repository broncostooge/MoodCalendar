import React, { Component } from 'react';
import Routes from './Routes'
import { Provider } from 'react-redux'
import { store } from './store';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    };
  }

  render() {

    return (
      <Provider store={store} >
        <Routes />
      </Provider>
    );
  };
}
export default App;