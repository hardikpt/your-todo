import React, { useState, useEffect } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";
import TodoIcon from "./assets/bullseye.png";
import doingIcon from "./assets/star.png";
import doneIcon from "./assets/check.png";

// Retrieve tasks from localStorage
const oldTasks = localStorage.getItem("tasks");
console.log(oldTasks);

const App = () => {
  // Initialize tasks state with either parsed localStorage data or an empty array
  const [tasks, setTasks] = useState(oldTasks ? JSON.parse(oldTasks) : [] || []);

  // Update localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Handle task deletion
  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
  };

  console.log(["tasks", tasks]);

  return (
    <div className="app">
      <TaskForm setTasks={setTasks} />
      <main className="app_main">
        <TaskColumn
          title="Task To do"
          icon={TodoIcon}
          tasks={tasks}
          status="todo"
          handleDelete={handleDelete}
        />

        <TaskColumn
          title="Task Doing"
          icon={doingIcon}
          tasks={tasks}
          status="doing"
          handleDelete={handleDelete}
        />
        <TaskColumn
          title="Task Done"
          icon={doneIcon}
          tasks={tasks}
          status="done"
          handleDelete={handleDelete}
        />
      </main>
    </div>
  );
};

export default App;
