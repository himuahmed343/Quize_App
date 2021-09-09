import React from "react";
import signupImage from "../../assets/images/signup.svg";
import "./Illustration.css";
const Illustration = () => {
  return (
    <div className={"illustration"}>
      <img src={signupImage} alt="Signup" />
    </div>
  );
};

export default Illustration;
