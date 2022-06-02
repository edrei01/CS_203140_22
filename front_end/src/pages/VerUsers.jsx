import '../assets/stylesheets/VerUsers.css';
import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import axios from 'axios';



function VerUsers(){

    const [data, setData] = useState([])

    useEffect(() =>{
        axios.get('http://localhost:3001/api/user/mostrar/')
        .then(res =>{
            console.log(res.data)
            setData(res.data.statusMessage.rows)
        })
        .catch(err =>{
            console.log(err)
        })
    }, [])


    const postDelete = (id,e) =>{
        e.preventDefault();
        axios.delete(`http://localhost:3000/api/user/eliminar?id=${id}`)
        .then(res => console.log(res))
        .catch(err => console.log(err))
        alert("Dato Eliminado")
    }

    const arr = data.map((data, index)=>{
        return(
            <tr className="fila_impar">
                <td>{data.id}</td>
                <td>{data.username}</td>
                <td>{data.email}</td>
                <td>{data.password}</td>
                <td>{data.phone_number}</td>
                <td><button onClick={(e) => postDelete(data.id, e)} type="button" class="btn btn-outline-danger btn-sm">Delete</button></td>
            </tr>
        );
    })


    return (
        <React.Fragment>

            <table border="1">
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Phone</th>
                    <th>Delete User</th>

                </tr>
                {arr}
            </table>
            <div className="mb-3">

                <Link to="/" className="btn btn-outline-primary">Back</Link>


            </div >

        </React.Fragment>
    );
}

export default VerUsers;