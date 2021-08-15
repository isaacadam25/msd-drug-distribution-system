import React from 'react';
import Content from "./Content";
import PageContent from "./PageContent";
import FeatureCard from "./FeatureCard";

const Reports = (props) => {
    const { title } = props;

    return (
        <Content title={title}>
            <PageContent colSize="col-md-12" >
                <div className="row">
                    <FeatureCard colSize="col-md-3 p-2" />
                    <FeatureCard colSize="col-md-3 p-2" />
                    <FeatureCard colSize="col-md-3 p-2" />
                    <FeatureCard colSize="col-md-3 p-2" />
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-6 m-1 card">
                        <h6>Frequently Used Medicine Chart Here </h6>
                    </div>
                    <div className="col-md-5 m-1 card">
                        <h6>Disease Chart Here</h6>
                    </div>
                </div>
            </PageContent>
        </Content>
    );
};

export default Reports;
