import React, { useState } from 'react';
import { AiOutlineCloseCircle, AiFillCheckCircle,AiFillDelete ,AiOutlineFolderAdd} from 'react-icons/ai';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import './style.css'
function TodoList() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, { task, completed: false }]);
      setTask('');
    }
  };

  const handleToggleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div>
        
      <input className='input' type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder="Enter task" />
      <ArrowDownwardIcon sx={{ fontSize: 40 }}  className='Add' onClick={handleAddTask}/>
      <ul>
        {tasks.map((task, index) => (
          <div>

                   <li key={index}>
            {task.completed ? (
              <AiFillCheckCircle className='completed' onClick={() => handleToggleComplete(index)} />
            ) : (
              <AiOutlineCloseCircle onClick={() => handleToggleComplete(index)} />
            )}
            <span  className={task.completed ? 'completed' : ''}>{task.task}</span>
            <AiFillDelete className='completed2' onClick={() => handleDeleteTask(index)}/>
        
          </li>
          <hr />
          </div> 
        ))}
      </ul>

    </div>
  );
}

export default TodoList;
