import React from "react";

import "../components/TaskColumn.css";
import { TaskCard } from "./TaskCard";

export const TaskColumn = ({ icon, title, task, status, handleDelete }) => {
  return (
    <div className="imageSection">
      <div className="col1">
        <div className="imageBox">
          <img className="imageClass" src={icon} alt={title} />

          <p className="title">{title}</p>
        </div>
        {task.map(
          (tasks, index) =>
            tasks.status == status && (
              <TaskCard
                key={index}
                title={tasks.task}
                tags={tasks.tags}
                handleDelete={() => handleDelete(index)}
              />
            ),
        )}
      </div>
    </div>
  );
};
