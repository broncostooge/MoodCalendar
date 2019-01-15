import myReducer from '../reducers'

const { createStore } = require('redux');

const store = createStore(myReducer);

export default store