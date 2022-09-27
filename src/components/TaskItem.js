import React from "react";

const TaskItem = (props) => {

    return (
        <>
        <h1>{props.task.description}</h1>
        <p>{props.task.isCompleted ? "Completa" : "não completa"}</p>
        </>
    )};
export default TaskItem;