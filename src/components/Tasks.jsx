import {useState,useEffect} from 'react';
import axios from 'axios';

import './tasks.scss';

import TaskItem from './TaskItem';

const Tasks = () => {
    const [tasks, setTask] = useState([]);
    
    const fetchTasks = async () =>{
      try{
        const {data} = await axios.get ('https://fsc-task-manager-backend.herokuapp.com/tasks');
    
          setTask(data);
        } catch (error){
               console.log(error);
      }
    };
      useEffect (() =>{
        fetchTasks();
    },[]);

 return (
    <div className="tasks-container">
        <h2>Minhas tarefas</h2>

        <div className="last-tasks">
            <h3>Últimas tarefas</h3>
            <div className='tasks-list'>
                {tasks
                    .filter((task) => task.isCompleted === false)
                    .map((lastTask) => (
                      <TaskItem task={lastTask}/>
                          
                        ))}
          
             </div>
        </div>

        <div className="completed-tasks">
            <h3>Tarefas concluidas</h3>
            <div className="tasks-list"></div>
            {tasks
                        .filter((task) => task.isCompleted)
                        .map((completedTask) => (
                              <p>{completedTask.description}</p>
                        ))}
        </div>

        </div>
);
};
export default Tasks;