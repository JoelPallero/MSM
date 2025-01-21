import { Routes, Route } from "react-router-dom";
import routesConfig from "../config/routesConfig";

const AppRoutes = () => {
  return (
    <Routes>
      {Object.values(routesConfig)
        .flat()
        .map(({ path, Component }, index) => (
          <Route key={index} path={path} element={<Component />} />
        ))}
    </Routes>
  );
};

export default AppRoutes;