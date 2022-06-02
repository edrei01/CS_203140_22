import React from "react";
import { Link } from "react-router-dom";

function Inicio(){
    return(
        <React.Fragment>
        <div className="">
            <form  className="form-box" id="form">
                <h3>Ingreso</h3>
                <div className="mb-3">
                <Link to="/Users" className="btn btn-outline-warning" >Create User</Link>


                    <Link to="/Update_Patch" className="btn btn-outline-warning" >Partial Update</Link>
                </div >
                <div className="mb-3">
                    <Link to="/UpdateUsers" className="btn btn-outline-warning" >Update Users</Link>

                    <Link to="/VerUsers" className="btn btn-outline-warning" >View Users</Link>
                </div>
            </form>
        </div>
    </React.Fragment>)
}
export default Inicio;