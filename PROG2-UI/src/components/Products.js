import React from "react";
import axios from "axios";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BASE_URL } from "../conf/environnement";
function Products() {
    const [post, setPost] = React.useState([]);

    React.useEffect(() => {
        axios.get(BASE_URL + "/products").then((response) => {
            setPost(response.data);
        });
    }, [post]);

    function check(string) {
        const fetch = () => {
            try {
                axios.delete(BASE_URL + "/products/" + string);
                alert("The product with ID " + string + " is being deleted.")
            } catch (e) { console.log(e) }
        }
        fetch();
    }
    return post.map(function (a,key) {
        return (
            <tr key={a.id}>
                <th scope="row">{a.id}</th>
                <td>{a.productName}</td>
                <td><FontAwesomeIcon icon={faPen} /></td>
                <td><FontAwesomeIcon icon={faTrash} onClick={() => { check(a.id) }} /></td>
            </tr>
        );
    })
}
export default Products;