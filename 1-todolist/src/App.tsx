import React, { useState } from "react";
import "./App.css";
import TodoList from "./TodoList";
import { ChekedComponent } from "./ChekedComponent";

export type TaskType = {
  id: number;
  title: string;
  isDone: boolean;
};
export type TopCarType = {
  manufacturer: string;
  model: string;
};
function App() {
  const todoListTitle_1 = "What to learn";
  const todoListTitle_2 = "What to buy";
  const tasks_1: TaskType[] = [
    {
      id: 1,
      title: "HTML & CSS",
      isDone: true,
    },
    {
      id: 2,
      title: "JS/TS",
      isDone: true,
    },
    {
      id: 3,
      title: "React/Redux",
      isDone: true,
    },
  ];
  const topCars: Array<TopCarType> = [
    { manufacturer: "BMW", model: "m5cs" },
    { manufacturer: "Mercedes", model: "e63s" },
    { manufacturer: "Audi", model: "rs6" },
  ];

  const tasks_2: Array<TaskType> = [
    {
      id: 4,
      title: "Beer",
      isDone: true,
    },
    {
      id: 5,
      title: "Fish",
      isDone: true,
    },
    {
      id: 6,
      title: "Meat",
      isDone: true,
    },
  ];
 

  return (
    <div className="App">
      <TodoList tasks={tasks_1} title={todoListTitle_1} />
      <TodoList tasks={tasks_2} title={todoListTitle_2} />
      {<ChekedComponent/>}
      
    </div>
  );
}

export default App;
