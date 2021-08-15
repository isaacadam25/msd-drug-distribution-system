import React, { useEffect, useState } from 'react';
import { getAuthToken, getProfile } from "../services/authService";
import { getAllPendingOrders, getAllAcceptedOrders, getAllOrders } from "../services/orderService";
import {
    getAvailableMedicine,
    getDistributedMedicineCount,
    getExpiredMedicineCount,
    getValidMedicineCount
} from "../services/medicineService";
import SideNav from "./Sidenav";
import PageContent from "./PageContent";
import Content from "./Content";
import FeaturedCard from "./FeatureCard";
import FeaturedCards from "./FeaturedCards";
import UseTabs from "../controller/UseTabs";

const Medicine = (props) => {
    const [profile, setProfile] = useState({});
    const [allOrders, setAllOrders] = useState([]);
    const [pendingOrders, setPendingOrders] = useState([]);
    const [acceptedOrders, setAcceptedOrders] = useState([]);
    const [approvedCount, setApprovedCount] = useState(0);
    const [expiredCount, setExpiredCount] = useState(0);
    const [distributedCount, setDistributedCount] = useState(0);

    const { title } = props;

    if (!getAuthToken()) {
        window.location = "/";
    }

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

    const getPendingOrders = async () => {
        try {
            const { data } = await getAllPendingOrders(getAuthToken());
            setPendingOrders(data);
        } catch (ex) {
            console.log(ex.response);
        }
    };

    const getAcceptedOrders = async () => {
        try {
            const { data } = await getAllAcceptedOrders(getAuthToken());
            setAcceptedOrders(data);
        } catch (ex) {
            console.log(ex.response);
        }
    };

    const getOrders = async () => {
        try {
            const { data } = await getAllOrders(getAuthToken());
            setAllOrders(data);
        } catch (ex) {
            console.log(ex.response);
        }
    };

    const getAvailableDrugs = async () => {
      try {
            const response = await getAvailableMedicine(getAuthToken());
          console.log(response);
      } catch (ex) {
          console.log(ex.response);
      }
    };

    const getApprovedCount = async () => {
        try {
            const { data } = await getValidMedicineCount(getAuthToken());
            setApprovedCount(data);
        } catch (ex) {
            console.log(ex.response);
        }
    };

    const getExpiredCount = async () => {
        try {
            const { data } = await getExpiredMedicineCount(getAuthToken());
            setExpiredCount(data);
        } catch (ex) {
            console.log(ex.response);
        }
    };

    const getDistributed = async () => {
        try {
            const { data } = await getDistributedMedicineCount(getAuthToken());
            setDistributedCount(data);
        } catch (ex) {
            console.log(ex.response);
        }
    };

    useEffect(() => {
        getCurrentUser();
        getPendingOrders();
        getAcceptedOrders();
        getOrders();
        getAvailableDrugs();
        getApprovedCount();
        getExpiredCount();
        getDistributed();
    }, [title]);

    return (
        <Content title={title} profile={profile}>
            <FeaturedCards>
                <FeaturedCard colSize="col-md-3" count={approvedCount} title="Available Medicine Stock" />
                <FeaturedCard colSize="col-md-3" count={distributedCount} title="Total Distributed Medicine" />
                <FeaturedCard colSize="col-md-3" count={expiredCount} title="Total Expired Medicine" />
                <FeaturedCard colSize="col-md-3" count={distributedCount + expiredCount + approvedCount} title="Total Medicine Stock" />
            </FeaturedCards>
            <SideNav />
            <PageContent colSize="col-md-9 p-2 card">
                <UseTabs pendingOrders={pendingOrders} allOrders={allOrders} acceptedOrders={acceptedOrders} />
            </PageContent>
        </Content>
    );
};

export default Medicine;
