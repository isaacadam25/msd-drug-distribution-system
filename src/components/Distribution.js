import React, { useState, useEffect } from 'react';
import { getAuthToken, getProfile } from "../services/authService";
import { getAllHospitals } from "../services/hospitalsService";
import { createOrder, getOrderedItems } from "../services/orderService";
import { getApprovedMedicine } from "../services/medicineService";
import Content from "./Content";
import SideNav from "./Sidenav";
import PageContent from "./PageContent";
import DistributeMedicine from "../utils/DistributeMedicine";
import DataListController from "../controller/DataListController";
import ModalController from "../controller/ModalController";
import ModalFooterController from "../controller/ModalFooterController";
import AddOrderItemsForm from "./AddOrderItemsForm";

const initialValues = {
    total_quantity: 0,
    order_id: 0,
    description: ''
}

const Distribution = (props) => {
    const [profile, setProfile] = useState({});
    const [destination_id, setDestinationId] = useState(0);
    const [destinations, setDestinations] = useState([]);
    const [batches, setBatches] = useState([]);
    const [showAddItems, setShowAddItems] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [orderId, setOrderId] = useState(0);
    const [orderedItems, setOrderedItems] = useState([]);
    const [values, setValues] = useState(initialValues);

    const { title } = props;

    if (!getAuthToken()) {
        window.location = "/";
    }

    const handleShowModal = () => setShowModal(true);

    const handleCloseModal = () => setShowModal(false);

    const getCurrentUser = async () => {
        try {
            const { data } = await getProfile(getAuthToken());
            if (data.usertype_name !== "msd") {
                window.location = "/";
            } else {
                setProfile(data);
            }
        } catch (error) {
            console.log(error.response);
        }
    };

    const getDestinations = async () => {
      try {
            const { data } = await getAllHospitals(getAuthToken());
            setDestinations(data);
      } catch (ex) {
          console.log(ex.response);
      }
    };

    const generateNewOrder = async (destination_id) => {
        try {
            const { data } = await createOrder(destination_id, getAuthToken());
            setOrderId(data.id);
        } catch (ex) {
            console.log(ex.response);
        }
    };

    const setOrderItems = async (orderId) => {
        try {
            const { data } = await getOrderedItems(orderId, getAuthToken());
            setOrderedItems(data);
        } catch (ex) {
            console.log(ex.response);
        }
    }

    const getBatches = async () => {
        try {
            const response = await getApprovedMedicine(getAuthToken());
            setBatches(response.data);
            console.log(response);
        } catch (ex) {
            console.log(ex.response);
        }
    };

    const handleChange = (e) => {
        setDestinationId(e.target.value);
        console.log(destination_id);
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      generateNewOrder(destination_id);
      setShowAddItems(true);
    };

    useEffect(() => {
        getCurrentUser();
        getDestinations();
        getBatches();;
    }, [title]);

    return (
        <Content title={title} profile={profile}>
            <SideNav />
            <PageContent colSize="col-md-9 p-1 card">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        {
                            !showAddItems ? (
                                <form className="p-2" onSubmit={handleSubmit} >
                                    <DataListController
                                        label="Select Destination"
                                        id="destinations"
                                        name="destination_id"
                                        options={destinations}
                                        onChange={handleChange}
                                    />
                                    <button className="btn btn-primary btn-sm float-end mt-2">
                                        <i className="fa fa-plus-square" /> Add Order
                                    </button>
                                </form>
                            ) : (
                                <div className="d-grid p-3">
                                    <button className="btn btn-primary btn-sm float-end" onClick={handleShowModal}>
                                        <i className="fa fa-plus-square" /> Add Order Items
                                    </button>
                                </div>
                            )
                        }
                    </div>
                    <div className="col-md-11 p-2">
                        <DistributeMedicine orderedItems={orderedItems} orderId={orderId} />
                    </div>
                </div>
            </PageContent>

            <ModalController show={showModal} onHide={handleCloseModal} title="Add Order Items"  >
                <AddOrderItemsForm handleCloseModal={handleCloseModal} setOrderItems={setOrderItems} batches={batches} orderId={orderId} />
                <ModalFooterController label="Cancel" handleClose={handleCloseModal} />
            </ModalController>

        </Content>
    );
};

export default Distribution;
