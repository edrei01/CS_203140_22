import React from "react";
import { Link } from "react-router-dom";

function Update_Patch(){
    return(
        <React.Fragment>
            <div className="xd">
                <form  className="form-box" id="form">
                    <h3>Name</h3>
                    <div className="mb-3">
                        <Link to="/U_Name" className="btn btn-outline-warning" >U_Name</Link>
                    </div >
                    <div className="mb-3">
                        <Link to="/U_Email" className="btn btn-outline-warning" >U_Email</Link>
                    </div >
                    <div className="mb-3">
                        <Link to="/U_Password" className="btn btn-outline-warning" >U_Password</Link>
                    </div>
                    <div className="mb-3">
                        <Link to="/U_Phone" className="btn btn-outline-warning" >U_Phone</Link>
                    </div>
                </form>
                <Link to="/" className="btn btn-outline-primary">Back</Link>
            </div>
        </React.Fragment>)
}
export default Update_Patch;