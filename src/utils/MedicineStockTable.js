import React from 'react';
import TableController from "../controller/TableController";
import TableHeadController from "../controller/TableHeadController";

const headCells = [
    { id: 0, title: "Reference No" },
    { id: 1, title: "Batch No" },
    { id: 2, title: "Medicine Name" },
    { id: 4, title: "Manufacturer" },
    { id: 5, title: "Quantity" },
    { id: 6, title: "Status" },
];

const MedicineStockTable = (props) => {
    const { pendingIncoming } = props;

    return (
        <>
            <h6 className="h6 text-center p-1">Order Transactions</h6>
            <TableController>
                <TableHeadController headCells={headCells}  />
                <tbody>
                {
                    pendingIncoming.map(item => (
                        <tr key={item.id}>
                            <td>{item.reference_number}</td>
                            <td>{item.batch_number}</td>
                            <td>{item.drug_name}</td>
                            <td>{item.drug_manufacturer}</td>
                            <td>{item.quantity}</td>
                            <td>{item.is_accepted ? "Accepted" : "Pending"}</td>
                        </tr>
                    ))
                }
                </tbody>
            </TableController>
        </>
    );
};

export default MedicineStockTable;
