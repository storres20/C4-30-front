import { React, useState, useEffect, useContext } from "react";
//import Vistaprodhome from "../../subComponentes/vistaprodhome/Vistaprodhome";
import NavBarHome from "../../subComponentes/navBar/NavBarHome";
import "./Home.scss";

import VPH from "../../subComponentes/vistaprodhome/VPH/VPH";
import axios from "axios";
import Categorias from "../../subComponentes/categorias/Categorias";

import Footer from "../../subComponentes/footer/Footer";
import SliderInfinito from "../../subComponentes/sliderinfinito/SliderInfinito";

import { SearchContext } from "../../../context/SearchContext";


export default function Home() {
  // mostrar CATEGORIAS desde la API
  const [categorias, setCategorias] = useState([]);
  const cargarCategorias = () => {
    axios
      .get("https://country-app-v3.herokuapp.com/categories")
      .then((data) => {
        console.log(data.data);

        //Data de Categorias al useState
        setCategorias(data.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      window.location.pathname = "/inicio-sesion";
    }

    cargarCategorias();
  }, []);

  //mostrar PRODUCTOS y MAS VENDIDOS desde la API
  const [productos, setProductos] = useState([]);
  const [vendidos, setVendidos] = useState([]);
  
  
  //Almacena el contenido del CONTEXT en una CONSTANTE
  const searchContext = useContext(SearchContext);
  console.log(searchContext.query); // para pruebas del CONTEXT

  const cargarProductos = (e) => {
    axios
      .get("https://country-app-v3.herokuapp.com/api/v1/products")
      .then((data) => {
        console.log(data.data);
        
        data = data.data;
        
        //Filtrado con el input del BUSCADOR
        const searchResult = data && data.filter((item) => item.name.toLowerCase().includes(e.query));

        //Data de Productos al useState
        //setProductos(data.data);
        setProductos(searchResult);
        
      })
      .catch((error) => console.log(error));
  };

  const cargarVendidos = (e) => {
    
    if(!e.query){
      axios
      .get("https://country-app-v3.herokuapp.com/api/v1/products")
      .then((data) => {
        //Data de Mas Vendidos; lo cual, es un RANDOM de 10 de la Data de Productos
        var cont = 3;
        var shuffled = data.data.sort(function () {
          return 0.5 - Math.random();
        });
        var selected = shuffled.slice(0, cont);
        setVendidos(selected);
      })
      .catch((error) => console.log(error));
    }
    
  };

  useEffect(() => {
    cargarProductos(searchContext); // Todos los Productos
    cargarVendidos(searchContext); // Los Mas Vendidos - muestra de manera Random
  }, [searchContext]);

  // Filtrado por categoria
  const [selectedCategorias, setSelectedCategorias] = useState([]);

  return (
    <section className="section">
      <NavBarHome />
      {/* PROMOCIONES - ANTIGUO */}
      {/* <article className="article-promociones"> */}
        {/* <TarjetaDescuento {1}> */}
        {/* <a href="/promociones" className="enlacePromo1">
          <img
            src="https://i.ibb.co/1X7npWT/promo1.png"
            alt="Promo"
            className="imgPromo1"
          />
        </a> */}
        {/* <TarjetaDescuento {2}> */}
        {/* <a href="/promociones" className="enlacePromo2">
          <img
            src="https://i.ibb.co/8dQpZgy/promo2.png"
            alt="Promo"
            className="imgPromo2"
          />
        </a>
      </article> */}
      
      {/* Slider Infinito para las PROMOCIONES */}
      <SliderInfinito/>

      <article className="article-destacados">
        <h2>Más Vendidos</h2>
        <div className="masVendidos">
          {" "}
          {/* container-destacados */}
          {vendidos.map((prod) => {
            return <VPH key={prod.id} prod={prod} categorias={categorias} />;
          })}
        </div>
      </article>

      <article className="article-categorias">
        <h2>Categorías</h2>
        <div className="container-categorias">
          {categorias.map((prod) => {
            return (
              <Categorias
                key={prod.id}
                prod={prod}
                setSelectedCategorias={setSelectedCategorias}
                selectedCategorias={selectedCategorias}
              />
            );
          })}
        </div>
      </article>

      <article className="article-productos">
        <h2>Todos los productos ({productos.length})</h2>
        <div className="todosProductos">
          {" "}
          {/* container-productos */}
          {/* Filtros activados => muestra solo la(s) categoria(s) elegida(s) */}
          {selectedCategorias.length > 0 &&
            productos
              .filter((p) =>
                selectedCategorias.some((c) => c === p.category_id)
              )
              .map((prod) => {
                return (
                  <VPH key={prod.id} prod={prod} categorias={categorias} />
                );
              })}
          {/* Estado inicial => muestra todo */}
          {selectedCategorias.length === 0 &&
            productos.map((prod) => {
              return <VPH key={prod.id} prod={prod} categorias={categorias} />;
            })}
        </div>
      </article>
      <Footer />
    </section>
  );
}
