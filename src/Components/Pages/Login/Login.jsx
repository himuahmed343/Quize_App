import React from "react";
import Form from "../../LoginForm/LoginForm";
import Illustration from "./../../Illustration/Illustration";
const Login = () => {
  return (
    <>
      <h1>Login to your account</h1>
      <div className={"column"}>
        <Illustration />
        <Form></Form>
      </div>
    </>
  );
};

export default Login;
