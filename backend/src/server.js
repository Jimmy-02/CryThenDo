import express from 'express';
import taskRouters from './routes/taskRouters.js';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

dotenv.config();

const app = express();

connectDB();

app.use("/api/tasks", taskRouters);

app.listen(5001, () => {
  console.log('Server is running on port 5001');
});

