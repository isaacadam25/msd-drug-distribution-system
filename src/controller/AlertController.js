import React from 'react';
import { Alert } from "react-bootstrap";

const AlertController = (props) => {
    const { setShow, label, variant } = props;

    return (
        <Alert variant={variant || "danger"} onClose={() => setShow(false)} dismissible>
            <Alert.Heading>{label}</Alert.Heading>
        </Alert>
    );
};

export default AlertController;