export const getAllTasks = (req, res) => {
    req.status(200).send("All tasks");
}

export const createTask = (req, res) => {
    req.status(201).send("Task created");
}

export const updateTask = (req, res) => {
    req.status(200).send("Task updated");
}

export const deleteTask = (req, res) => {
    req.status(200).send("Task deleted");
}