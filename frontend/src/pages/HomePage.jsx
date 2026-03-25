import AddTask from '@/components/AddTask';
import DateTimeFilter from '@/components/DateTimeFilter';
import Footer from '@/components/Footer';
import {Header} from '@/components/Header'
import StatsAndFilter from '@/components/StatsAndFilter';
import TaskList from '@/components/TaskList';
import TaskListPagination from '@/components/TaskListPagination';

const HomePage = () => {
  return (
    <div className='container pt-8 mx-auto'>
      <div className='w-full max-w-2xl -6 mx-auto space-y-6'>
        <Header />

        <AddTask />

        <StatsAndFilter />

        <TaskList />

        <div className='flex flex-col items-center justify-between gap-6 sm:flex-row'>
          <TaskListPagination />
          <DateTimeFilter />
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default HomePage;