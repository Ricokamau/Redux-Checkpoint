// src/store.js

import { createStore } from 'redux';
import tasksReducer from './redux/reducers';

const store = createStore(tasksReducer);

export default store;
