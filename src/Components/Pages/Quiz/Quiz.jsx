import React from "react";
import { useParams } from "react-router-dom";
import Answers from "../../Answers/Answers";
import MiniPlayer from "./../../MiniPlayer/MiniPlayer";
import ProgressBar from "./../../ProgressBar/ProgressBar";

const Quiz = () => {
  const { id } = useParams();
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
