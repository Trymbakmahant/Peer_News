import { Route, Routes } from "react-router-dom";
import Navbar from "../component/Navbar/navbar";
import LandingPage from "../component/LandingPage/Landing";
import { useContext, useEffect, useState } from "react";
import Sidebar from "../component/sidebar/sidebar";
import "./path.css";
import { userContext } from "../context/appContext";
const Path = () => {
  const ctx = useContext(userContext);
  const [sidebarFlag, setSidebarFlag] = useState(true);
  useEffect(() => {
    setSidebarFlag(ctx.sharedData.sidebarFlag);
  }, [ctx.sharedData.sidebarFlag]);
  return (
    <>
      {" "}
      {sidebarFlag ? (
        <div className="grid-container">
          <div className="grid-item item1">
            <Navbar />
          </div>

          <div className="gird-item item2">
            <Sidebar />
          </div>

          <div className="gird-item item5">
            <Routes>
              <Route exact path="/" element={<LandingPage />} />
            </Routes>
          </div>
        </div>
      ) : (
        <div className="grid-container">
          <div className="grid-item item1">
            <Navbar />
          </div>

          <div className="gird-item item3">
            <Routes>
              <Route exact path="/" element={<LandingPage />} />
            </Routes>
          </div>
        </div>
      )}
    </>
  );
};
export default Path;
