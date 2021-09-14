import React from "react";
import image from "../../assets/images/success.png";
import "./Summary.css";
const Summary = () => {
  return (
    <div className="summary">
      <div className="point">
        <p className="score">
          Your score is <br />5 out of 10
        </p>
      </div>

      <div className="badge">
        <img src={image} alt="Success" />
      </div>
    </div>
  );
};

export default Summary;
