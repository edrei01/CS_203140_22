import "../assets/stylesheets/Users.css";
import React, { useState } from "react";
import {Link} from "react-router-dom";
import axios from "axios";


function U_Phone(){



    const [data, setData]= useState({
        id: "",
        phone_number: ""

    })

    const url=`http://localhost:3001/api/user/phone?id=${data.id}&phone_number=${data.phone_number}`

    function Enviar(e){
        e.preventDefault();

        axios.patch(url,{
            id: data.id,
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
                    <h3>Phone</h3>
                    <form className="was-validated">

                        <div className="input-group mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-default">Id User</span>
                            <input onChange={(e)=>handle(e)} id="id" value={data.id} type="text" className="form-control" required></input>
                        </div>

                        <div className="input-group mb-3" >
                            <span className="input-group-text" id="inputGroup-sizing-default">Phone_Number</span>
                            <input onChange={(e)=>handle(e)} id="phone_number" value={data.phone_number} type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required></input>
                        </div>


                        <div className="mb-3">
                            <Link to="/Update_Patch" className="btn btn-outline-primary" >Back</Link>
                            <Link to="/" onClick={(e)=>Enviar(e)} className="btn btn-outline-primary">Update</Link>
                        </div>
                    </form>

                </form>
            </div>

        </React.Fragment>
    );
}

export default U_Phone;