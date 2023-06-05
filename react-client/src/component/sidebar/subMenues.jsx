import {IoIosArrowDown} from "react-icons/io"
import { motion } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
const SubMenues =({data})=>{
    const {pathname} = useLocation();
    const [ subMeueOpen, setSubMenueOpen] = useState(false)
    return(
        <>
        <div>
        <li className={`link ${pathname.includes(data.name)&& 'text-blue-600 no-underline'} `}
        onClick={()=>{setSubMenueOpen(!subMeueOpen)}}
        >
      

    
        <data.icon size={23} className="min-w-max"/>
        <p className="capitalize flex-1 no-underline">{data.name}</p>
        <IoIosArrowDown className={`${subMeueOpen && 'rotate-180'} duration-200`} />
    </li>
            <motion.ul
            animate ={
                subMeueOpen ?
               { height:'fit-content'}
               :
               {height:0}
            }
             className="flex flex-col pl-14 text-[0.8rem] font-nornal  no-underline overflow-hidden h-0 ">
                {data.menus.map((menu)=>(
                    <li key={(menu)}>
                        <NavLink to={`/${data.name}/${menu}`}
                        className="link no-underline !bg-transparent capitalize">
                         {menu}
                        </NavLink>

                    </li>
                ))}
            </motion.ul>
            </div></>
    )
}
export default SubMenues;