import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { login } from "../services/authService";
import TextFieldController from "../controller/TextFieldController";

const initialValues = {
    username: "msd",
    password: "Hospital1234"
};

const Login = (props) => {
    const [values, setValues] = useState(initialValues);

    const { setLoggedIn } = props;

    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { username, password } = values;
        // setLoggedIn(true);
        // history.replace("/msd/dashboard");
        const response = await login(username, password);
        console.log(response);
    };

    const handleChange = (e) => {
      setValues({ ...values, [e.target.name] : e.target.value });
    };

    return (
        <div className="row justify-content-center">
            <div className="col-md-12">
                <div style={{ height: "50px" }} className="bg-dark text-white">
                    <h5>Heading</h5>
                </div>
            </div>
            <div className="col-md-5 mt-3">
                <form onSubmit={handleSubmit}>
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
                    <button type="submit" className="btn btn-primary float-end">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
