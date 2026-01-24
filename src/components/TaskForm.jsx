import React from "react";
import "../components/Tag.css";
import { Tag } from "./Tag";

import { useState } from "react";

export function TaskForm({ setTask }) {
  const [taskDatA, settaskdData] = useState({
    task: "",
    status: "To do",
    tags: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    settaskdData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handlesubmition = (e) => {
    e.preventDefault();
    setTask((prev) => {
      return [...prev, taskDatA];
    });
  };
  const selectTag = (Tag) => {
    if (taskDatA.tags.some((items) => items == Tag)) {
      const filterTags = taskDatA.tags.filter((items) => items !== Tag);
      settaskdData((prev) => ({
        ...prev,
        tags: filterTags,
      }));
    } else {
      settaskdData((prev) => ({
        ...prev,
        tags: [...prev.tags, Tag],
      }));
    }
  };

  const checkTag = (Tag) => {
    return taskDatA.tags.some((items) => items == Tag);
  };

  return (
    <section className="app_Form">
      <form onSubmit={handlesubmition}>
        <div className="InputContainer">
          <input
            type="text"
            name="task"
            className="Task_input"
            placeholder="enter Text"
            onChange={handleChange}
          />
        </div>

        <div className="Parent">
          <div className="Child1">
            <Tag
              TagName="HTML"
              selectTag={selectTag}
              selected={checkTag("HTML")}
            />
            <Tag
              TagName="CSS"
              selectTag={selectTag}
              selected={checkTag("CSS")}
            />
            <Tag
              TagName="JavaScript"
              selectTag={selectTag}
              selected={checkTag("JavaScript")}
            />
            <Tag
              TagName="ReactJS"
              selectTag={selectTag}
              selected={checkTag("ReactJS")}
            />
          </div>

          <div className="Child2">
            <select className="TodoList" name="status" onChange={handleChange}>
              <option>To do </option>
              <option>Doing </option>
              <option>done </option>
            </select>

            <button
              type="submit"
              className="task_submit"
              onClick={handlesubmition}
            >
              +Add Task
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
