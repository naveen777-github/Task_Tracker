import "../components/TaskCard.css";
import React from "react";
import { Tag } from "./Tag";
import dustbin from "../assets/delete.png";

export const TaskCard = () => {
  return (
    <article className="cardbox">
      <p className="cardName">This is sample text</p>

      <div className="box">
        <div className="skillCard">
          <Tag TagName="HTML" />
          <Tag TagName="CSS" />
        </div>

        <div className="bindiv">
          <img src={dustbin} className="bin" />
        </div>
      </div>
    </article>
  );
};
