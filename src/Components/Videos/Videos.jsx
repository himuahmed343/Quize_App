import React from "react";
import { Link } from "react-router-dom";
import Video from "./../Video/Video";
import "./Videos.css";

const Videos = () => {
  return (
    <div className={"videos"}>
      <Link to="/quiz">
        <Video />
      </Link>
      <Link to="/quiz">
        <Video />
      </Link>
      <Link to="/quiz">
        <Video />
      </Link>
      <Link to="/quiz">
        <Video />
      </Link>
      <Link to="/quiz">
        <Video />
      </Link>
      <Link to="/quiz">
        <Video />
      </Link>
    </div>
  );
};

export default Videos;
