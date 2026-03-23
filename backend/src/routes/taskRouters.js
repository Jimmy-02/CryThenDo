import express from 'express';
import { createTask, getAllTasks, updateTask } from '../controllers/taskControllers.js';

const router = express.Router();

router.get("/", getAllTasks);

router.post("/", createTask);

router.put("/:id", updateTask);
export default router;