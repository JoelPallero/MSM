import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routesConfig from "./config/routes";
import Header from "./components/Header";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <Router>
      <Header />
      <AppRoutes />  {/* Aquí está el componente que maneja las rutas */}
    </Router>
  );
}

export default App;
