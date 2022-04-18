import { React, useState, useEffect } from "react";
import Footer from "../../subComponentes/footer/Footer";
import NavBarHome from "../../subComponentes/navBar/NavBarHome";
import "./ListaDeDeseos.scss";
import "../home/Home.scss";
import VPH from "../../subComponentes/vistaprodhome/VPH/VPH";
import axios from "axios";

function ListaDeDeseos() {

    // mostrar CATEGORIAS desde la API
    const [categorias, setCategorias] = useState([]);
    const cargarCategorias = () => {
      axios
        .get("https://country-app-v3.herokuapp.com/categories")
        .then((data) => {
          console.log(data.data)
  
          //Data de Categorias al useState
          setCategorias(data.data)
        })
        .catch((error) => console.log(error));
    };
  
    useEffect(() => {
      //   if (!localStorage.getItem("user")) {
      //     window.location.pathname = "/inicio-sesion";
      //   }
  
      cargarCategorias();
    }, []);
  
  
    //mostrar PRODUCTOS y MAS VENDIDOS desde la API
    const [productos, setProductos] = useState([]);
  
    const cargarProductos = () => {
      axios
        .get("https://country-app-v3.herokuapp.com/api/v1/products")
        .then((data) => {
          console.log(data.data)
  
          //Data de Productos al useState
          setProductos(data.data)
        })
        .catch((error) => console.log(error));
    };

    useEffect(() => {
      cargarProductos(); // Todos los Productos
    }, []);

  return (
    <section className="Flex-Deseos">
      <NavBarHome />
      <article className="article-productos">
        <h2>Lista de Deseos ({productos.length})</h2>
        <div className="todosProductos"> {/* container-productos */}
          {/* Estado inicial => muestra todo */}
          {productos.map(prod => {
            return <VPH
              key={prod.id}
              prod={prod}
              categorias={categorias} />
          })
          }

        </div>
      </article>
      <Footer />
    </section>
  );
}

export default ListaDeDeseos;
