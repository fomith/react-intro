import React from "react";
import { Field, reduxForm } from "redux-form";

const Login = () => {
  return (
    <>
      <h1>Login</h1>
      <LoginFormRedux onSubmit={loginFormSubmitting} />
    </>
  );
};

const LoginForm = (props) => {
  console.log(props);
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name="firstName" component="input" type="text" placeholder="Login" />
      </div>

      <div>
        <Field name="lastname" component="input" type="text" placeholder="Password" />
      </div>

      <div>
        <Field name="checkbox" component="input" type="checkbox" /> Remember me
      </div>

      <button>Login</button>
    </form>
  );
};

const loginFormSubmitting = (formData) => {
  console.warn("Submit", formData);
};

const LoginFormRedux = reduxForm({ form: "logingForm" })(LoginForm);

export default Login;
