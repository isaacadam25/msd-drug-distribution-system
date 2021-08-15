import React, { useState } from 'react';
import { formatDate } from "../services/utilsServices";
import TableController from "../controller/TableController";
import TableHeadController from "../controller/TableHeadController";

const headCells = [
    { id: 0, title: "Reference No" },
    { id: 1, title: "Drug Name" },
    { id: 2, title: "Total Quantity" },
    { id: 3, title: "Order Date" },
    { id: 4, title: "Status" },
    { id: 5, title: "Destination" },
];

const PendingOrdersTable = (props) => {
    const { items } = props;
    return (
        <>
            <div className="p-2">
                <TableController>
                    <TableHeadController headCells={headCells}  />
                    <tbody>
                    {
                        items.map( item => (
                            <tr key={item.id}>
                                <td>{item.reference_number}</td>
                                <td>{item.drug_name}</td>
                                <td>{item.quantity ? item.quantity: "0"}</td>
                                <td>{ formatDate(item.date_added)}</td>
                                <td>
                                    {
                                        item.is_accepted ? (<strong className="text-success">Complete</strong>) :
                                            (<strong className="text-danger">Pending</strong>)
                                    }
                                </td>
                                <td>{item.destination_name}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </TableController>
            </div>
        </>
    );
};

export default PendingOrdersTable;
