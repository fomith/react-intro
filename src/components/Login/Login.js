import React from "react";
import { Field, reduxForm } from "redux-form";
import { TextareaCustomLogin } from "../utilits/CustomForms/CustomForms";
import {
  email,
  minLength4,
  maxLength15,
} from "../utilits/validationForms/ValidationForms";
import a from "./Login.module.scss";

const Login = (props) => {
  const loginFormSubmitting = (formData) => {
    props.authMe(formData);
  };
  return (
    <>
      <h1>Login</h1>
      <LoginFormRedux onSubmit={loginFormSubmitting} />
    </>
  );
};

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name="email"
          component={TextareaCustomLogin}
          type="text"
          placeholder="Login"
          validate={[email]}
        />
      </div>

      <div>
        <Field
          name="password"
          component={TextareaCustomLogin}
          type="password"
          placeholder="Password"
          validate={[minLength4, maxLength15]}
        />
      </div>

      <div>
        <Field name="rememberMe" component="input" type="checkbox" /> Remember
        me
      </div>
      {!props.error ? null : <span className={a.errorLoginMessage}>{props.error}</span>}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginFormRedux = reduxForm({ form: "logingForm" })(LoginForm);

export default Login;
