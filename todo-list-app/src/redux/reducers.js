// src/redux/reducers.js

import { ADD_TASK, EDIT_TASK, TOGGLE_TASK, FILTER_TASKS } from './actions';

const initialState = {
  tasks: [],
  filter: 'all', // can be 'all', 'done', or 'notDone'
};

function tasksReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.id
            ? { ...task, description: action.payload.newDescription }
            : task
        ),
      };

    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload
            ? { ...task, isDone: !task.isDone }
            : task
        ),
      };

    case FILTER_TASKS:
      return {
        ...state,
        filter: action.payload,
      };

    default:
      return state;
  }
}

export default tasksReducer;
