import React from "react";
import './NavBar.scss';

export default function NavBarSobreVeride() {

    const isLoggedIn = false;

    return (
    <nav>
        <span className="alternative-navbar">
            <a href="/">
                <i class="uil uil-arrow-left"></i>
            </a>
            <span className="alternative-navbar-left">
                
                <h2>Sobre Veridē</h2>
                <a href="#quienes-somos">¿Quiénes Somos?</a>
                <a href="#servicios">Servicios</a>
                <a href="#testimonios">Testimonios</a>
                <a href="#sucursales">Sucursales</a>
            </span>
            <span className="alternative-navbar-right">
                {isLoggedIn ? <div>dropwdown usuario</div> : <a className="alternative-ingreso" href="/inicio-sesion">Ingresa aquí</a>}
            </span>
        </span>
    </nav>
    );
  };