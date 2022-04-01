import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./componentes/paginas/Home";
import InicioSesion from "./componentes/paginas/registro-InicioSesion/contenedor/InicioSesion";
import VerificarCuenta from "./componentes/paginas/registro-InicioSesion/contenedor/VerificarCuenta";
import RecuperarContrasena from "./componentes/paginas/registro-InicioSesion/contenedor/RecuperarContrasena";
import CambiarContrasena from "./componentes/paginas/registro-InicioSesion/contenedor/CambiarContrasena";

function App() {
  //const { data, setData } = useContext(AppContext);

  return (
    <div className="App">
      <Routes>
        <Route path="/Cambiar-Contrasena" element={<CambiarContrasena/>} />
        <Route path="/Recuperar-Contrasena" element={<RecuperarContrasena />} />
        <Route path="/Verificar-Cuenta" element={<VerificarCuenta />} />
{/*         <Route path="/Registro" element={<Registro />} /> */}
        <Route path="/Inicio-Sesion" element={<InicioSesion />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
