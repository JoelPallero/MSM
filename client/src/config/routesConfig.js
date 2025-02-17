import Logout from "../pages/Logout";
import Meetings from "../pages/Meetings";
import Church from "../pages/Church";
import Teams from "../pages/Teams";
import Songbook from "../pages/Songbook";
import Search from "../pages/Search";
import Members from "../pages/Members";
import Dashboard from "../pages/Dashboard"; //"Home" de la web

const routesConfig = {
  mainMaster: [
    { path: "/", label: "Dashboard", Component: Dashboard },
    { path: "/meetings", label: "Meetings", Component: Meetings },
    { path: "/church", label: "Iglesias", Component: Church },
    { path: "/teams", label: "Equipos", Component: Teams },
    { path: "/members", label: "Equipos", Component: Members },
    { path: "/Songbook", label: "Canciones", Component: Songbook },
  ],
  mainAccount: [
    { path: "/search", label: "Search", Component: Search },
  ],
  mainSecondary: [
    { path: "/search", label: "Search", Component: Search },
    { path: "/Logout", label: "Logout", Component: Logout },
  ],
};

export default routesConfig;
