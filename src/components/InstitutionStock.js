import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { getAuthToken, getProfile } from "../services/authService";
import { getIncomingOrders, getInstitutionName, getAvailableDrugs, getReceivedDrugs } from "../services/hospitalsService";
import PageContent from "./PageContent";
import FeatureCard from "./FeatureCard";
import Content from "./Content";
import MedicineStockTable from "../utils/MedicineStockTable";


const InstitutionStock = (props) => {
    const [profile, setProfile] = useState({});
    const [pendingIncoming, setPendingIncoming] = useState([]);
    const [hospitalName, setHospitalName] = useState('');
    const [availableDrugs, setAvailableDrugs] = useState(0);
    const [receivedDrugs, setReceivedDrugs] = useState(0);
    const [pendingTransaction, setPendingTransaction] = useState(0);

    const { title } = props;

    const { refNo } = useParams();

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

    const getPendingIncoming = async () => {
        try {
            const {data} = await getIncomingOrders(refNo, getAuthToken());
            setPendingIncoming(data);
            setPendingTransaction(data.length);
        } catch (ex) {
            console.log(ex.response);
        }
    };

    const getHospitalName = async () => {
      try {
          const { data } = await getInstitutionName(refNo, getAuthToken());
          setHospitalName(data.name);
      } catch (ex) {
          console.log(ex.response);
      }
    };

    const getAvailableMedicineCount = async () => {
      try {
          const { data } = await getAvailableDrugs(refNo, getAuthToken());
          setAvailableDrugs(data.Available);
      } catch (ex) {
          console.log(ex.response);
      }
    };

    const getReceivedMedicineCount = async () => {
      try {
          const { data } = await getReceivedDrugs(refNo, getAuthToken());
          setReceivedDrugs(data.Received);
      } catch (ex) {
          console.log(ex.response);
      }
    };

    useEffect(() => {
        getCurrentUser();
        getPendingIncoming();
        getHospitalName();
        getAvailableMedicineCount();
        getReceivedMedicineCount();
    }, [title]);

    return (
        <Content title={title} profile={profile}>
            <PageContent colSize="col-md-12" >
                <h5 className="h5 text-center p-3">Medicine Stock For {hospitalName} Hospital</h5>
                <div className="row">
                    <FeatureCard colSize="col-md-4 p-2" count={availableDrugs} title="Available Drugs" />
                    <FeatureCard colSize="col-md-4 p-2" count={receivedDrugs} title="Received Drugs" />
                    <FeatureCard colSize="col-md-4 p-2" count={pendingTransaction} title="Pending Transaction" />
                </div>
                <hr />
                <div className="row justify-content-center">
                    <div className="col-md-11 m-1 card">
                        <MedicineStockTable pendingIncoming={pendingIncoming} />
                    </div>
                </div>
            </PageContent>
        </Content>
    );
};

export default InstitutionStock;
