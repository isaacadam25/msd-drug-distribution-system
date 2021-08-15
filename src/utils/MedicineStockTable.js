import React from 'react';
import TableController from "../controller/TableController";
import TableHeadController from "../controller/TableHeadController";

const headCells = [
    { id: 0, title: "#" },
    { id: 1, title: "Reference No" },
    { id: 2, title: "Medicine Name" },
    { id: 3, title: "Concentration" },
    { id: 4, title: "Unit of Measure" },
    { id: 5, title: "Medicine Type" },
    { id: 6, title: "Quantity Received" }
];

const MedicineStockTable = () => {
    return (
        <>
            <h6 className="h6 text-muted text-center p-1">Medicine Stock</h6>
            <TableController>
                <TableHeadController headCells={headCells}  />
                <tbody>
                <tr>
                    <td>1</td>
                    <td>RF100978</td>
                    <td>Panadol</td>
                    <td>500mg</td>
                    <td>1000</td>
                    <td>Tablets</td>
                    <td>2000</td>
                </tr>
                </tbody>
            </TableController>
        </>
    );
};

export default MedicineStockTable;
