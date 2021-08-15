import React from 'react';

const MyComponent = (props) => {
    const { children } = props;

    return (
        <div className="row mx-lg-3">
            { children }
            <hr className="mt-3"/>
        </div>
    );
};

export default MyComponent;
