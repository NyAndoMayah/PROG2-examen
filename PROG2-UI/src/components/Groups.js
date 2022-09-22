import React from "react";
import axios from "axios";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { BASE_URL } from "../conf/environnement";

function Groups() {
   
    const [post, setPost] = React.useState([]);

    useEffect(() => {
        const fetch = async () => {
            try {
                await axios.get(BASE_URL + "/groups").then((response) => {
                    setPost(response.data);
                });
            } catch (e) {
                console.log(e)
            }
        }
        fetch();
    },[post]);

    function check(string) {
        const execute = async () => {
            try{
                await axios.delete(BASE_URL + "/groups/" + string);
                
            }catch(e){
                console.log(e)
            }
            setTimeout(1000)
                alert("The group with ID " + string + " is being deleted.")
        }
        execute();
    }
    return post.map(function (a,key) {
        return (
            <tr key={a.id}>
                <th scope="row">{a.id}</th>
                <td>{a.groupName}</td>
                <td><FontAwesomeIcon icon={faPen} onClick={() => { modify(a.of)}}/></td>
                <td><FontAwesomeIcon icon={faTrash} onClick={() => { check(a.id) }} /></td>
            </tr>
        );
    })
}
export default Groups;