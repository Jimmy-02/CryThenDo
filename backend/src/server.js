import express from 'express';
import taskRouters from './routes/taskRouters.js';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

dotenv.config();

const PORT = process.env.PORT || 5001;

const app = express();


app.use(express.json());

app.use("/api/tasks", taskRouters);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});


