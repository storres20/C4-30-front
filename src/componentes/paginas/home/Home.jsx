import { React, useState, useEffect } from "react";
import Vistaprodhome from "../../subComponentes/vistaprodhome/Vistaprodhome";
import "./Home.scss";
import VPH from "../../subComponentes/vistaprodhome/VPH/VPH";
import axios from "axios";

export default function Home() {

  // fetch for the categories
  const cargarCategorias = () => {
    axios
      .get("https://country-app-v3.herokuapp.com/categories")
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
  //   if (!localStorage.getItem("user")) {
  //     window.location.pathname = "/inicio-sesion";
  //   }

    cargarCategorias();
  }, []);

  return (
    <section>
      <article className="article-promociones">
        {/* <TarjetaDescuento {1}> */}
        <a href="/promociones">
          <img
            src="https://i.ibb.co/1X7npWT/promo1.png"
            alt="Promo"
            className="imgPromo1"
          />
        </a>
        {/* <TarjetaDescuento {2}> */}
        <a href="/promociones">
          <img
            src="https://i.ibb.co/8dQpZgy/promo2.png"
            alt="Promo"
            className="imgPromo2"
          />
        </a>
      </article>

      <article className="article-destacados">
        <h2>Más Vendidos</h2>
        <div className="container-destacados">
          {/* <ListadoDestacados> */}
          <Vistaprodhome productos="destacados"/>
        </div>
      </article>

      <article className="article-categorias">
        <h2>Categorías</h2>
        <div className="container-categorias">
          {/* <ListadoCategorias> */}
          
        </div>
      </article>

      <article className="article-productos">
        <h2>Todos los productos (n)</h2>
        <div className="container-productos">
          {/* <ListadoProductos {productos}> */}
          <Vistaprodhome productos="todos" />
          {
            // productos.map((producto) => (
            //   <li className='card' key={producto.id}>
            //     <img src={producto.image} alt='' />
            //     <h3>{producto.name}</h3>
            //     <p>{producto.description}</p>
            //     <h4>${producto.price}</h4>
            //     <p>{producto.state}</p>
            //   </li>
            // ))
          }
        </div>
      </article>
    </section>
  );
}
