// backend/routes/tasks.js
const express = require('express');
const router = express.Router();
const Task = require('../models/Task'); // Importa el modelo

// Obtener todas las tareas
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Crear una nueva tarea
router.post('/', async (req, res) => {
  const { title, description, priority } = req.body;

  const task = new Task({
    title,
    description,
    priority,
  });

  try {
    const newTask = await task.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;

