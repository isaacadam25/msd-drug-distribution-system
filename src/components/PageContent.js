import React from 'react';

const PageContent = (props) => {
    const { colSize, children } = props;

    return (
        <div className={colSize + 'p-1 card' || "col-md-9 p-1 card"}>
            { children }
        </div>
    );
};

export default PageContent;
