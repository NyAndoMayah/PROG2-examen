import React from "react";
import LeftNavbar from "./LeftNavbar";
import Groups from "./Groups";
import NavBar from "./Navbar";
import GroupModal from "./GroupModal";
import { useState } from "react";

function TableGroups() {
    const [modalIsOn, setModalIsOn] = useState(false);
    const toggleModal = () => setModalIsOn(!modalIsOn);
   
    return (
        <div>
            <NavBar />
            <div className="modalDiv" >
                {modalIsOn && <GroupModal toggle={toggleModal}/> /**raha true ilay modalisON de aseho ilay izy */} 
            </div>
            <div className="row">
                <LeftNavbar />
                <div className="col-9">
                    <div className="row">
                        <h2 className="col-10">Groups</h2>
                        <button className="btn btn bg-success text-white" onClick={toggleModal}>Add a Group</button>
                    </div>
                    <table className="table ">
                        <thead>
                            <tr>
                                <th scope="col" className="col-5">#</th>
                                <th scope="col" className="col-5">Name</th>
                                <th scope="col" className="col-1">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <Groups/>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
export default TableGroups;