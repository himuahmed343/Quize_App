import React from "react";
import "./Button.css";
const Button = ({ children, className }) => {
  return <div className={`${className} ${"button"}`}>{children}</div>;
};

export default Button;
