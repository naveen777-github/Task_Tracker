import "../components/TaskCard.css";
import React from "react";
import { Tag } from "./Tag";
import dustbin from "../assets/delete.png";

export const TaskCard = ({ title, tags }) => {
  return (
    <article className="cardbox">
      <p className="cardName">{title}</p>

      <div className="box">
        <div className="skillCard">
          {tags.map((tag, index) => (
            <Tag key={index} tagName={tag} selected={true} />
          ))}
        </div>

        <div className="bindiv">
          <img src={dustbin} className="bin" />
        </div>
      </div>
    </article>
  );
};
