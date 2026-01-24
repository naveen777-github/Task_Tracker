import React from "react";

import "../components/TaskColumn.css";
import { TaskCard } from "./TaskCard";

export const TaskColumn = ({ icon, title, task, status }) => {
  return (
    <div className="imageSection">
      <div className="col1">
        <div className="imageBox">
          <img className="imageClass" src={icon} alt={title} />

          <p className="title">{title}</p>
        </div>
        {task.map(
          (task, index) =>
            task.status == status && (
              <TaskCard key={index} title={task.title} tags={task.tags} />
            ),
        )}
      </div>
    </div>
  );
};
