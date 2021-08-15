import React from 'react';
import FeaturedCard from "./FeatureCard";
import FeaturedCards from "./FeaturedCards";
import Content from "./Content";
import SideNav from "./Sidenav";
import PageContent from "./PageContent";
import ReceivedMedicineTable from "../utils/ReceivedMedicineTable";

const Dashboard = (props) => {
    const { title } = props;

    return (
        <Content title={title}>
            <FeaturedCards>
                <FeaturedCard />
                <FeaturedCard />
                <FeaturedCard />
                <FeaturedCard />
            </FeaturedCards>
            <SideNav />
            <PageContent colSize="col-md-9 p-1 card">
                <ReceivedMedicineTable />
            </PageContent>
        </Content>
    );
};

export default Dashboard;
