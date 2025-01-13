import { Routes, Route } from "react-router-dom";
import routesConfig from "../config/routes";

const AppRoutes = () => {
  return (
    <Routes>
      {Object.values(routesConfig) // Accede a los arrays de rutas
        .flat() // Aplana el arreglo de rutas si es necesario
        .map(({ path, Component }, index) => (
          // Asegúrate de que Component sea un componente válido
          <Route key={index} path={path} element={<Component />} />
        ))}
    </Routes>
  );
  
};

export default AppRoutes;
