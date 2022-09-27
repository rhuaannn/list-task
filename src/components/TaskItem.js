import React from "react";
import { useEffect } from "react";

const TaskItem = (props) => {
    useEffect(()=>{
        console.log("Componente ")

        return () =>{
            console.log("remove")
        };
    },[]);
    return (
        <>
        <h1>{props.task.description}</h1>
        <p>{props.task.isCompleted ? "Completa" : "não completa"}</p>
        </>
    )};
export default TaskItem;