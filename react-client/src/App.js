import logo from './logo.svg';
import './App.css';
import Path from './routes/path';
import Sidebar from './component/sidebar/sidebar';
import { useContext } from 'react';
import { userContext } from './context/appContext';
function App() {
  const ctx = useContext(userContext);
  const sidebarFlag = ctx.sharedData.sidebarFlag;

  return (<>
  <div>


    <Path/>
    <div className="App bg-base-200 h-[100vh] grid grid-cols-7">
      {sidebarFlag && 
       (<Sidebar/>)}
      {/*  */}
       <h1 className="text-3xl font-bold underline col-span-6 ">
      
    </h1>
    </div>
  </div>
  
  </>
  );
}

export default App;
