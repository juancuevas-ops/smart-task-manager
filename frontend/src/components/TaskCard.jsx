// frontend/src/components/TaskCard.jsx
import React from 'react';

const TaskCard = ({ task }) => {
  return (
    <div className="task-card">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Prioridad: {['Baja', 'Media', 'Alta'][task.priority - 1]}</p>
      <p>Estado: {task.completed ? 'Completada' : 'Pendiente'}</p>
    </div>
  );
};

export default TaskCard;
