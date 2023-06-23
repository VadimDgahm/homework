import React, { FC } from "react";
import Header from "./Header";
import FormAddTask from "./FormAddTask";
import TaskList from "./TaskList";
import { TaskType } from "./App";

type TodoListPropsType = {
    title: string
    tasks: Array<TaskType>
}
const TodoList: FC<TodoListPropsType> = (props) => {
return (
    <div>
    <Header title={props.title}/>
    <FormAddTask />
    <TaskList tasks={props.tasks} />
</div>
)
}

export default TodoList