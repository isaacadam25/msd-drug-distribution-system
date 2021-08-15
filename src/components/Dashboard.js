import React, { useEffect, useState } from "react";
import { getProfile, getAuthToken } from "../services/authService";
import {
  getApprovedMedicine,
  getDistributedMedicineCount,
  getExpiredMedicineCount,
  getValidMedicineCount,
} from "../services/medicineService";
import FeaturedCard from "./FeatureCard";
import FeaturedCards from "./FeaturedCards";
import Content from "./Content";
import SideNav from "./Sidenav";
import PageContent from "./PageContent";
import ReceivedMedicineTable from "../utils/ReceivedMedicineTable";

const Dashboard = (props) => {
  const [profile, setProfile] = useState({});
  const [approvedCount, setApprovedCount] = useState(0);
  const [expiredCount, setExpiredCount] = useState(0);
  const [distributedCount, setDistributedCount] = useState(0);
  const [receivedDrug, setReceivedDrug] = useState([]);

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
    } catch (ex) {
      console.log(ex.response);
    }
  };

  const getMedicine = async () => {
    try {
      const { data } = await getApprovedMedicine(getAuthToken());
      setReceivedDrug(data);
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
    getMedicine();
    getApprovedCount();
    getExpiredCount();
    getDistributed();
  }, [title]);

  return (
    <Content title={title} profile={profile}>
      <FeaturedCards>
        <FeaturedCard
          colSize="col-md-3"
          count={distributedCount}
          title="Total Distributed Stock"
        />
        <FeaturedCard
          colSize="col-md-3"
          count={approvedCount}
          title="Total Available Stock"
        />
        <FeaturedCard
          colSize="col-md-3"
          count={expiredCount + approvedCount + distributedCount}
          title="Total Received Medicine"
        />
        <FeaturedCard
          colSize="col-md-3"
          count={expiredCount}
          title="Total Expired Medicine"
        />
      </FeaturedCards>
      <SideNav />
      <PageContent colSize="col-md-9 p-1 card">
        <ReceivedMedicineTable items={receivedDrug} />
      </PageContent>
    </Content>
  );
};

export default Dashboard;
