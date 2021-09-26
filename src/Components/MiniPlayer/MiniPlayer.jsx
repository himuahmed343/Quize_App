import React, { useRef, useState } from "react";
import image from "../../assets/images/3.jpg";
import "./MiniPlayer.css";
const MiniPlayer = () => {
  const buttonRef = useRef();
  const [status, setStatus] = useState(false);

  function toggleMiniPlayer() {
    if (!status) {
      buttonRef.current.classList.remove("floatingBtn");
      setStatus(true);
    } else {
      buttonRef.current.classList.add("floatingBtn");
      setStatus(false);
    }
  }
  return (
    <div
      className={`${"miniPlayer"} ${"floatingBtn"}`}
      ref={buttonRef}
      onClick={toggleMiniPlayer}
    >
      <span className={`material-icons-outlined ${"open"}`}>
        play_circle_filled
      </span>
      <span
        className={`material-icons-outlined ${"close"}`}
        onClick={toggleMiniPlayer}
      >
        {" "}
        close{" "}
      </span>

      <img src={image} alt="" />
      <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
    </div>
  );
};

export default MiniPlayer;
