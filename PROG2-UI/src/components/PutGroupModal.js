import React from "react";
import { useEffect, useState } from "react";
import './assets/styles.css';
import axios from "axios";
import { BASE_URL } from "../conf/environnement";

function GroupModal(props) {
    const [groupName, setGroupName] = useState({
        id: 0,
        groupName: ""
    });
    const { toggleModal } = props;
    function handleChange(e) {
        const { name, value } = e.target;
        const temp = groupName;
        temp[name] = value;
        setGroupName(temp);
    }
    const modifyGroup = () => {
        const execute = async () => {
            try {
                await axios.put(BASE_URL + '/groups', { groupName });
                alert("The product is created")
            } catch (e) {
                console.log(e)
            }
        }
        execute();
    }
    return (
        <div className="backdrop">
            <div className="col-3 modal-alt">
                <h5>Add a new group</h5>
                <form onSubmit={modifyGroup} >
                <div className="form-group">
                        <label htmlFor="exampleInputName">Id</label>
                        <input type="text" className="form-control" id="exampleInputName" aria-describedby="nameHelp" placeholder="Enter the name" onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputName">Name</label>
                        <input type="text" className="form-control" id="exampleInputName" aria-describedby="nameHelp" placeholder="Enter the name" onChange={handleChange} />
                    </div>
                    <div className="row " >
                        <div className="col-6 text-center">
                            <button type="button" className='btn btn-danger' onClick={toggleModal}>Cancel</button>
                        </div>
                        <div className="col-6 text-center">
                            <button type="submit" className="btn btn-primary " >Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default GroupModal;