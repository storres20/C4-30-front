import React from "react";
import logo from '../../../imagenes/LogoVeride/LogosSinFondo/Logo3-Largo.png';
import "./NavBar.scss"
import { FiHeart, FiShoppingBag, FiSearch, FiMenu, FiChevronDown, FiLogOut } from "react-icons/fi";

const isLoggedIn = true;

export default function NavBarHome() {
    return (
    <nav className="navHome">
        <div className="navbar-left">
            <img src={logo} alt="Veride" />
            <a className="productos" href="/">Productos</a>
            <a className="sobre-veride" href="/Sobre-Veride">Sobre Veridē</a>
        </div>
        <div className="navbar-right">
            <form class="form-inline">
                <input type="text" placeholder="Buscar..." />
                <button type="submit" className="boton-buscar">
                    <FiSearch/>
                </button>
            </form>
            <a className="deseos" href="/Lista-De-Deseos">
                <FiHeart/>
            </a>
            <a className="carrito" href="/Carrito-Compras">
                <FiShoppingBag/>
            </a>
            {isLoggedIn ?
            <div className="dropdown">
                    <div className="logged-dropdown-mobile">
                        <FiMenu/>
                        <div className="logged-mobile-dropdown-content">
                            <p className="link-usuario">usuario</p>
                            <a className="productos" href="/">Productos</a>
                            <a className="sobre-veride" href="/Sobre-Veride">Sobre Veridē</a>
                            <a href="/Configuracion-de-Cuental">Configuración de Cuenta</a>
                            <a href="historial-de-compras">Historial de Compras</a>
                            <a href="logout">Cerrar Sesión<FiLogOut/></a>
                        </div>
                    </div>
                    <div className="logged-dropdown-desktop">
                        <p className="cuenta">nombre usuario<FiChevronDown/></p>
                        <div className="logged-desktop-dropdown-content">
                            <a href="/Configuracion-de-Cuenta">Configuración de Cuenta</a>
                            <a href="historial-de-compras">Historial de Compras</a>
                            <a href="logout">Cerrar Sesión<FiLogOut/></a>
                        </div>
                    </div>
            </div>
            :
                <div className="ingreso-container">
                    <a className="inicio-sesion" href="/inicio-sesion"><span>Ingresa aquí</span></a>
                    <div className="unlogged-dropdown">
                        <FiMenu />
                        <div className="unlogged-dropdown-content">
                            <a href="/inicio-sesion">Ingresa aquí</a>
                            <a href="/">Productos</a>
                            <a href="/Sobre-Veride">Sobre Veridē</a>
                        </div>
                    </div>
                </div>}           
        </div>        
    </nav>
    );
  };