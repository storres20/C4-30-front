import "./App.css";
import { Route, Routes } from "react-router-dom";
<<<<<<< HEAD
import CambiarContraseña from './componentes/paginas/registro-InicioSesion/contenedor/CambiarContraseña'
import RecuperarContraseña from './componentes/paginas/registro-InicioSesion/contenedor/RecuperarContraseña'
import InicioSesion from './componentes/paginas/registro-InicioSesion/contenedor/InicioSesion'
import Registro from './componentes/paginas/registro-InicioSesion/contenedor/Registro'
import VerificarCuenta from './componentes/paginas/registro-InicioSesion/contenedor/VerificarCuenta'

=======
import Home from "./componentes/paginas/Home";
import InicioSesion from "./componentes/paginas/registro-InicioSesion/contenedor/InicioSesion";
import Registro from "./componentes/paginas/registro-InicioSesion/contenedor/Registro";
import VerificarCuenta from "./componentes/paginas/registro-InicioSesion/contenedor/VerificarCuenta";
import RecuperarContrasena from "./componentes/paginas/registro-InicioSesion/contenedor/RecuperarContrasena";
import CambiarContrasena from "./componentes/paginas/registro-InicioSesion/contenedor/CambiarContrasena";
>>>>>>> ac03533e16eb946386801c64f37e1f237d8af0a4

function App() {
  //const { data, setData } = useContext(AppContext);

  return (
    <div className="App">
      <Routes>
<<<<<<< HEAD
        <Route path= {'/Cambiar-Contraseña'} element={<CambiarContraseña />}/>
        <Route path= {'/Recuperar-Contraseña'} element= {<RecuperarContraseña />} />
        <Route path= {'/Inicio-Sesion'} element= {<InicioSesion />} />
        <Route path= {'/Registro'} element={<Registro />} />
        <Route path= {'/Verificar-Cuenta'}  element={<VerificarCuenta />}/>
=======
        <Route path="/Cambiar-Contrasena" element={<CambiarContrasena/>} />
        <Route path="/Recuperar-Contrasena" element={<RecuperarContrasena />} />
        <Route path="/Verificar-Cuenta" element={<VerificarCuenta />} />
        <Route path="/Registro" element={<Registro />} />
        <Route path="/Inicio-Sesion" element={<InicioSesion />} />
        <Route path="/" element={<Home />} />
>>>>>>> ac03533e16eb946386801c64f37e1f237d8af0a4
      </Routes>
    </div>
  );
}

export default App;
