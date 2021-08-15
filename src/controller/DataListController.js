import React from 'react';

const DataListController = (props) => {
    const { label, options, id, onChange, name } = props;

    return (
        <>
            <label htmlFor={id} className="form-label">{label}</label>
            <input
                   className="form-control" onChange={onChange}
                   name={name} list="data"
                   id={id} placeholder="Type to search..."
                   type="text"
                   required
            />
                <datalist id="data" >
                    {
                        options.map( option => (
                            <>
                            <option key={option.id} value={option.id} >{option.name}</option>
                            </>
                        ))
                    }
                </datalist>
        </>
    );
};

export default DataListController;