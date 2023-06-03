
import {  createContext, useState } from "react";

export const userContext = createContext({});

const Wrapper =(props)=>{


const[sidebarFlag, setSidebarFlag]  = useState(true);




const  sharedData =
{
    sidebarFlag,
    setSidebarFlag
}



 

    return(
        <userContext.Provider value={{ sharedData}}>

             {props.children}
        </userContext.Provider>
    )
}

export default Wrapper;