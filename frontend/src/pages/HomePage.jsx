import AddTask from '@/components/AddTask';
import DateTimeFilter from '@/components/DateTimeFilter';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import StatsAndFilter from '@/components/StatsAndFilter';
import TaskList from '@/components/TaskList';
import TaskListPagination from '@/components/TaskListPagination';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import axios
 from 'axios';
const HomePage = () => {
  const [taskBuffer, setTaskBuffer] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await axios.get("http://localhost:5001/api/tasks");
      setTaskBuffer(res.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
      toast.error("Failed to fetch tasks. Please try again later.");
    }
  }
  return (
    <div className="min-h-screen w-full bg-[#fefcff] relative">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
        radial-gradient(circle at 30% 70%, rgba(173, 216, 230, 0.35), transparent 60%),
        radial-gradient(circle at 70% 30%, rgba(255, 182, 193, 0.4), transparent 60%)`,
        }}
      />
      <div className="container pt-8 mx-auto relative z-10">
        <div className="w-full max-w-2xl p-6 mx-auto space-y-6">
          <Header />

          <AddTask />

          <StatsAndFilter />

          <TaskList filteredTasks={taskBuffer}/>

          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <TaskListPagination />
            <DateTimeFilter />
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default HomePage;