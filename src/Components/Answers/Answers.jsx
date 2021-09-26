import React, { Fragment } from "react";
import Checkbox from "./../Checkbox/Checkbox";
import "./Answers.css";

const Answers = ({ options = [], handleChange, input }) => {
  return (
    <div className="answers">
      {options.map((option, index) => (
        <Fragment key={index}>
          {input ? (
            <Checkbox
              className="answer"
              text={option.title}
              value={index}
              key={index}
              checked={option.checked}
              onChange={(e) => handleChange(e, index)}
            />
          ) : (
            <Checkbox
              className={`${"answer"} ${
                option.correct ? "correct" : option.checked ? "wrong" : null
              }`}
              text={option.title}
              key={index}
              defaultChecked={option.checked}
              disabled
            />
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default Answers;
