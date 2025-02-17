// App.jsx
import { BrowserRouter } from "react-router-dom";
import Header from './components/Header';
import SideBar from './components/SideBar';


import routesConfig from "./config/routesConfig.js";
import AppRoutes from "./routes/AppRoutes.jsx";



function App() {

  return (
    <BrowserRouter>
      <Header/>
      <div className="flex-container">
        <SideBar
          menuType="mainMember"
          routes={routesConfig}
          classMenu="main-menu"
          // onClose={onClose}
        />
        <div className="body-container">
          <AppRoutes />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App