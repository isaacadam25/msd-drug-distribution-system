import React from 'react';

const SelectController = (props) => {
    const { label, id, onChange, value, name, options } = props;

    return (
        <>
            <label htmlFor={id} className="form-label">{ label }</label>
            <select className="form-select" value={value} onChange={onChange} name={name} aria-label={id}>
                <option defaultValue>Open this select menu</option>
                {
                    options.map( option => (
                        <option key={option.id} value={option.id}>{option.batch_number}</option>
                    ))
                }
            </select>
        </>
    );
};

export default SelectController;
