import React from "react";

const TextFieldController = (props) => {
    const { label, type, placeholder, id, onChange, value, name } = props;

    return (
        <div className="mb-3">
            <label htmlFor={id} className="form-label">{ label }</label>
            <input type={ type || "text" }
                   value={value}
                   name={name}
                   id={id}
                   placeholder={placeholder}
                   onChange={onChange}
                   className="form-control"
            />
        </div>
    );
};

export default TextFieldController;
