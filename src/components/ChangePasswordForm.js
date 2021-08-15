import React, { useState } from 'react';
import { changePassword, getAuthToken } from "../services/authService";
import TextFieldController from "../controller/TextFieldController";
import AlertController from "../controller/AlertController";

const initialValues = {
    old_password: '',
    new_password: '',
    verify_password: ''
}

const ChangePasswordForm = () => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState(false);
    const [valid, setValid] = useState(false);

    const handleChange = (e) => {
      setValues({...values, [e.target.name] : e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (values.new_password === values.verify_password) {
            try {
                const response = await changePassword(values, getAuthToken());
                console.log(response);
                setValid(true);
                resetForm();
            } catch (ex) {
                console.log(ex.response);
                setErrors(true);
            }
        } else {
            setErrors(true);
            resetForm();
        }
    };

    const resetForm = () => {
      setValues(initialValues);
    };

    return (
        <div className="row justify-content-center">
            <div className="col-md-10">
                {errors ? (<AlertController setShow={setErrors} label="Error Occurred" />) : null}
                {valid ? (<AlertController setShow={setValid} variant="success" label="Password Changed" />) : null }
                <h6 className="text-center">Change Password</h6>
                <form className="p-2" onSubmit={handleSubmit} >
                    <TextFieldController
                        label="Current Password"
                        name="old_password"
                        type="password"
                        value={values.old_password}
                        placeholder="Enter your current password"
                        onChange={handleChange}
                    />
                    <TextFieldController
                        label="New Password"
                        name="new_password"
                        type="password"
                        value={values.new_password}
                        placeholder="Enter new password"
                        onChange={handleChange}
                    />
                    <TextFieldController
                        label="Verify New Password"
                        name="verify_password"
                        type="password"
                        value={values.verify_password}
                        placeholder="Re-enter new password"
                        onChange={handleChange}
                    />
                    <button className="btn btn-primary float-end btn-sm m-2">Change Password</button>
                </form>
            </div>
        </div>
    );
};

export default ChangePasswordForm;