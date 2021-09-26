import React from "react";
import Question from "../Question/Question";
import "./Analysis.css";
const Analysis = ({ answers }) => {
  return (
    <div className="analysis">
      <h1>Question Analysis</h1>
      <h4>You answerd 5 out of 10 questions correctly</h4>
      <Question answers={answers} />
    </div>
  );
};

export default Analysis;
