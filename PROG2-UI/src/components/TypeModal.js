import React from "react";
import { useState } from "react";
import "./assets/typemodal.css"
import axios from "axios";
import { BASE_URL } from "../conf/environnement";

const INTITIAL_OBJECT = {
    name: "",
    peremptionDate: "",
    unitPrice: 0.0,
    piecesNumber: 0,
    unit: "",
    unitQuantity: 0.0,
    product: {
        id: 0,
        productName: "",
        group: {
            id: 0,
            groupName: ""
        }
    }
};

function TypeModal(props) {
    const [inputValue, setInputValue] = useState(INTITIAL_OBJECT);
    const { toggleModal } = props;
    const handleChange = (e) => {
        const { name, value } = e.target;
        const temp = inputValue;
        temp[name] = value;
        setInputValue(temp);
    }
    const handleChangeProduct = async (e) => {
        const temp = inputValue;
        temp["product"] = (await axios.get(BASE_URL + "/products/" + e.target.value)).data;
        setInputValue(temp);
    }
    const addType = (e) => {
        e.preventDefault();
        const fetch = async () => {
            try {
                await axios.post(BASE_URL + "/type?unit=" + inputValue.unit, inputValue)
            } catch (e) {
                console.log(e)
            }
        }
        fetch();
    }

    return (
        <div className="backdrop">
            <div className="col-3 modal-alt">
                <h5>Add a new Type</h5>
                <form onSubmit={addType}>
                <div className="form-group">
                        <small htmlFor="exampleInputName">Name</small>
                        <input type="text" className="form-control" name="name" placeholder="Enter the name" onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <small htmlFor="exampleInputName">Peremption date</small>
                        <input type="date" className="form-control" name="peremptionDate" placeholder="Enter the peremption date" onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <small htmlFor="exampleInputName">Pieces number</small>
                        <input type="text" className="form-control" name="piecesNumber" placeholder="Enter the pieces number" onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <small htmlFor="exampleInputName">Unit price</small>
                        <input type="text" className="form-control" name="unitPrice" placeholder="Enter the unit price" onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <small htmlFor="exampleInputName">Unit Quantity</small>
                        <input type="text" className="form-control" name="unitQuantity" placeholder="Enter the unit quantity" onChange={handleChange} />
                    </div>
                    <div className="inputRadio row" name="unit">
                        <small htmlFor="exampleInputName" className="col-5">Unit</small>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="unit" id="inlineRadio1" value="l" onChange={handleChange} />
                            <small className="form-check-label" htmlFor="inlineRadio1" >l</small>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="unit" id="inlineRadio2" value="g" onChange={handleChange} />
                            <small className="form-check-label" htmlFor="inlineRadio2">g</small>
                        </div>
                    </div>
                    <div className="form-group">
                        <small htmlFor="exampleInputName">Product</small>
                        <input type="text" className="form-control" name="product" placeholder="Enter the id of the product" onChange={handleChangeProduct} />
                 </div>
                    <div className="row " >
                        <div className="col-6 text-center">
                            <button type="button" className='btn btn-danger' onClick={ toggleModal }>Cancel</button>
                        </div>
                        <div className="col-6 text-center">
                            <button type="submit" className="btn btn-primary ">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default TypeModal;