import React from 'react';
import { NavLink } from 'react-router-dom';

const SideNav = () => {
    return (
        <div className="col-md-3 col-sm-12 p-1">
            <div className="list-group list-group-flush">
                <NavLink to="/msd/dashboard" className="list-group-item list-group-item-action" >
                    <i className="fa fa-dashboard" /> Dashboard
                </NavLink>
                <NavLink to="/msd/distribution" className="list-group-item list-group-item-action">
                    <i className="fa fa-ambulance" /> Distribution Management
                </NavLink>
                <NavLink to="/msd/medicine" className="list-group-item list-group-item-action">
                    <i className="fa fa-cubes" /> Medicine Management
                </NavLink>
                <NavLink to="/msd/hospitals" className="list-group-item list-group-item-action">
                    <i className="fa fa-university" /> Institution Management
                </NavLink>
                <NavLink to="/msd/msd-reports" className="list-group-item list-group-item-action">
                    <i className="fa fa-folder-open" /> Reports Management
                </NavLink>
            </div>
        </div>
    );
};

export default SideNav;
