import React, { useState } from "react";
import { login } from "../services/authService";
import { ToastContainer } from "react-toastify";
import TextFieldController from "../controller/TextFieldController";
import "react-toastify/dist/ReactToastify.css";

const initialValues = {
  username: "msd",
  password: "Hospital1234",
};

const Login = () => {
  const [values, setValues] = useState(initialValues);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = values;
    try {
      const { data } = await login(username, password);
      localStorage.setItem("token", data.token);
      window.location = "/msd/dashboard";
    } catch (ex) {
      console.log(ex);
    }
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="row justify-content-center">
      <ToastContainer />
      <div className="col-md-12">
        <div style={{ height: "50px" }} className=" text-white">
          <img
            src="/images/msd-logo.jpg"
            height={150}
            width="100%"
            alt="logo"
          />
        </div>
      </div>
      <div className="col-md-4 mt-3">
        <form style={{ marginTop: 150 }} onSubmit={handleSubmit}>
          <fieldset>
            <legend>Login here:</legend>
            <TextFieldController
              value={values.username}
              label="Username"
              name="username"
              onChange={handleChange}
              placeholder="Enter Username"
            />
            <TextFieldController
              type="password"
              value={values.password}
              label="Username"
              name="password"
              onChange={handleChange}
              placeholder="Enter Username"
            />
            <button type="submit" className="btn btn-primary float-end">
              Login
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
