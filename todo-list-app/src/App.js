// src/App.js

import React from 'react';
import './styles.css';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';

function App() {
  return (
    <div className="App">
      <h1>Redux To-Do List</h1>
      <AddTask />
      <ListTask />
    </div>
  );
}

export default App;
