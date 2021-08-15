import React from 'react';
import TableController from "../controller/TableController";
import TableHeadController from "../controller/TableHeadController";

const headCells = [
    {id: 3, title: "Quantity"},
    {id: 4, title: "Batch No"},
    {id: 5, title: "Description"},
];

const DistributeMedicine = () => {
    return (
        <TableController>
            <TableHeadController headCells={headCells} />
        </TableController>
    );
};

export default DistributeMedicine;
