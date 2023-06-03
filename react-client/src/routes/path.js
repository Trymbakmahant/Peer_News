import { Route,Routes } from "react-router-dom";
import Navbar from "../component/Navbar/navbar";


const Path =()=>{

    return(<>

    <Routes>

        <Route exact path="/" element ={<Navbar/>}/>
    </Routes>
    
    
    </>)
}
export default Path;