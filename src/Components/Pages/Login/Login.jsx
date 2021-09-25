import React from "react";
import LoginForm from "../../LoginForm/LoginForm";
import Illustration from "./../../Illustration/Illustration";
const Login = () => {
  return (
    <>
      <h1>Login to your account</h1>
      <div className={"column"}>
        <Illustration />
        <LoginForm></LoginForm>
      </div>
    </>
  );
};

export default Login;
