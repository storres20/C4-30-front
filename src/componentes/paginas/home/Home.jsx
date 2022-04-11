import { React, useState } from "react";
import "./Home.scss";
import VPH from "../../subComponentes/vistaprodhome/VPH/VPH";

export default function Home() {

  //import cargarCategorias.js

    const [categorias, setCategorias] = useState([{name: "asd"}]);

    async function cargarCategorias() {

      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Accept', 'application/json');
      headers.append('Origin','http://localhost:3000');

      const response = await fetch('https://country-app-v3.herokuapp.com/categories', {
        mode: 'cors',
        method: 'GET',
        headers: {
          headers
        }
      })
      .then(response => {
        if (!response.ok) {
          throw new Error("HTTP error " + response.status);
      }
      return response.json();
    })
      .then(data => {
        setCategorias(data)
      })
      .catch(err => console.log("fetch error: " + err));
      
    };

    cargarCategorias();

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
            categorias.map((categoria) => (
              <li className='card' key={categoria.id}>
                <img src={categoria.image} alt='' />
                <h3>{categoria.name}</h3>
              </li>
            ))
          }
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
