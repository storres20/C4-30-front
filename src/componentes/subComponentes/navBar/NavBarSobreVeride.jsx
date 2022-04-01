import React from "react";

export default function NavBarSobreVeride() {

    // const isLoggedIn = false;

    return (
    <nav>
        <a href="/">
            <i class="uil uil-arrow-left"></i>
        </a>
        <h3>Sobre Veridē</h3>
        <a href="#quienes-somos">¿Quiénes Somos?</a>
        <a href="#servicios">Servicios</a>
        <a href="#testimonios">Testimonios</a>
        <a href="#sucursales">Sucursales</a>
        {/* {isLoggedIn ? <div>dropwdown usuario</div> : <a href="/inicio-sesion">Ingresa aquí</a>} */}
    </nav>
    );
  };