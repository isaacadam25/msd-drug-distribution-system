import React from 'react';
import { getAuthToken } from "../services/authService";
import { processOrder } from "../services/orderService";
import { toast } from "react-toastify";
import TableController from "../controller/TableController";
import TableHeadController from "../controller/TableHeadController";

const headCells = [
    {id: 0, title: "#"},
    {id: 1, title: "Item No"},
    {id: 2, title: "Quantity"},
    {id: 3, title: "Description"},
];


const DistributeMedicine = (props) => {
    const { orderedItems, orderId } = props;

    const successNotify = () => {
        toast.success("Order sent successfully");
    };

    const sendOrder = async () => {
        try {
            const response = await processOrder(orderId, getAuthToken());
            successNotify();
            console.log(response);
        } catch (ex) {
            console.log(ex.response);
        }
    };

    return (
        <TableController>
            <TableHeadController headCells={headCells} />
            <tbody>
            {
                orderedItems.map((item, index) => (
                    <tr key={item.id}>
                        <td>{index + 1}</td>
                        <td>{item.item_number}</td>
                        <td>{item.quantity}</td>
                        <td>{item.description}</td>
                    </tr>
                ))
            }
                <tr>
                    <td colSpan={3}>
                        {
                            orderId ? (<button className="btn btn-sm btn-primary float-end m-1" onClick={() => sendOrder()}>Send Order Items</button>) : null
                        }
                    </td>
                </tr>
            </tbody>
        </TableController>
    );
};

export default DistributeMedicine;
