import "../assets/stylesheets/Users.css";
import React, { useState } from "react";
import {Link} from "react-router-dom";
import axios from "axios";


function UpdateUsers(){

    
    
    const [data, setData]= useState({
        id: "",
        username: "",
        email: "",
        password: "",
        phone_number: ""

    })

    const url=`http://localhost:3001/api/user/actualizar?id=${data.id}&username=${data.username}&email=${data.email}&password=${data.password}&phone_number=${data.phone_number}`

    function Enviar(e){
        e.preventDefault();

        axios.put(url,{
            id: data.id,
            username: data.username,
            email: data.email,
            password: data.password,
            phone_number: data.phone_number
        })
        .then(res =>{
            console.log(res.data)
        })
        alert('Datos Actualizados')

    }

    function handle(e){
        const newdata = {...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)

    }




    return (
        <React.Fragment>

            <div className="xd">
        <form  className="form-box" id="form">
            <h3>Update User</h3>
            <form className="was-validated">

            <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Id User</span>
                    <input onChange={(e)=>handle(e)} id="id" value={data.id} type="text" className="form-control" required></input>

                <span className="input-group-text" id="inputGroup-sizing-default">UserName</span>
                <input onChange={(e)=>handle(e)} id="username" value={data.username} type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required></input>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Email</span>
                    <input onChange={(e)=>handle(e)} id="email" value={data.email} type="text" className="form-control" aria-label="Sizing example input"
                           aria-describedby="inputGroup-sizing-default" required></input>

                    <span className="input-group-text" id="inputGroup-sizing-default">Password</span>
                    <input onChange={(e)=>handle(e)} id="password" value={data.password} type="text" className="form-control" required></input>
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Phone Number</span>
                    <input onChange={(e)=>handle(e)} id="phone_number" value={data.phone_number} type="text" className="form-control" required></input>
                </div>

            </form>

        </form>
                <div className="mb-3">
                <Link to="/" className="btn btn-outline-primary" >Back</Link>
                <Link to="/" onClick={(e)=>Enviar(e)} className="btn btn-outline-primary">Update</Link>
            </div>
                </div>

        </React.Fragment>
    );
}

export default UpdateUsers;