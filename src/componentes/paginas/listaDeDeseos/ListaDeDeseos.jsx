import React from "react";
import Footer from "../../subComponentes/footer/Footer";
import NavBarHome from "../../subComponentes/navBar/NavBarHome";
import "./ListaDeDeseos.scss";

function ListaDeDeseos() {
  return (
    <section className="Flex-Deseos">
      <NavBarHome />
      <div>ListaDeDeseos</div>
      <Footer />
    </section>
  );
}

export default ListaDeDeseos;
