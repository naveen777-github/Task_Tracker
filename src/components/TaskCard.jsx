import "../components/TaskCard.css";
import React from "react";
import { Tag } from "./Tag";
import dustbin from "../assets/dustbin.png";

export const TaskCard = ({ title, tags, handleDelete, index }) => {
  return (
    <article className="cardbox">
      <p className="cardName">{title}</p>

      <div className="box">
        <div className="skillCard">
          {tags.map((tag, index) => (
            <Tag key={index} TagName={tag} selected={true} />
          ))}
        </div>

        <div className="bindiv " onClick={() => handleDelete(index)}>
          <img src={dustbin} className="bin" />
        </div>
      </div>
    </article>
  );
};
