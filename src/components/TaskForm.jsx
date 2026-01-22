import React from "react";
import "../components/Tag.css";
import { Tag } from "./Tag";

export function TaskForm() {
  return (
    <section className="app_Form">
      <div className="InputContainer">
        <input type="text" className="Task_input" placeholder="enter Text" />
      </div>

      <div className="Parent">
        <div className="Child1">
          <Tag TagName="HTML" />
          <Tag TagName="CSS" />
          <Tag TagName="JavaScript" />
          <Tag TagName="ReactJs" />
        </div>

        <div className="Child2">
          <select className="TodoList">
            <option>To do </option>
            <option>Doing </option>
            <option>done </option>
          </select>

          <button type="submit" className="task_submit">
            +Add Task
          </button>
        </div>
      </div>
    </section>
  );
}
