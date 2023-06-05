import { Route, Routes } from "react-router-dom";

import Home from "../pages/home"
import Upload from "../pages/upload"
import RootLayout from "../component/sidebar/RootLayout";

const Path =()=>{

    return(<>
    <RootLayout>

    <Routes>
        <Route exact path="/" element ={<Home/>}/>
        <Route exact path="/upload" element ={<Upload/>}/>
      
    </Routes>
    </RootLayout>
    
    
    </>)
}
export default Path;
