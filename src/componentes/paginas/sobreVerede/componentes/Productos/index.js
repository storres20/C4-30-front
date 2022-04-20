import React from 'react'
import {
  ProductosContainer,
  ProductosH1,
  ProductosWrapper
} from "./Productos";
import ProductosComponentes from "./ProductosComponente/ProductosComponentes";

function Productos() {

  return (
    <div id="productosSection">
      <ProductosContainer>
        <ProductosH1>Productos</ProductosH1>
        <ProductosWrapper>
        <ProductosComponentes/>
        </ProductosWrapper>
      </ProductosContainer>
    </div>
  );
}

export default Productos;
