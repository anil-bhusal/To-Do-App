import './App.css';
import { Routes, Route } from "react-router-dom";
import Index from './pages';
import TaskList from './pages/taskList';
import CompletedTask from './pages/completedTask';
import TaskCompletionRate from './pages/taskCompletionRate';

function App() {

  return (
    <>
      <Routes>
        <Route exact path='/' element={<Index />} />
        <Route exact path='/task-list' element={<TaskList />} />
        <Route exact path='/completed-task' element={<CompletedTask />} />
        <Route exact path='/task-completion-rate' element={<TaskCompletionRate />} />
      </Routes>
    </>
  );
}

export default App;
