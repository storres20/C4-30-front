import React from "react";
import logo from '../../imagenes/LogoVeride/LogosSinFondo/Logo3-Largo.png';

export default function NavBarHome() {
    return (
    <nav>
        <div>
            <img src={logo} alt="Veride" />
            <a href="/">Productos</a>
            <a href="/sobre-veride">Sobre Veridē</a>
        </div>
        <div>
            <form>
                <input type="text" placeholder="Buscar..." />
                <button type="submit">boton lupa</button>
            </form>
            <a href="/carrito">boton carrito</a>
            {/* {isLoggedIn ?
                <div>
                    {!isAdmin ?
                        <div>
                            <a href="/cuenta">nombre usuario</a>
                            <ul>
                                <li>
                                    <a href="configuración-de-cuenta">Configuración de Cuenta</a>
                                </li>
                                <li>
                                    <a href="historial-de-compras">Historial de compras</a>
                                </li>
                                <button>logout</button>
                            </ul>
                        </div>
                    :
                        <div>
                            <a href="/cuenta">nombre admin</a>
                            <ul>
                                <li>
                                    <a href="configuración-de-cuenta">Configuración de Cuenta</a>
                                </li>
                                <li>
                                    <a href="historial-de-ventas">Historial de ventas</a>
                                </li>
                                <li>
                                    <a href="editar-productos">Editar productos</a>
                                </li>
                                <button>logout</button>
                            </ul>
                        </div>}
                </div>
            :
                <a href="/ingreso">Ingresa aquí</a>} */}
        </div>        
    </nav>
    );
  };