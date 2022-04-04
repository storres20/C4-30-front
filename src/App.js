import "./App.css";
import { Route, Routes } from "react-router-dom";
import { InicioSesion, VerificarCuentaUsuario, VerificarCuentaNuevoUsuario, RecuperarContrasena,CambiarContrasena } from './componentes/paginas/registro-InicioSesion/contenedor';
import { ConfigutacionCuenta } from './componentes/paginas/configuracionCuenta';
import { CarritoCompras } from './componentes/paginas/carritoCompras';
import { Home } from './componentes/paginas/home';
import { SobreVerede } from './componentes/paginas/sobreVerede';

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
      </Routes> 
    </div>
  );
}

export default App;
