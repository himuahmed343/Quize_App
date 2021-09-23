import React from "react";
import { Link } from "react-router-dom";
import useVideoList from "./../../hooks/useVideoList";
import Video from "./../Video/Video";
import "./Videos.css";

const Videos = () => {
  const { loading, error, videos } = useVideoList();
  return (
    <div className={"videos"}>
<<<<<<< HEAD
      {videos.length > 0 && (
        <InfiniteScroll
          dataLength={videos.length}
          hasMore={hasMore}
          loader="Loading..."
          next={() => setPage(page + 8)}
        >
          {videos.map((video) =>
            video.noq > 0 ? (
              <Link to={`/quiz/${video.youtubeID}`} key={video.youtubeID}>
                <Video
                  title={video.title}
                  id={video.youtubeID}
                  noq={video.noq}
                />
              </Link>
            ) : (
              <Video
                title={video.title}
                id={video.youtubeID}
                noq={video.noq}
                key={video.youtubeID}
              />
            )
          )}
        </InfiniteScroll>
      )}
=======
      {videos.length > 0 &&
        videos.map((video) => (
          <Link to="/quiz" key={video.youtubeID}>
            <Video title={video.title} id={video.youtubeID} noq={video.noq} />
          </Link>
        ))}
>>>>>>> parent of 3a5fca8 (add dynamic video, infinite page scroll)
      {!loading && videos.length === 0 && <div>No data found!</div>}
      {!error && <div>No data found!</div>}
    </div>
  );
};

export default Videos;
