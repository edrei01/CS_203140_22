import '../assets/stylesheets/App.css';
import { Routes, Route} from "react-router-dom";
import Inicio from "./Inicio";
import VerUsers from "../pages/VerUsers";
import Users from '../pages/Users';
import UpdateUsers from '../pages/UpdateUsers';
import Update_Patch from "./Update_Patch";
import U_Name from "../pages/U_Name";
import U_Email from "../pages/U_Email";
import U_Password from "../pages/U_Password";
import U_Phone from "../pages/U_Phone";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/Users" element={<Users />} />
                <Route path="/VerUsers" element={<VerUsers />} />
                <Route path='/UpdateUsers' element={<UpdateUsers/>}/>
                <Route path='/Update_Patch' element={<Update_Patch/>}/>
                <Route path='/U_Name' element={<U_Name/>}/>
                <Route path='/U_Email' element={<U_Email/>}/>
                <Route path='/U_Password' element={<U_Password/>}/>
                <Route path='/U_Phone' element={<U_Phone/>}/>
            </Routes>
        </div>
    );
}

export default App;