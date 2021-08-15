import React from 'react';
import { Link } from "react-router-dom";
import TableController from "../controller/TableController";
import TableHeadController from "../controller/TableHeadController";

const headCells = [
    { id: 1, title: "#" },
    { id: 2, title: "Institution Name" },
    { id: 3, title: "Institution Type" },
    { id: 4, title: "Region" },
    { id: 5, title: "City" },
    { id: 6, title: "Action" }
];

const InstitutionViewTable = () => {
    return (
        <>
            <h6 className="h6 text-center p-1">List of Institutions</h6>
            <TableController>
                <TableHeadController headCells={headCells}  />
                <tbody>
                <tr>
                    <td>1</td>
                    <td>Makulu Hospital</td>
                    <td>Hospital</td>
                    <td>Dodoma</td>
                    <td>Dodoma</td>
                    <td>
                        <Link to="/msd/hospital/stock" className="btn btn-outline-primary btn-sm"><i className="fa fa-eye" /> <b>View</b></Link>
                    </td>
                </tr>
                </tbody>
            </TableController>
        </>
    );
};

export default InstitutionViewTable;
