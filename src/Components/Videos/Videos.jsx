import React from "react";
import { Link } from "react-router-dom";
import useVideoList from "./../../hooks/useVideoList";
import Video from "./../Video/Video";
import "./Videos.css";

const Videos = () => {
  const { loading, error, videos } = useVideoList();
  return (
    <div className={"videos"}>
      {videos.length > 0 &&
        videos.map((video) => (
          <Link to="/quiz" key={video.youtubeID}>
            <Video title={video.title} id={video.youtubeID} noq={video.noq} />
          </Link>
        ))}
      {!loading && videos.length === 0 && <div>No data found!</div>}
      {!error && <div>No data found!</div>}
    </div>
  );
};

export default Videos;
