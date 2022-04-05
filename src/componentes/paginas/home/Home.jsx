import React from "react";
import "./Home.scss";

function Home() {

  // setProductos.js

  return (
    <section>
      <article className="article-promociones">
        {/* <TarjetaDescuento {1}> */}
        <div className="promo"></div>
        {/* <TarjetaDescuento {2}> */}
        <div className="promo"></div>
      </article>

      <article className="article-destacados">
          <h2>Más Vendidos</h2>
        <div className="container-destacados">
          {/* <ListadoDestacados> */}
          <div className="destacado"></div>
          <div className="destacado"></div>
          <div className="destacado"></div>
        </div>
      </article>

      <article className="article-categorias">
          <h2>Categorías</h2>
        <div className="container-categorias">
          {/* <ListadoCategorias> */}
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
          <div className="producto"></div>
          <div className="producto"></div>
          <div className="producto"></div>
          <div className="producto"></div>
          <div className="producto"></div>
          <div className="producto"></div>
          <div className="producto"></div>
          <div className="producto"></div>
          <div className="producto"></div>
        </div>
      </article>
    </section>
  );
}

export default Home;
