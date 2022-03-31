import "./App.css";
import { Route, Routes } from "react-router-dom";
import CambiarContraseña from './componentes/paginas/registro-InicioSesion/contenedor/CambiarContraseña'
import RecuperarContraseña from './componentes/paginas/registro-InicioSesion/contenedor/RecuperarContraseña'
import InicioSesion from './componentes/paginas/registro-InicioSesion/contenedor/InicioSesion'
import Registro from './componentes/paginas/registro-InicioSesion/contenedor/Registro'
import VerificarCuenta from './componentes/paginas/registro-InicioSesion/contenedor/VerificarCuenta'


function App() {
  //const { data, setData } = useContext(AppContext);

  return (
    <div className="App">
      <Routes>
        <Route path= {'/Cambiar-Contraseña'} element={<CambiarContraseña />}/>
        <Route path= {'/Recuperar-Contraseña'} element= {<RecuperarContraseña />} />
        <Route path= {'/Inicio-Sesion'} element= {<InicioSesion />} />
        <Route path= {'/Registro'} element={<Registro />} />
        <Route path= {'/Verificar-Cuenta'}  element={<VerificarCuenta />}/>
      </Routes>
    </div>
  );
}

export default App;
