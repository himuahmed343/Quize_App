import React from "react";
import { Link } from "react-router-dom";
import Button from "./../Button/Button";
import Checkbox from "./../Checkbox/Checkbox";
import Form from "./../Form/Form";
import TextInput from "./../TextInput/TextInput";
import "./SignupForm.css";

const SignupForm = () => {
  return (
    <Form className={"signup"} action="#">
      <TextInput type="text" placeholder="Enter Name" icon="person" />

      <TextInput type="text" placeholder="Enter Email" icon="alternate_email" />

      <TextInput type="text" placeholder="Enter Password" icon="lock" />

      <TextInput type="text" placeholder="Confirm Password" icon="lock_clock" />

      <Checkbox text="I agree to the Terms &amp; Conditions" />
      <Button>
        <span>Submit Now</span>
      </Button>

      <div className="info">
        Already have an account? <Link to="/login">Login</Link> instead.
      </div>
    </Form>
  );
};

export default SignupForm;
