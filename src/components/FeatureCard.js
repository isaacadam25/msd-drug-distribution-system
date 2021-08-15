import React from 'react';

const MyComponent = (props) => {
    const { colSize } = props;

    return (
        <div className={colSize || "col-md-3 p-2" }>
            <div className="card" style={{ border: "4px solid #000" }} >
                <div className="card-body">
                    <h1 className="card-title">40</h1>
                    <p className="card-text text-muted">Total Medicine Stock</p>
                </div>
            </div>
        </div>
    );
};

export default MyComponent;
