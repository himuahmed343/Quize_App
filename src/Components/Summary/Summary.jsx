import React, { useMemo } from "react";
import successImage from "../../assets/images/success.png";
import useFetch from "./../../hooks/useFetch";
import "./Summary.css";

const Summary = ({ score, noq }) => {
  const getKeywords = useMemo(() => {
    if ((score / (noq * 5)) * 100 < 50) {
      return "failed";
    } else if ((score / (noq * 5)) * 100 < 75) {
      return "good";
    } else if ((score / (noq * 5)) * 100 < 100) {
      return "very good";
    } else {
      return "excellent";
    }
  }, [score, noq]);
  const { loading, error, result } = useFetch(
    `https://api.pexels.com/v1/search?query=${getKeywords}&per_page=1`,
    "GET",
    {
      Authorization: process.env.REACT_APP_PEXELS_API_KEY,
    }
  );
  const image = result ? result?.photos[0].src.medium : successImage;
  return (
    <div className="summary">
      <div className="point">
        <p className="score">
          Your score is <br />
          {score} out of {noq * 5}
        </p>
      </div>

      {loading && <div className="badge">Loading your badge...</div>}
      {error && <div className="badge">An error occured!!</div>}

      {!loading && !error && (
        <div className="badge">
          <img src={image} alt="Success" />
        </div>
      )}
    </div>
  );
};

export default Summary;
