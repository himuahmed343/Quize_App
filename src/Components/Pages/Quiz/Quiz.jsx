<<<<<<< HEAD
<<<<<<< HEAD
import _ from "lodash";
import { useEffect, useReducer, useState } from "react";
import { useParams } from "react-router-dom";
// import useQuestions from "../../hooks/useQuestions";
import useQuestions from "../../../hooks/useQuestions";
=======
import React from "react";
>>>>>>> parent of 3a5fca8 (add dynamic video, infinite page scroll)
=======
import React from "react";
import { useParams } from "react-router-dom";
>>>>>>> parent of 230fafb (Quiz page upgrade)
import Answers from "../../Answers/Answers";
import MiniPlayer from "./../../MiniPlayer/MiniPlayer";
import ProgressBar from "./../../ProgressBar/ProgressBar";

const Quiz = () => {
<<<<<<< HEAD
  const { id } = useParams();
<<<<<<< HEAD
  const { loading, error, questions } = useQuestions(id);
  const [currentQuestion] = useState(0);

  const [qna, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({
      type: "questions",
      value: questions,
    });
  }, [questions]);

  function handleAnswerChange(e, index) {
    dispatch({
      type: "answer",
      questionID: currentQuestion,
      optionIndex: index,
      value: e.target.checked,
    });
  }
=======
>>>>>>> parent of 3a5fca8 (add dynamic video, infinite page scroll)
=======
>>>>>>> parent of 230fafb (Quiz page upgrade)
  return (
    <>
      <h1>Pick three of your favorite Star Wars Flims</h1>
      <h4>Question can have multiple answers</h4>
      <Answers />
      <ProgressBar />
      <MiniPlayer />
    </>
  );
};

export default Quiz;
