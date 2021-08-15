import React from 'react';
import SideNav from "./Sidenav";
import PageContent from "./PageContent";
import Content from "./Content";
import FeaturedCard from "./FeatureCard";
import FeaturedCards from "./FeaturedCards";
import OrderDetailsTable from "../utils/OrderDetailsTable";

const Medicine = (props) => {
    const { title } = props;

    return (
        <Content title={title}>
            <FeaturedCards>
                <FeaturedCard colSize="col-md-4" />
                <FeaturedCard colSize="col-md-4" />
                <FeaturedCard colSize="col-md-4" />
            </FeaturedCards>
            <SideNav />
            <PageContent colSize="col-md-9 p-2 card">
                <OrderDetailsTable />
            </PageContent>
        </Content>
    );
};

export default Medicine;
