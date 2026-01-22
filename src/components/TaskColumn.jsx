import React from "react";
import path1 from "../assets/direct-hit.png";
import path2 from "../assets/check-mark-button.png";
import path3 from "../assets/glowing-star.png";
import "../components/TaskColumn.css";

export const TaskColumn = () => {
  return (
    <div className="imageSection">
      {" "}
      <img src={path1} className="imageClass" />{" "}
      <img src={path2} className="imageClass" />{" "}
      <img src={path3} className="imageClass" />{" "}
    </div>
  );
};
