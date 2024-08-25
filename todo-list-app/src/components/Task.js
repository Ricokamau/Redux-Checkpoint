// src/components/Task.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask, toggleTask } from '../redux/actions';

function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(task.description);
  const dispatch = useDispatch();

  const handleEdit = () => {
    setIsEditing(!isEditing);
    if (isEditing) {
      dispatch(editTask(task.id, newDescription));
    }
  };

  return (
    <div className={`task ${task.isDone ? 'done' : ''}`}>
      {isEditing ? (
        <input
          type="text"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        />
      ) : (
        <span>{task.description}</span>
      )}
      <button onClick={() => dispatch(toggleTask(task.id))}>
        {task.isDone ? 'Undo' : 'Done'}
      </button>
      <button onClick={handleEdit}>
        {isEditing ? 'Save' : 'Edit'}
      </button>
    </div>
  );
}

export default Task;
