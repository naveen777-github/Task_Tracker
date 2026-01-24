import { TaskForm } from "./components/TaskForm";
import "../src/components/Taskform.css";
import { TaskColumn } from "./components/TaskColumn";
import "./App.css";
import path1 from "./assets/check-mark-button.png";
import path2 from "./assets/glowing-star.png";
import path3 from "./assets/direct-hit.png";
import { useState } from "react";

export default function App() {
  const [task, setTask] = useState([]);
  console.log(task);
  return (
    <div className="App">
      <TaskForm setTask={setTask} />
      <main className="parent">
        <div className="tack_column">
          <TaskColumn title="To do" icon={path3} task={task} status="to do" />
          <TaskColumn title="Doing" icon={path2} task={task} status="doing" />
          <TaskColumn title="Done" icon={path1} task={task} status="done" />
        </div>
      </main>
    </div>
  );
}
