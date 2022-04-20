import React from 'react'
import {
  ProductosContainer,
  ProductosH1,
  ProductosWrapper,
  InfoContent
} from "./Productos";
import ProductosComponentes from "./ProductosComponente/ProductosComponentes";

function Productos() {

  return (
    <div id="productosSection">
      <ProductosContainer>
        <ProductosH1>Productos</ProductosH1>
        <InfoContent> Ofrecemos una variedad de exquisitos platillos a base de insumos favorables para nuestra salud. Conoce más sobre nuestros Carta.</InfoContent>
        <ProductosWrapper>
        <ProductosComponentes/>
        </ProductosWrapper>
      </ProductosContainer>
    </div>
  );
}

export default Productos;
