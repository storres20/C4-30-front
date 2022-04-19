import "./App.css";
import { Route, Routes } from "react-router-dom";

import InicioSesion from "./componentes/paginas/registro-InicioSesion/contenedor/InicioSesion";
import VerificarCuentaUsuario from "./componentes/paginas/registro-InicioSesion/contenedor/VerificarCuenta-Usuario";
import VerificarCuentaNuevoUsuario from "./componentes/paginas/registro-InicioSesion/contenedor/VerificarCuenta-NuevoUsuario";
import RecuperarContrasena from "./componentes/paginas/registro-InicioSesion/contenedor/RecuperarContrasena";
import CambiarContrasena from "./componentes/paginas/registro-InicioSesion/contenedor/CambiarContrasena";
import SobreVeride from "./componentes/paginas/sobreVerede/SobreVerede";
import CarritoCompras from "./componentes/paginas/carritoCompras/contenedores/CarritoCompras";
import HistorialCompras from "./componentes/paginas/historialCompras/contenedores/HistorialCompras";
import Home from "./componentes/paginas/home/Home";
import ConfiguracionCuenta from "./componentes/paginas/configuracionCuenta/contenedores/ConfiguracionCuenta";
import ListaDeDeseos from "./componentes/paginas/listaDeDeseos/ListaDeDeseos";


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/Carrito-Compras" element={<CarritoCompras/> } />
        <Route path="/Carrito-Compras/:order_id" element={<CarritoCompras/> } />
        <Route path="/Lista-De-Deseos" element={<ListaDeDeseos/> } />
        <Route path="/Historial-De-Compras" element={<HistorialCompras/> } />
        <Route path="/Historial-De-Compras/:buy_id" element={<HistorialCompras/> } />

        <Route path="/Configuracion-de-Cuenta" element={<ConfiguracionCuenta/> } />
        <Route path="/Cambiar-Contrasena/:token" element={<CambiarContrasena/>} />
        <Route path="/Recuperar-Contrasena" element={<RecuperarContrasena />} />
        <Route path="/Verificar-Cuenta" element={<VerificarCuentaUsuario />} />
        <Route path="/Verificar-Cuenta/Nuevo-Usuario/:id" element={<VerificarCuentaNuevoUsuario />} />
        <Route path="/Inicio-Sesion" element={<InicioSesion />} />
        <Route path="/Sobre-Veride" element={<SobreVeride/> } />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
