import { React, useState, useEffect } from "react";
//import Vistaprodhome from "../../subComponentes/vistaprodhome/Vistaprodhome";
import NavBarHome from "../../subComponentes/navBar/NavBarHome";
import "./Home.scss";
import VPH from "../../subComponentes/vistaprodhome/VPH/VPH";
import axios from "axios";
import Categorias from "../../subComponentes/categorias/Categorias";

//import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Footer from "../../subComponentes/footer/Footer";

/* const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    slidesToSlide: 5 // optional, default to 1.
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 764 },
    items: 4,
    slidesToSlide: 4 // optional, default to 1.
  },
  tabletsm: {
    breakpoint: { max: 767, min: 464 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
}; */

export default function Home() {

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
  const [vendidos, setVendidos] = useState([]);

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

  const cargarVendidos = () => {
    axios
      .get("https://country-app-v3.herokuapp.com/api/v1/products")
      .then((data) => {

        //Data de Mas Vendidos; lo cual, es un RANDOM de 10 de la Data de Productos
        var cont = 3
        var shuffled = data.data.sort(function () { return .5 - Math.random() })
        var selected = shuffled.slice(0, cont)
        setVendidos(selected)
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    cargarProductos(); // Todos los Productos
    cargarVendidos(); // Los Mas Vendidos - muestra de manera Random
  }, []);

  // Filtrado por categoria
  const [selectedCategorias, setSelectedCategorias] = useState([]);

  return (
    <section className="section">
      <NavBarHome />
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
        <div className="masVendidos"> {/* container-destacados */}
          {/* <Carousel responsive={responsive}
            infinite={true}
            swipeable={false}
            draggable={false}
            autoPlay={false}
            autoPlaySpeed={10000}
          > */}
            {vendidos.map(prod => {
              return <VPH key={prod.id} prod={prod} categorias={categorias} />
            })}
          {/* </Carousel> */}
        </div>
      </article>

      <article className="article-categorias">
        <h2>Categorías</h2>
        <div className="container-categorias">

          {categorias.map(prod => {
            return <Categorias
                      key={prod.id}
                      prod={prod}
                      setSelectedCategorias={setSelectedCategorias}
                      selectedCategorias={selectedCategorias} />
          })}

        </div>
      </article>

      <article className="article-productos">
        <h2>Todos los productos ({productos.length})</h2>
        <div className="todosProductos"> {/* container-productos */}

        {/* Filtros activados => muestra solo la(s) categoria(s) elegida(s) */}
          {selectedCategorias.length > 0 && productos.filter(p => selectedCategorias.some(c => c === p.category_id)).map(prod => {
            return <VPH
                      key={prod.id}
                      prod={prod}
                      categorias={categorias}/>
            })
          }
          {/* Estado inicial => muestra todo */}
          {selectedCategorias.length === 0 && productos.map(prod => {
            return <VPH
                      key={prod.id}
                      prod={prod}
                      categorias={categorias}/>})
          }

        </div>
      </article>
      <Footer/>
    </section>
  );
}
