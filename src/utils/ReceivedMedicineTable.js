import React from 'react';
import TableController from "../controller/TableController";
import TableHeadController from "../controller/TableHeadController";

const headCells = [
    { id: 1, title: "#" },
    { id: 2, title: "Drug Name" },
    { id: 3, title: "Concentration" },
    { id: 4, title: "Unit of Measure" },
    { id: 5, title: "Drug Type" },
    { id: 6, title: "Quantity Received" },
    { id: 7, title: "Action" },
];

const ReceivedMedicineTable = () => {
    return (
        <>
            <h6 className="h6 text-center p-1">Received Medicines</h6>
            <TableController>
                <TableHeadController headCells={headCells}  />
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Panadol</td>
                        <td>500mg</td>
                        <td>1000TB</td>
                        <td>Capsule</td>
                        <td>300</td>
                        <td>
                            <button className="btn btn-outline-primary btn-sm"><i className="fa " /> <b>Accept</b></button>&nbsp;
                            <button className="btn btn-outline-dark btn-sm"><i className="fa" /> <b>Decline</b></button>
                        </td>
                    </tr>
                </tbody>
            </TableController>
        </>
    );
};

export default ReceivedMedicineTable;
