import React from 'react';
import PageContent from "./PageContent";
import FeatureCard from "./FeatureCard";
import Content from "./Content";
import MedicineStockTable from "../utils/MedicineStockTable";


const InstitutionStock = (props) => {
    const { title } = props;

    return (
        <Content title={title}>
            <PageContent colSize="col-md-12" >
                <h5 className="h5 text-center p-3">Medicine Stock For Makulu Hospital</h5>
                <div className="row">
                    <FeatureCard colSize="col-md-4 p-2" />
                    <FeatureCard colSize="col-md-4 p-2" />
                    <FeatureCard colSize="col-md-4 p-2" />
                </div>
                <hr />
                <div className="row justify-content-center">
                    <div className="col-md-11 m-1 card">
                        <MedicineStockTable />
                    </div>
                </div>
            </PageContent>
        </Content>
    );
};

export default InstitutionStock;
