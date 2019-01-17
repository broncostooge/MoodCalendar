import myReducer from '../reducers'

import { createStore } from 'redux';

const store = createStore(myReducer);

export default store