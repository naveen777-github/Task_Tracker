import { TaskForm } from "./components/TaskForm";
import "../src/components/Taskform.css";
import { TaskColumn } from "./components/TaskColumn";
import "./App.css";
export default function App() {
  return (
    <div className="App">
      <TaskForm />
      <main className="parent">
        <div className="tack_column">
          <TaskColumn />
        </div>
      </main>
    </div>
  );
}
