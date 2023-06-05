import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { IoIosArrowBack, IoMdMenu } from "react-icons/io";
import { AiOutlineAppstore } from "react-icons/ai";
import { SlSettings } from "react-icons/sl";
import { RiBuilding3Line } from "react-icons/ri";
import { useMediaQuery } from "react-responsive";
import SubMenues from "./subMenues";
import { useEffect } from "react";
import { BsNewspaper } from "react-icons/bs";
import { FaUpload } from "react-icons/fa";
import { HiOutlineHome } from "react-icons/hi";
import { TbDeviceAnalytics } from "react-icons/tb";
const NewSidebar = () => {
  const subMenuesList = [
    {
      name: "Latest News",
      icon: BsNewspaper,
      menus: ["politics", "bussinuss", "Movies"],
    },
    {
      name: "analytics",
      icon: TbDeviceAnalytics,
      menus: ["dashbord", "realtime", "event"],
    },
  ];
  let isTab = useMediaQuery({ query: "(max-width: 768px)" });
  console.log(isTab, "isTab");
  const [isopen, setIsOpen] = useState(isTab ? false : true);

  useEffect(() => {
    if (isTab) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }, [isTab]);

  const sidebar_animation = isTab
    ? {
        open: {
          x: 0,
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          x: -250,
          width: 0,
          width: "4rem",
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
      }
    : {
        open: {
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          width: "4rem",
          transition: {
            damping: 40,
          },
        },
      };
  return (
    <>
      <div>
        <div
          className={`md:hidden fixed hiset-0 max-h-screen  z-{998} bg-black/50 ${
            isopen ? "block" : "hidden"
          }
            }  `}
        ></div>
        <motion.div
          variants={sidebar_animation}
          animate={isopen ? "open" : "closed"}
          className="bg-white text-gray shadow-xl z-[999] w-[16rem] max-w-[16rem] h-screen overflow-hidden md:relative fixed"
        >
          <div className="flex items-center gap-2.5 font-medium border-b border-slate-300 py-3 mx-3">
            <img src="./avatar.jpg" alt=".." width={45} />
            <span className="text-xl whitespace-pre">@ User Name</span>
          </div>
          {/* menus */}
          <div className="flex flex-col h-full ">
            <ul className="whitespace-pre no-underline px-2.5 text-[0.9rem] py-5 flex flex-col gap-1 font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100  h-[70%]  md:h-[68%]">
              <li>
                <NavLink to="/" className={"link no-underline "}>
                  <HiOutlineHome size={23} className="min-w-max" />
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/upload" className={"link no-underline "}>
                  <FaUpload size={23} className="min-w-max" />
                  upload
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={"link no-underline"}>
                  <AiOutlineAppstore size={23} className="min-w-max" />
                  About
                </NavLink>
              </li>

              {(isopen || isTab) && (
                <div className="border-y py-5 border-slate-300">
                  <small className="pl-3 text-slate-500 inline-blick mb-2">
                    News catogries
                  </small>

                  {subMenuesList?.map((menu) => (
                    <div key={menu.name} className="flex flex-col gap-1">
                      <SubMenues data={menu} />
                    </div>
                  ))}
                </div>
              )}
              <li>
                <NavLink to="/settings" className={"link no-underline"}>
                  <SlSettings size={23} className="min-w-max" />
                  satting
                </NavLink>
              </li>
            </ul>

            {isopen && (
              <div className="flex-1 text-sm z-50 max-h-48 my-auto whitespace-pre w-full font-medium">
                <div className=" flex items-center justify-between border-y border-slate-300 p-4">
                  <div>
                    <p>Spark</p>
                    <small>No-cost $0/month</small>
                  </div>
                  <p className="text-teal-500  py-1.5 px-3 text-xs bg-teal-50 rounded-xl">
                    Upgrade
                  </p>
                </div>
              </div>
            )}
          </div>

          <motion.div
            animate={
              isopen
                ? {
                    x: 0,
                    y: 0,
                    rotate: 0,
                  }
                : {
                    x: -10,
                    y: -200,
                    rotate: 180,
                  }
            }
            transition={{
              duration: 0,
            }}
            onClick={() => setIsOpen(!isopen)}
            className="absolute w-fit h-fit z-50 right-2 bottom-5 cursor-pointer md:block hidden"
          >
            <IoIosArrowBack size={25} />
          </motion.div>
        </motion.div>

        <div className="m-2 md:hidden  " onClick={() => setIsOpen(true)}>
          <IoMdMenu size={25} />
        </div>
      </div>
    </>
  );
};
export default NewSidebar;
