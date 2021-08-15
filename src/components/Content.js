import React from 'react';

const MyComponent = (props) => {
    const { children, title } = props;

    return (
        <div className="row mx-lg-3 mt-5">
            <div className="col-md-12 col-sm-12">
                <div className="p-3 border-bottom mb-3" >
                    <h5 className="h5 float-start"><i className="fa fa-dashboard" /> { title }</h5>
                    <h5 className="h5 float-end">Issa Adam</h5>
                    <h6 className=" text-center text-muted">&nbsp;</h6>
                </div>
            </div>
            { children }
        </div>
    );
};

export default MyComponent;
