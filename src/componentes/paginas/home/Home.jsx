import React from "react";
import "./Home.scss";
import VPH from "../../subComponentes/vistaprodhome/VPH/VPH";

export default function Home() {

  //import cargarCategorias.js

    // async function cargarCategorias() {
    //   const response = await fetch('https://country-app-v3.herokuapp.com/categories', {
    //     method: "GET"
    //   })
    //   const data = await response.json();

    //   return data;
    // }

    // async function main() {
    //   categorias = await cargarCategorias();


    // }
    
    // main();

  return (
    <section>
      <article className="article-promociones">
        {/* <TarjetaDescuento {1}> */}
        <a href="/promociones"><img src="https://i.ibb.co/1X7npWT/promo1.png" alt="Promo" className="promo"/></a>
        {/* <TarjetaDescuento {2}> */}
        <a href="/promociones"><img src="https://i.ibb.co/8dQpZgy/promo2.png" alt="Promo" className="promo"/></a>
      </article>

      <article className="article-destacados">
          <h2>Más Vendidos</h2>
        <div className="container-destacados">
          {/* <ListadoDestacados> */}
          <VPH />
          <VPH />
          <VPH />
        </div>
      </article>

      <article className="article-categorias">
          <h2>Categorías</h2>
        <div className="container-categorias">
          {/* <ListadoCategorias> */}
          {
          
          }
          <div className="categoria"></div>
          <div className="categoria"></div>
          <div className="categoria"></div>
          <div className="categoria"></div>
          <div className="categoria"></div>
          <div className="categoria"></div>
        </div>
      </article>

      <article className="article-productos">
          <h2>Todos los productos (n)</h2>
        <div className="container-productos">
          {/* <ListadoProductos {productos}> */}
          <VPH />
          <VPH />
          <VPH />
          <VPH />
          <VPH />
          <VPH />
          <VPH />
          <VPH />
          <VPH />
        </div>
      </article>
    </section>
  );
}
