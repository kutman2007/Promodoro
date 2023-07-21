import React, { useState } from 'react';
import { AiOutlineCloseCircle, AiFillCheckCircle, AiFillDelete } from 'react-icons/ai';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import './style.css'
function TodoList() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const onclickadd = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, { task, completed: false }]);
      setTask('');
    }
  };

  const Complete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const Delete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div>

      <input className='input' type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder="Жазуу" />
      <ArrowDownwardIcon sx={{ fontSize: 40 }} className='Add' onClick={onclickadd} />
      <ul>
        {tasks.map((task, index) => (
          <div>

            <li className='dad' key={index}>
              {task.completed ? (
                <AiFillCheckCircle id='f' className='completed' onClick={() => Complete(index)} />
              ) : (
                <AiOutlineCloseCircle onClick={() => Complete(index)} />
              )}
              <span id='sad' className={task.completed ? 'completed' : ''}>{task.task}</span>
              <AiFillDelete className='completed2' onClick={() => Delete(index)} />

            </li>
            <hr />
          </div>
        ))}
      </ul>

    </div>
  );
}

export default TodoList;
