import React from "react";
import axios from "axios";
import Types from "./Types";
import NavBar from "./Navbar";
import LeftNavbar from "./LeftNavbar";
import { BASE_URL } from "../conf/environnement";
import { useEffect,useState } from "react";
import TypeModal from "./TypeModal";

function TableTypes() {
    const [modalIsOn, setModalIsOn] = useState(false);
    const toggleModal = () => setModalIsOn(!modalIsOn);
    const [post, setPost] = useState([]);

    useEffect(() => {
        const execute = async() => {
            try{
                await axios.get(BASE_URL + "/type").then((response) => {
                    setPost(response.data);
                });
            }catch(e){
                console.log(e)
            }
        }
        execute();
    }, [post]);

    return (
        <div>
            <NavBar/>
            <div className="forModal">
                {modalIsOn && <TypeModal toggle={toggleModal}/>}
            </div> 
            <div className="row">
                <LeftNavbar />
                <div className="col-10">
                <div className="row">
                        <h2 className="col-10">Types</h2>
                        <button className="btn btn bg-success text-white" onClick={toggleModal}>Add a Type</button>
                    </div>
                    <table className="table ">
                        <thead>
                            <tr>
                                <th scope="col-1" className="text-center">#</th>
                                <th scope="col-2" className="text-center">Name</th>
                                <th scope="col-2"className="text-center">Addition Date</th>
                                <th scope="col-2" className="text-center">Peremption Date</th>
                                <th scope="col-1" className="text-center">Pieces Number</th>
                                <th scope="col-1" className="text-center">Product's ID</th>
                                <th scope="col-1" className="text-center">Unit Price</th>
                                <th scope="col-1" className="text-center">Unit Quantity</th>
                                <th scope="col-1" className="text-center">Total Quantity</th>
                                <th scope="col-1" className="text-center">Total Price</th>
                                <th scope="col" className="col-1 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <Types></Types>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
export default TableTypes;