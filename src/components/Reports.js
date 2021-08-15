import React, { useState, useEffect } from 'react';
import { getDistributedMedicineCount, getExpiredMedicineCount, getValidMedicineCount } from "../services/medicineService";
import { getAuthToken, getProfile } from "../services/authService";
import Content from "./Content";
import PageContent from "./PageContent";
import FeatureCard from "./FeatureCard";
import RenderLineChart from "../charts/LineChart";

const Reports = (props) => {
    const [profile, setProfile] = useState({});
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
        getApprovedCount();
        getExpiredCount();
        getDistributed();
    }, [title]);

    return (
        <Content title={title} profile={profile} >
            <PageContent colSize="col-md-12" >
                <div className="row">
                    <FeatureCard colSize="col-md-3 p-2" count={distributedCount} title="Total Distributed Drugs" />
                    <FeatureCard colSize="col-md-3 p-2" count={approvedCount} title="Total Available Drugs"  />
                    <FeatureCard colSize="col-md-3 p-2" count={distributedCount + approvedCount + expiredCount} title="Total Received Drugs"  />
                    <FeatureCard colSize="col-md-3 p-2" count={expiredCount} title="Total Expired Drugs"  />
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-11 m-1 card justify-content-center">
                        <h6 className="h6 text-center p-2">Received Medicine Reports</h6>
                        <RenderLineChart />
                    </div>
                </div>
            </PageContent>
        </Content>
    );
};

export default Reports;
