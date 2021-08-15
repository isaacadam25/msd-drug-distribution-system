import React from 'react';
import Content from "./Content";
import SideNav from "./Sidenav";
import PageContent from "./PageContent";
import InstitutionViewTable from "../utils/InstitutionViewTable";

const Hospitals = (props) => {
    const { title } = props;

    return (
        <Content title={title}>
            <SideNav />
            <PageContent colSize="col-md-9 p-1 card">
                <InstitutionViewTable />
            </PageContent>
        </Content>
    );
};

export default Hospitals;
