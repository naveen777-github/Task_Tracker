import React from "react";
import path1 from "../assets/direct-hit.png";
import path2 from "../assets/check-mark-button.png";
import path3 from "../assets/glowing-star.png";
import "../components/TaskColumn.css";
import { TaskCard } from "./TaskCard";

export const TaskColumn = () => {
  return (
    <div className="imageSection">
      {" "}
      <div className="col1">
        <img src={path1} className="imageClass" /> <TaskCard />
      </div>
      <div className="col2">
        <img src={path2} className="imageClass" /> <TaskCard />
      </div>
      <div className="col2">
        <img src={path3} className="imageClass" /> <TaskCard />
      </div>
    </div>
  );
};
