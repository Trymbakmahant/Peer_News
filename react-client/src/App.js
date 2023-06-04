import logo from "./logo.svg";
import "./App.css";
import Path from "./routes/path";
import Sidebar from "./component/sidebar/sidebar";
import { useContext } from "react";
import { userContext } from "./context/appContext";
function App() {
  const ctx = useContext(userContext);
  const sidebarFlag = ctx.sharedData.sidebarFlag;

  return (
    <>
      <div>
        <Path />
      </div>
    </>
  );
}

export default App;
