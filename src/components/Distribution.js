import React from 'react';
import Content from "./Content";
import SideNav from "./Sidenav";
import PageContent from "./PageContent";
import DistributeMedicine from "../utils/DistributeMedicine";
import TextFieldController from "../controller/TextFieldController";

const Distribution = (props) => {
    const { title } = props;

    return (
        <Content title={title}>
            <SideNav />
            <PageContent colSize="col-md-9 p-1 card">
                <div className="row">
                    <div className="col-md-12">
                        <form >
                            <TextFieldController label="Destination" />
                            <TextFieldController label="Ref No" />
                            <button className="btn btn-primary btn-sm float-end">Add Order</button>
                        </form>
                    </div>

                    <DistributeMedicine />
                </div>
            </PageContent>
        </Content>
    );
};

export default Distribution;
