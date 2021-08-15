import React from 'react';
import { Link } from "react-router-dom";
import TableController from "../controller/TableController";
import TableHeadController from "../controller/TableHeadController";

const headCells = [
    { id: 1, title: "Reference No" },
    { id: 2, title: "Institution Name" },
    { id: 3, title: "Institution Type" },
    { id: 4, title: "Region" },
    { id: 5, title: "City" },
    { id: 6, title: "Action" }
];

const InstitutionViewTable = (props) => {
    const { institutions } = props;

    return (
        <>
            <h6 className="h6 text-center p-1">List of Institutions</h6>
            <TableController>
                <TableHeadController headCells={headCells}  />
                <tbody>
                {
                    institutions.map(institution => (
                        <tr key={ institution.id }>
                            <td>{ institution.reference_number }</td>
                            <td>{ institution.name }</td>
                            <td>{ institution.institute_type_name }</td>
                            <td>{ institution.location_region }</td>
                            <td>{ institution.location_city }</td>
                            <td>
                                <Link to={`/msd/hospital/stock/${institution.reference_number}`} className="btn btn-outline-primary btn-sm"><i className="fa fa-eye" /> <b>View</b></Link>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </TableController>
        </>
    );
};

export default InstitutionViewTable;
