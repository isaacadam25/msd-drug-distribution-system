import React from 'react';

const MyComponent = (props) => {
    const { colSize, count, title } = props;

    return (
        <div className={colSize || "col-md-3 p-2" }>
            <div className="card" style={{ border: "4px solid #000" }} >
                <div className="card-body">
                    <h1 className="card-title">{ count }</h1>
                    <p className="card-text text-muted">{ title }</p>
                </div>
            </div>
        </div>
    );
};

export default MyComponent;
