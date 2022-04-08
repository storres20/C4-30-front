import "./App.css";
import { Route, Routes } from "react-router-dom";

import InicioSesion from "./componentes/paginas/registro-InicioSesion/contenedor/InicioSesion";
import VerificarCuentaUsuario from "./componentes/paginas/registro-InicioSesion/contenedor/VerificarCuenta-Usuario";
import VerificarCuentaNuevoUsuario from "./componentes/paginas/registro-InicioSesion/contenedor/VerificarCuenta-NuevoUsuario";
import RecuperarContrasena from "./componentes/paginas/registro-InicioSesion/contenedor/RecuperarContrasena";
import CambiarContrasena from "./componentes/paginas/registro-InicioSesion/contenedor/CambiarContrasena";
import SobreVerede from "./componentes/paginas/sobreVerede/SobreVerede";
import ConfigutacionCuenta from "./componentes/paginas/configuracionCuenta/ConfiguracionCuenta";
import CarritoCompras from "./componentes/paginas/carritoCompras/CarritoCompras";
import Home from "./componentes/paginas/home/Home";
//navs testing
import NavBarHome from "./componentes/subComponentes/navBar/NavBarHome";
import NavBarSobreVeride from "./componentes/subComponentes/navBar/NavBarSobreVeride";



function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/Carrito-Compras" element={<CarritoCompras/> } />
        <Route path="/Configuracion-Cuenta" element={<ConfigutacionCuenta/> } />
        <Route path="/Cambiar-Contrasena" element={<CambiarContrasena/>} />
        <Route path="/Recuperar-Contrasena" element={<RecuperarContrasena />} />
        <Route path="/Verificar-Cuenta" element={<VerificarCuentaUsuario />} />
        <Route path="/Verificar-Cuenta/Nuevo-Usuario" element={<VerificarCuentaNuevoUsuario />} />
        <Route path="/Inicio-Sesion" element={<InicioSesion />} />
        <Route path="/Sobre-Verede" element={<SobreVerede/> } />
        <Route path="/" element={<Home />} />
        {/* navs testing */}
        <Route path="/nav" element={<NavBarHome />} />
        <Route path="/nav2" element={<NavBarSobreVeride />} />
      </Routes> 
    </div>
  );
}

export default App;
