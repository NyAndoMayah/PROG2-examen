import React from "react";
import axios from "axios";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BASE_URL } from "../conf/environnement";
import { useEffect } from "react";

function Types() {
    const [post, setPost] = React.useState([]);

    useEffect(() => {
        const fetch = async() => {
            try{
                axios.get(BASE_URL + "/type")
                .then((response) => {
                    setPost(response.data);
                });
            }catch(e){
                console.log(e)
            }
        }
        fetch();
    }, [post]);
    function check(string) {
        const fetch = async() => {
            try{
                await axios.delete(BASE_URL + "/type?id="+string)
                setTimeout(1000);
                alert("The type with the ID :"+ string +"is deleted successfully")
            }catch(e){console.log(e)}
        }
        fetch();
    }
    return post.map(function (row,key) {

        return (
            <tr key={row.id}>
                <th scope="row" className="text-center">{row.id}</th>
                <td className="text-center">{row.name}</td>
                <td className="text-center">{row.addedDate}</td>
                <td className="text-center">{row.peremptionDate}</td>
                <td className="text-center">{row.piecesNumber}</td>
                <td className="text-center">{row.product.id}</td>
                <td className="text-center">{row.unitPrice} €</td>
                <td className="text-center">{row.unitQuantity+" "+row.unit}</td>
                <td className="text-center">{row.totalQuantity+" "+row.unit}</td>
                <td className="text-center">{row.totalPrice} €</td>
                <td><FontAwesomeIcon icon={faPen} /></td>
                <td><FontAwesomeIcon icon={faTrash} onClick={() => { check(row.id) }} /></td>
            </tr>
        )
    }
    )
}
export default Types;