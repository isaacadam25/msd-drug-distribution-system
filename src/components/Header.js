import React from "react";
import { Link } from "react-router-dom";

const MyComponent = (props) => {
  const { profile } = props;

  return (
    <div className="row">
      <div className="col-md-12 col-sm-12">
        <nav className="navbar fixed-top navbar-light bg-primary">
          <div className="container-fluid">
            <a style={{ flex: 1 }} className="navbar-brand text-white">
              MSD Drug Distribution System
            </a>
            <div style={{ marginRight: 18 }} className="dropdown">
              <button
                className="btn btn-outline-primary dropdown-toggle text-white"
                type="button"
                id="dropdownMenu"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <em className="text-white">
                  <b style={{ textTransform: "uppercase" }} className="p-2">
                    {profile.title}
                  </b>
                </em>
              </button>
              <ul
                className="dropdown-menu dropdown-menu-dark"
                aria-labelledby="dropdownMenu"
              >
                <li>
                  <Link to="/msd/dashboard" className="dropdown-item active">
                    <i className="fa fa-dashboard" />
                    &nbsp;Dashboard
                  </Link>
                </li>
                <li>
                  <Link to="/msd/hospital/profile" className="dropdown-item">
                    <i className="fa fa-user" />
                    &nbsp;Account
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link to="/" className="dropdown-item">
                    <i className="fa fa-sign-out" />
                    &nbsp;Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MyComponent;
