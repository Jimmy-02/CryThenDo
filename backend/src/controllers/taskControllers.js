import Task from '../models/Task.js';

export const getAllTasks = (req, res) => {
    res.status(200).send("All tasks");
}

export const createTask = (req, res) => {
    res.status(201).send("Task created");
}

export const updateTask = (req, res) => {
    res.status(200).send("Task updated");
}

export const deleteTask = (req, res) => {
    res.status(200).send("Task deleted");
}