import { React, useState, useEffect, useContext } from "react";
import axios from "axios";
import { SearchContext } from "../../../../../../context/SearchContext";
import Categorias from "../../../../../subComponentes/categorias/Categorias";
import VPSV from "../../../../../subComponentes/vistaprodSobreVeride/VPSV/VPSV";
import { FiSearch } from "react-icons/fi";
import '../ProductosComponente/EstiloBuscador.scss'

function ProductosComponentes() {
  const [categorias, setCategorias] = useState([]);
  // Almacena el contenido del CONTEXT en una CONSTANTE
  const searchContext = useContext(SearchContext);
  console.log(searchContext.query); // para pruebas del CONTEXT
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
    cargarCategorias();
  }, []);

  // mostrar PRODUCTOS y MAS VENDIDOS desde la API
  const [productos, setProductos] = useState([]);

  const cargarProductos = (e) => {
    axios
      .get("https://country-app-v3.herokuapp.com/api/v1/products")
      .then((data) => {
        console.log(data.data);

        data = data.data;

        // Filtrado con el input del BUSCADOR
        const searchResult =
          data &&
          data.filter((item) => item.name.toLowerCase().includes(e.query));

        // Data de Productos al useState
        // setProductos(data.data);
        setProductos(searchResult);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    cargarProductos(searchContext); // Todos los Productos
  }, [searchContext]);

  // Filtrado por categoria
  const [selectedCategorias, setSelectedCategorias] = useState([]);


    const [searchQuery, setSearchQuery] = useState("");

    const searchQueryHandler = () => {
        searchContext.searchHandler(searchQuery);
    };
    
    /* Inicio de Busqueda al presionar ENTER en el INPUT BUSCADOR del NAVBAR */
    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            searchQueryHandler();
        }
    };
    
  return (
    <section>
      <div className="form-inline">
        <input
          type="text"
          placeholder="Buscar Producto..."
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyUp={(e) => handleEnter(e)}
          value={searchQuery}
        />
        <button
          type="button"
          className="boton-buscar"
          onClick={searchQueryHandler}
        >
          <FiSearch />
        </button>
      </div>
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
                  <VPSV key={prod.id} prod={prod} categorias={categorias} />
                );
              })}
          {/* Estado inicial => muestra todo */}
          {selectedCategorias.length === 0 &&
            productos.map((prod) => {
              return <VPSV key={prod.id} prod={prod} categorias={categorias} />;
            })}
        </div>
      </article>
    </section>
  );
}

export default ProductosComponentes;
