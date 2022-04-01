import logo from "./logo.svg";
import "./App.css";
import { AppContext } from "./AppContext";
import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./componentes/paginas/Home";

import Footer from './componentes/footer/Footer'

function App() {
  //const { data, setData } = useContext(AppContext);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      
      <Footer/>
    </div>
  );
}

export default App;
