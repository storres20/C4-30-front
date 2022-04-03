import React from "react";
import logo from '../../../imagenes/LogoVeride/LogosSinFondo/Logo3-Largo.png';
import "./NavBar.scss"

const isLoggedIn = false;

export default function NavBarHome() {
    return (
    <nav>
        <div className="navbar-left">
            <img src={logo} alt="Veride" />
            <a className="productos" href="/">Productos</a>
            <a className="sobre-veride" href="/sobre-veride">Sobre Veridē</a>
        </div>
        <div className="navbar-right">
            <form class="form-inline">
                <input type="text" placeholder="Buscar..." />
                <button type="submit">
                    <i class="uil uil-search"></i>
                </button>
            </form>
            <a className="carrito" href="/carrito">
                <i class="uil uil-shopping-cart"></i>
            </a>
            {isLoggedIn ?
                    <div>
                        <a href="/cuenta">nombre usuario</a>
                        <ul>
                            <li>
                                <a href="configuración-de-cuenta">Configuración de Cuenta</a>
                            </li>
                            <li>
                                <a href="historial-de-compras">Historial de compras</a>
                            </li>
                            <button>
                                <i class="uil uil-signout"></i>
                            </button>
                        </ul>
                    </div>
            :
                <a className="ingreso" href="/inicio-sesion">Ingresa aquí</a>}
        </div>        
    </nav>
    );
  };