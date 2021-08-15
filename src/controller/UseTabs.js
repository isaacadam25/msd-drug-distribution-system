import React from 'react';
import PendingOrdersTable from "../utils/PendingOrdersTable";

const UseTabs = (props) => {
    const { pendingOrders, allOrders, acceptedOrders } = props;

    return (
        <>
            <ul className="nav nav-pills mb-3 nav-fill justify-content-center p-2" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                            aria-selected="true">All Orders
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                            aria-selected="false">Pending Orders
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact"
                            aria-selected="false">Accepted Orders
                    </button>
                </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel"
                     aria-labelledby="pills-home-tab">
                    <PendingOrdersTable items={allOrders} />
                </div>
                <div className="tab-pane fade" id="pills-profile" role="tabpanel"
                     aria-labelledby="pills-profile-tab">
                    <PendingOrdersTable items={pendingOrders} />
                </div>
                <div className="tab-pane fade" id="pills-contact" role="tabpanel"
                     aria-labelledby="pills-contact-tab">
                    <PendingOrdersTable items={acceptedOrders} />
                </div>
            </div>
        </>
    );
};

export default UseTabs;
