import React from 'react';
import { Link } from "react-router-dom";

const MyComponent = () => {
    return (
        <div className="row">
            <div className="col-md-12 col-sm-12">
                <nav className="navbar fixed-top navbar-light bg-primary">
                    <div className="container-fluid">
                        <Link to="/" style={{ flex: 1 }} className="navbar-brand text-white" href="#">MSD Drug Distribution System</Link>
                        <div className="dropdown">
                            <button className="btn btn-outline-primary dropdown-toggle" type="button" id="dropdownMenu"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                <em className="text-white"><b>Distribution Manager</b></em>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenu">
                                <li><Link to="/msd/dashboard" className="dropdown-item active">Dashboard</Link></li>
                                <li><Link to="/" className="dropdown-item" >Account</Link></li>
                                <li><Link to="/" className="dropdown-item" >Settings</Link></li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><Link to="/" className="dropdown-item" >Logout</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default MyComponent;
