import React from "react";
import Checkbox from "./../Checkbox/Checkbox";
import "./Answers.css";

const Answers = ({ options = [], handleChange }) => {
  return (
    <div className="answers">
      {options.map((option, index) => (
        <Checkbox
          key={index}
          className="answer"
          text={option.title}
          value={index}
          checked={option.checked}
          onChange={(e) => handleChange(e, index)}
        />
      ))}
    </div>
  );
};

export default Answers;
