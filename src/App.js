import axios from "axios";
import { useState, useEffect } from "react";
import TaskItem from "./components/TaskItem";

const App = () => {

  const [tasks, setTask] = useState([
    {
      id: "1",
      description: "Estudar Programação",
      isCompleted: false,
    },
    {
      id: "2",
      description: "Estudar",
      isCompleted: true,
    },
  ])



const fetchTasks = async () =>{
  try{
    const {data} = await axios.get ('https://fsc-task-manager-backend.herokuapp.com/tasks');

      setTask(data);
    } catch (error){
           console.log(error);
  }
}
  useEffect (() =>{
    fetchTasks()
},[]);
  return (
    <>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
      ))}
    </>
  );

};

export default App;
