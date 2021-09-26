import React from "react";
import Answers from "./../Answers/Answers";
import "./Question.css";
const Question = ({ answers = [] }) => {
  return answers.map((answer, index) => (
    <div class="question" key={index}>
      <div class="qtitle">
        <span class="material-icons-outlined"> help_outline </span>
        {answer.title}
      </div>
      <Answers input={false} options={answer.options} />
    </div>
  ));
};

export default Question;
