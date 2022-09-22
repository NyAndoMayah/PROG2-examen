import React from "react";
import Products from "./Products";
import LeftNavbar from "./LeftNavbar";
import { useRef, useEffect, useState } from "react";
import NavBar from "./Navbar";
import ProductModal from "./ProductModal";
function TableProducts() {
    const [modalIsOn, setModalIsOn] = useState(false);
    const toggleModal = () => setModalIsOn(!modalIsOn);
    return (
        <div>
            <NavBar />
            <div className="modalDiv">
                {modalIsOn && <ProductModal toggle = {toggleModal}/>}
            </div>
            <div className="row">
                <LeftNavbar />
                <div className="col-9">
                    <div className="row ">
                        <h2 className="col-10">Products</h2>
                        <button className="btn btn bg-success text-white" onClick= { toggleModal } >Add a Product</button>
                    </div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col" className="col-5">#</th>
                                <th scope="col" className="col-5">Name</th>
                                <th scope="col" className="col-1">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <Products></Products>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
export default TableProducts;