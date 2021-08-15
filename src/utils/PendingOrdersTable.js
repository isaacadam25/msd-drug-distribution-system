import React, { useState } from 'react';
import { formatDate } from "../services/utilsServices";
import TableController from "../controller/TableController";
import TableHeadController from "../controller/TableHeadController";
import ModalController from "../controller/ModalController";
import SingleOrderView from "./SingleOrderView";
import ModalFooterController from "../controller/ModalFooterController";

const headCells = [
    { id: 1, title: "Order No" },
    { id: 2, title: "Total Quantity" },
    { id: 3, title: "Order Date" },
    { id: 4, title: "Order Status" },
    { id: 5, title: "Action" }
];


const OrderDetailsTable = (props) => {
    const [show, setShow] = useState(false);

    const { items } = props;

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

    return (
        <>
            <h6 className="h6 text-center p-1">Order Details</h6>
            <TableController>
                <TableHeadController headCells={headCells}  />
                <tbody>
                {
                    items.map( item => (
                        <tr key={item.id}>
                            <td>{item.reference_number}</td>
                            <td>{item.total_quantity ? item.total_quantity: "0"}</td>
                            <td>{ formatDate(item.order_date)}</td>
                            <td>
                                {
                                    item.order_status !== "inc" ? (<strong className="text-success">Complete</strong>) :
                                        (<strong className="text-danger">Pending</strong>)
                                }
                            </td>
                            <td>
                                <button className="btn btn-outline-primary btn-sm" onClick={handleShow} >
                                   <i className="fa fa-eye" /> View
                                </button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </TableController>

            <ModalController show={ show } handleClose={ handleClose } title="Order Details" >
                <SingleOrderView />
                <ModalFooterController label="Close" handleClose={ handleClose } />
            </ModalController>
        </>
    );
};

export default OrderDetailsTable;
