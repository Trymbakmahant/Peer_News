import { LuLogOut } from "react-icons/lu";
import { SlSettings } from "react-icons/sl";
import { BsPersonSquare} from "react-icons/bs";
import {IoBusinessOutline} from "react-icons/io5";
import { MdOutlineFlight,MdSportsTennis,MdOutlineLocalMovies} from "react-icons/md";
const Sidebar =()=>{
 
    return (<>

    <div className="grid bg-base-100 w-[30vh] ">


        <div >   

            <div className ="grid grid-cols-3 p-[5vh]">

                <div className="w-[40px] h-[40px]">
                <img src ="./avatar.jpg" />

                </div>
                <div className ="col-span-2">
                 @ user   -name 
                </div>

            </div>
            <hr/>
            <ul>
                <li>

                    <div className="h-[7vh] w-[30vh] mt-[3vh] hover:border-l-4  hover:border-sky-500  text-xl  lg:pt-[2vh] sm:pt-[1vh]   hover:bg-sky-200  hover:underline-offset-8 hover:text-sky-500     hover:font-semibold  focus:border-l-4  focus:border-sky-500  focus:bg-sky-200 focus:text-sky-500  focus:font-semibold">
                    <div className="flex">
                 
                 <div className="ml-4 mt-1">
                  <MdOutlineLocalMovies/>
                 </div>
       

                   <div className="ml-2">

                   Movies
                   </div>

               </div>
                    </div>
                </li>
                <li>

                    <div className="h-[7vh] w-[30vh]  mt-[5vh] hover:border-l-4 hover:border-sky-500   text-xl    pt-[2vh] hover:bg-sky-200  hover:underline-offset-8 hover:text-sky-500 hover:font-semibold">
                   
                    <div className="flex">
                 
                      <div className="ml-4 mt-1 ">
                       <MdSportsTennis/>
                      </div>
            

                        <div className="ml-2">

                        Sports
                        </div>

                    </div>
                       
                    </div>
                </li>
                <li>

                    <div className="h-[7vh] w-[30vh]  mt-[5vh] hover:border-l-4 hover:border-sky-500  text-xl   pt-[2vh] hover:bg-sky-200  hover:underline-offset-8 hover:text-sky-500 hover:font-semibold">
                <div className="flex">
                  <div className="ml-4 mt-1">

                  <MdOutlineFlight/>   
                  </div>
                  <div className="ml-2">

                  Travelling
                  </div>
                </div>
                    </div>
                </li>
                <li>

                    <div className="h-[7vh] w-[30vh] mb-[3vh] mt-[5vh] hover:border-l-4 hover:border-sky-500 pt-[2vh] text-xl  hover:bg-sky-200  hover:underline-offset-8 hover:text-sky-500 hover:font-semibold">
                    <div className="flex">
                 
                 <div className="ml-4 mt-1">
                  <IoBusinessOutline/>
                 </div>
       

                   <div className="ml-2">

                   Bussinuss
                   </div>

               </div>
                    </div>
                </li>
                
            </ul>
            <hr/>
               <div className =" p-[5vh]">

               <div  className="mt-5">
            
            <div className="flex">
              
              <div className="mt-1">

             <BsPersonSquare/> 
              </div>

              <div className=" ml-4 cursor-pointer	 ">

               Account
              </div>
            </div>
          
         
               </div>
               <div  className="mt-5">
            
            <div className="flex">
              
              <div className="mt-1">

             <SlSettings /> 
              </div>

              <div className=" ml-4 cursor-pointer	">

               Satting
              </div>
            </div>
          
         
               </div>
               <div  className="mt-5">
            
            <div className="flex">
              
              <div className="mt-1">

             <LuLogOut /> 
              </div>

              <div className=" ml-4 cursor-pointer	">

               Log out..
              </div>
            </div>
          
         
               </div>

            </div>
        </div>
    </div>
    </>)

}
export default Sidebar;