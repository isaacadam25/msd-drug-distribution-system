import React from 'react';

const SingleOrderView = () => {
    return (
        <table className="table table-striped table-hover">
            <tbody>
                <tr>
                    <td><strong>Order No</strong></td>
                    <td>ORD76765</td>
                    <td><strong>Order Date</strong></td>
                    <td>20/09/2020</td>
                </tr>
                <tr>
                    <td><strong>Total Quantity</strong></td>
                    <td>3000</td>
                    <td><strong>Destination</strong></td>
                    <td>MSD Dar-es-salaam</td>
                </tr>
                <tr>
                    <td><strong>Order Status</strong></td>
                    <td>True</td>
                    <td><strong>Description</strong></td>
                    <td>Some Description</td>
                </tr>
            </tbody>
        </table>
    );
};

export default SingleOrderView;