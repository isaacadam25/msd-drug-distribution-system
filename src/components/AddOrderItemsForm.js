import React, { useState, useEffect } from 'react';
import { getAuthToken } from "../services/authService";
import { addOrderItems } from "../services/orderService";
import TextFieldController from "../controller/TextFieldController";
import SelectController from "../controller/SelectController";

const formValue = {
    batch: 0,
    quantity: 0,
    description: ''
}

const AddOrderItemsForm = (props) => {
    const [values, setValues] = useState(formValue);

    const { handleCloseModal, batches, orderId, setOrderItems } = props;

    const handleChange = (e) => {
      setValues({...values, [e.target.name] :e.target.value});
        console.log(values);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            batch: values.batch,
            order: orderId,
            quantity: values.quantity,
            description: values.description
        }

        try {
            const { data } = await addOrderItems(payload, getAuthToken());
            setOrderItems(data.order);
            console.log(data);
        } catch (ex) {
            console.log(ex.response);
        }
    };

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <form className="p-2" onSubmit={handleSubmit}>
                    <SelectController
                        label="Batch No"
                        options={batches}
                        name="batch"
                        value={values.batch}
                        onChange={handleChange}
                    />
                    <TextFieldController
                        label="Quantity"
                        name="quantity"
                        type="number"
                        value={values.quantity}
                        placeholder="Enter quantity to send"
                        onChange={handleChange}
                    />
                    <TextFieldController
                        label="Description"
                        name="description"
                        value={values.description}
                        placeholder="Enter order description"
                        onChange={handleChange}
                    />
                    <button className="btn btn-primary float-end btn-sm m-2" onClick={ () => handleCloseModal(true)}>Add Item</button>
                </form>
            </div>
        </div>
    );
};

export default AddOrderItemsForm;
