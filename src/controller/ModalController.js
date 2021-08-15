import React from "react";
import { Modal } from "react-bootstrap";

const ModalController = (props) => {
    const { show, handleClose, title, children } = props;

    return (
        <Modal show={ show } onHide={ handleClose } backdrop="static" size="lg" keyboard={ false } >
            <Modal.Header>
                <Modal.Title>{ title }</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                { children }
            </Modal.Body>
        </Modal>
    );
};

export default ModalController;