import React, { useState, useEffect } from 'react';
import { getAuthToken, getProfile } from "../services/authService";
import { getAllHospitals } from "../services/hospitalsService";
import Content from "./Content";
import SideNav from "./Sidenav";
import PageContent from "./PageContent";
import InstitutionViewTable from "../utils/InstitutionViewTable";

const Hospitals = (props) => {
    const [profile, setProfile] = useState({});
    const [institutions, setInstitutions] = useState([]);

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

    const getInstitutions = async () => {
      try{
          const { data } = await getAllHospitals(getAuthToken());
          setInstitutions(data);
      } catch (ex) {
          console.log(ex.response);
      }
    };

    useEffect(() => {
        getCurrentUser();
        getInstitutions();
    }, [title]);

    return (
        <Content title={title} profile={profile}>
            <SideNav />
            <PageContent colSize="col-md-9 p-2 card">
                <InstitutionViewTable institutions={institutions} />
            </PageContent>
        </Content>
    );
};

export default Hospitals;
