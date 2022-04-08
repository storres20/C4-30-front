import React from "react";
import logo from '../../../imagenes/LogoVeride/LogosSinFondo/Logo3-Largo.png';
import "./NavBar.scss"

const isLoggedIn = true;

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
                <button type="submit" className="boton-buscar">
                    <i class="uil uil-search"></i>
                </button>
            </form>
            <a className="carrito" href="/carrito">
                <i class="uil uil-shopping-cart"></i>
            </a>
            {isLoggedIn ?
            <div className="dropdown">
                    <div className="logged-dropdown-mobile">
                        <i class="uil uil-ellipsis-v"></i>
                        <div className="logged-mobile-dropdown-content">
                            <a className="link-usuario" href="/cuenta">usuario</a>
                            <a className="productos" href="/">Productos</a>
                            <a className="sobre-veride" href="/sobre-veride">Sobre Veridē</a>
                            <a href="configuracion-de-cuenta">Configuración de Cuenta</a>
                            <a href="historial-de-compras">Historial de Compras</a>
                            <a href="logout">Cerrar Sesión<i class="uil uil-signout"></i></a>
                        </div>
                    </div>
                    <div className="logged-dropdown-desktop">
                        <a href="/cuenta" className="cuenta">nombre usuario<i class="uil uil-angle-down"></i></a>
                        <div className="logged-desktop-dropdown-content">
                            <a href="configuracion-de-cuenta">Configuración de Cuenta</a>
                            <a href="historial-de-compras">Historial de Compras</a>
                            <a href="logout">Cerrar Sesión<i class="uil uil-signout"></i></a>
                        </div>
                    </div>
            </div>
            :
                <div className="ingreso-container">
                    <a className="ingreso" href="/inicio-sesion"><span>Ingresa aquí</span></a>
                    <div className="unlogged-dropdown">
                        <a href="/cuenta" className="cuenta-ingreso"><i class="uil uil-ellipsis-v"></i></a>
                        <div className="unlogged-dropdown-content">
                            <a className="ingreso2" href="/inicio-sesion">Ingresa aquí</a>
                            <a className="productos" href="/">Productos</a>
                            <a className="sobre-veride" href="/sobre-veride">Sobre Veridē</a>
                        </div>
                    </div>
                </div>}           
        </div>        
    </nav>
    );
  };