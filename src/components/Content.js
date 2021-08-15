import React from "react";
import Header from "./Header";

const MyComponent = (props) => {
  const { children, title, profile } = props;

  return (
    <>
      <Header profile={profile} />
      <div className="row mx-lg-3 mt-5">
        <div className="col-md-12 col-sm-12">
          <div className="p-3 border-bottom mb-3">
            <h5 className="h5 float-start p-3">
              <i className="fa fa-th" /> {title}
            </h5>
            <h5 className="h5 float-end p-3">
              {profile.first_name} {profile.last_name}
            </h5>
            <h6 className=" text-center text-muted">&nbsp;</h6>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default MyComponent;
