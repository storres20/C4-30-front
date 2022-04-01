import React from "react";

export default function NavBarSobreVeride() {
    return (
    <nav>
        <a href="/">btn flecha</a>
        <h3>Sobre Veridē</h3>
        <a href="#quienes-somos">¿Quiénes Somos?</a>
        <a href="#servicios">Servicios</a>
        <a href="#testimonios">Testimonios</a>
        <a href="#sucursales">Sucursales</a>
        {/* {isLoggedIn ? <div>dropwdown usuario</div> : <a href="/ingreso">Ingresa aquí</a>} */}
    </nav>
    );
  };