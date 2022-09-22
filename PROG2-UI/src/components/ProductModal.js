import React from "react";
import { useEffect, useState } from "react";
import './assets/styles.css';
import axios from "axios";
import { BASE_URL } from "../conf/environnement";

function ProductModal(props) {

    const [productName, setProductName] = useState('');
    const { toggleModal } = props;
    const handleChange = (e) => setProductName(e.target.value);
    function addProduct(e) {
        const fetch = async () => {
            try {
                await axios.post(BASE_URL + '/products', { productName })
                alert("The product is created")
            } catch (e) {
                console.log(e)
            }
        }
        fetch();
    }
    return (
        <div className="backdrop">
            <div onSubmit={addProduct} className="col-3 modal-alt">
                <h5>Add a new product</h5>
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputName">Name</label>
                        <input type="text" className="form-control" id="exampleInputName" aria-describedby="nameHelp" placeholder="Enter the name" onChange={handleChange} />
                    </div>
                    <div className="row " >
                        <div className="col-6 text-center">
                            <button type="button" className='btn btn-danger' onClick={toggleModal}>Cancel</button>
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
export default ProductModal;