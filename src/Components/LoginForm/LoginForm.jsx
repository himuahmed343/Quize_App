import React from "react";
import TextInput from "../TextInput/TextInput";
import Button from "./../Button/Button";
import Form from "./../Form/Form";
import "./LoginForm.css";
const LoginForm = () => {
  return (
    <Form className={"login"}>
      <TextInput type="text" placeholder="Enter email" icon="alternate_email" />

      <TextInput type="password" placeholder="Enter password" icon="lock" />
      <Button>
        <span>Login Now</span>
      </Button>

      <div className="info">
        Don't have an account? <a href="signup.html">Signup</a> instead.
      </div>
    </Form>
  );
};

export default LoginForm;
