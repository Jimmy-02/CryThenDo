import express from 'express';
import taskRouters from './routes/taskRouters.js';
const app = express();

app.use("/api/tasks", taskRouters);

app.listen(5001, () => {
  console.log('Server is running on port 5001');
});

