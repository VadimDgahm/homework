import React, { FC } from "react";
import Button from "./Button";
import { TaskType } from "./App";

type TaskListProps = {
    tasks: Array<TaskType>
}
const TaskList: FC<TaskListProps> = (props) => {
return (
    <>
    <ul>
        <li><input type="checkbox" onChange={()=>{}} checked={props.tasks[0].isDone}/> <span>{props.tasks[0].title}</span></li>
        <li><input type="checkbox" onChange={()=>{}} checked={props.tasks[1].isDone}/> <span>{props.tasks[1].title}</span></li>
        <li><input type="checkbox" onChange={()=>{}} checked={props.tasks[2].isDone}/> <span>{props.tasks[2].title}</span></li>
    </ul>
    <div>
        <Button title={'All'}/>
        <Button title={'Active'}/>
        <Button title={'Completed'}/>
    </div>
    </>
)
}

export default TaskList