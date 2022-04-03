import "./App.css";
import { Route, Routes } from "react-router-dom";
import { CambiarContrasena, InicioSesion, RecuperarContrasena, Registro, VerificarCuentaNuevoUsuario,  VerificarCuentaUsuario} from './componentes/paginas/registro-InicioSesion/contenedor';
import {  Home, SobreVerede} from './componentes/paginas';

function App() {
  //const { data, setData } = useContext(AppContext);

  return (
    <div className="App">
      <Routes>
        <Route path="/Cambiar-Contrasena" element={<CambiarContrasena/>} />
        <Route path="/Recuperar-Contrasena" element={<RecuperarContrasena />} />
        <Route path="/Verificar-Cuenta" element={<VerificarCuentaUsuario />} />
        <Route path="/Verificar-Cuenta/Nuevo-Usuario" element={<VerificarCuentaNuevoUsuario />} />
{/*         <Route path="/Registro" element={<Registro />} /> */}
        <Route path="/Inicio-Sesion" element={<InicioSesion />} />
        <Route path="/" element={<Home />} />
        <Route path="/Sobre-Verede" element={<SobreVerede />}/>
      </Routes>
    </div>
  );
}

export default App;
