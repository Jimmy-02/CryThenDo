import Task from '../models/Task.js';

export const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        console.error('Error fetching tasks:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const createTask = async (req, res) => {
    try {
        const {title} = req.body;
        const task = new Task({title});
        const newTask = await task.save();
        res.status(201).json(newTask);
    } catch (error) {
        console.error('Error creating task:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const updateTask = (req, res) => {
    res.status(200).send("Task updated");
}

export const deleteTask = (req, res) => {
    res.status(200).send("Task deleted");
}