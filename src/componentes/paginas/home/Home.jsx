import { React, useState } from "react";
import "./Home.scss";
import Vistaprodhome from "../../subComponentes/vistaprodhome/Vistaprodhome";

export default function Home() {

  //import cargarCategorias.js

    const [categorias, setCategorias] = useState([{name: "categorias"}]);

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

    /////////////////////////////////////cargar productos////////////////////////////////////////////////

    // const [productos, setProductos] = useState([{name: "productos"}]);

    // async function cargarProductos() {

    //   let headers = new Headers();
    //   headers.append('Content-Type', 'application/json');
    //   headers.append('Accept', 'application/json');
    //   headers.append('Origin','http://localhost:3000');

    //   const response = await fetch('https://country-app-v3.herokuapp.com/api/v1/products', {
    //     mode: 'cors',
    //     method: 'GET',
    //     headers: {
    //       headers
    //     }
    //   })
    //   .then(response => {
    //     if (!response.ok) {
    //       throw new Error("HTTP error " + response.status);
    //   }
    //   return response.json();
    // })
    //   .then(data => {
    //     setProductos(data)
    //   })
    //   .catch(err => console.log("fetch error: " + err));
    // };

    // cargarProductos();

  return (
    <section>
      <article className="article-promociones">
        {/* <TarjetaDescuento {1}> */}
        <a href="/promociones" className="enlacePromo1"><img src="https://i.ibb.co/1X7npWT/promo1.png" alt="Promo" className="imgPromo1"/></a>
        {/* <TarjetaDescuento {2}> */}
        <a href="/promociones" className="enlacePromo2"><img src="https://i.ibb.co/8dQpZgy/promo2.png" alt="Promo" className="imgPromo2"/></a>
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
