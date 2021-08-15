import React, { useEffect, useState } from 'react';
import { getAuthToken, getProfile } from "../services/authService";
import moment from "moment";
import Content from "./Content";
import SideNav from "./Sidenav";
import PageContent from "./PageContent";
import ModalController from "../controller/ModalController";
import ModalFooterController from "../controller/ModalFooterController";
import ChangePasswordForm from "./ChangePasswordForm";

const UserProfile = (props) => {
    const [profile, setProfile] = useState({});
    const [show, setShow] = useState(false);

    const { title } = props;

    const handleShow = () => {
        setShow(true);
    };

    const handleClose = () => {
        setShow(false);
    };

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

    useEffect(() => {
        getCurrentUser();
    }, []);

    const { first_name, last_name, organization_name, title: role, is_active, date_added } = profile;

    return (
        <Content title={title} profile={profile}>
            <SideNav />
            <PageContent colSize="col-md-9 p-1 card">
                <div className="row justify-content-center">
                    <div className="col-md-11">
                        <h6 className="text-center p-2">{first_name}`s Information</h6>
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="/images/avatar.png" className="img-fluid rounded-start" alt="avatar" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <table className="table table-hover table-striped ">
                                            <tbody>
                                                <tr>
                                                    <td><b>Full Name: </b></td><td>{first_name} {last_name}</td>
                                                </tr>
                                                <tr>
                                                    <td style={{ textTransform: "capitalize" }}><b>Organization: </b></td><td>{organization_name}</td>
                                                </tr>
                                                <tr>
                                                    <td><b>Role: </b></td><td>{role}</td>
                                                </tr>
                                                <tr>
                                                    <td><b>User Status: </b></td><td className="text-success">{is_active ? "Active" : "Suspended"}</td>
                                                </tr>
                                                <tr>
                                                    <td><b>Date Registered: </b></td><td>{moment(date_added).format('LL')}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-11 m-2">
                        <button onClick={handleShow} className="btn btn-primary float-end">Change Password</button>
                    </div>
                </div>
            </PageContent>
            <ModalController show={show} handleClose={handleClose}>
                <ChangePasswordForm />
                <ModalFooterController label="cancel" handleClose={handleClose} />
            </ModalController>
        </Content>
    );
};

export default UserProfile;