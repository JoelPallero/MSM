import Login from "../pages/Login";
import Calendario from "../pages/Calendario"; //Home
import Church from "../pages/Church";
import Group from "../pages/Group";
import Song from "../pages/Song";
import Search from "../pages/Search";
// import Dashboard from "../pages/Dashboard"; dashboard

const routesConfig = {
  mainMaster: [
    { path: "/", label: "Dashboard", Component: Dashboard },
    { path: "/calendario", label: "Calendario", Component: Calendario },
    { path: "/church", label: "Iglesias", Component: Church },
    { path: "/group", label: "Equipos", Component: Group },
    { path: "/song", label: "Canciones", Component: Song },
    { path: "/login", label: "Login", Component: Login },
    { path: "/search", label: "Search", Component: Search },
  ],
  mainMember: [
    { path: "/", label: "Calendario", Component: Calendario },
    { path: "/church", label: "Iglesias", Component: Church },
    { path: "/group", label: "Equipos", Component: Group },
    { path: "/song", label: "Canciones", Component: Song },
  ],
  alternative: [
    { path: "/login", label: "Login", Component: Login },
    { path: "/search", label: "Search", Component: Search },
  ],
};

export default routesConfig;
