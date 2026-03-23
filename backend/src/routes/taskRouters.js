import express from 'express';
import { createTask, getAllTasks } from '../controllers/taskControllers.js';

const router = express.Router();

router.get("/", getAllTasks);

router.post("/", createTask)
export default router;