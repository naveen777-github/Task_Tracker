import { TaskForm } from "./components/TaskForm";
import { TaskColumn } from "./components/TaskColumn";
import "./App.css";
import path1 from "./assets/check-mark-button.png";
import path2 from "./assets/glowing-star.png";
import path3 from "./assets/direct-hit.png";
import { useState, useEffect } from "react";

const oldTasks = localStorage.getItem("tasks");
console.log(oldTasks);

export default function App() {
  const [task, setTask] = useState(JSON.parse(oldTasks) || []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(task));
  }, [task]);
  const handleDelete = (index) => {
    const newTasks = task.filter((_, i) => i !== index);
    setTask(newTasks);
  };
  console.log(task);
  return (
    <div className="App">
      <TaskForm setTask={setTask} />
      <main className="parent">
        <div className="tack_column">
          <TaskColumn
            title="To do"
            icon={path3}
            task={task}
            status="To do"
            handleDelete={handleDelete}
          />
          <TaskColumn
            title="Doing"
            icon={path2}
            task={task}
            status="Doing"
            handleDelete={handleDelete}
          />
          <TaskColumn
            title="Done"
            icon={path1}
            task={task}
            status="Done"
            handleDelete={handleDelete}
          />
        </div>
      </main>
    </div>
  );
}
