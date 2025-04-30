import "./header.css";
import Logo from "../../assets/Logo_v3-removebg.png"

import { FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdOutlineEmail } from "react-icons/md";
import { useState } from "react";

export default function Header() {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="conteinar-header">
            <div className="header-menus">
                <div className="menus-esquerda">
                    <div className="header-logo">
                        <img src={Logo} alt="Logo da empresa" />
                    </div>

                    {/* Menus (escondido no mobile quando fechado) */}
                    <div className={`header-links ${menuOpen ? "active" : ""}`}>
                        <div className="header-titulo">
                            <Link className="header-link-titulo" to="/">HOME</Link>
                        </div>
                        <div className="header-titulo">
                            <Link className="header-link-titulo" to="/historia">HISTÓRIA</Link>
                        </div>
                        <div className="header-titulo">
                            <Link className="header-link-titulo" to="/perfil">PERFIL</Link>
                        </div>
                        <div className="header-titulo">
                            <Link className="header-link-titulo" to="/contato">CONTATO</Link>
                        </div>
                    </div>
                </div>                

                <div className="menus-direita">
                    <i className="headerIcon">
                        <Link className='headerIconLink' to="/contato"><MdOutlineEmail /></Link>
                    </i>
                    <i className="headerIcon">
                        <a className='headerIconLink' href="https://www.instagram.com/jonathan.ganso_92?igsh=MTVsZWlqOHp2M2djMw==" target='_blank' rel="noopener noreferrer"><FaInstagram /></a>
                    </i>
                </div>

                {/* Botão do menu hambúrguer (aparece só no mobile) */}
                <div className="hamburger-icon" onClick={toggleMenu}>
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>
            {menuOpen && <div className="menu-overlay" onClick={toggleMenu}></div>}
        </div>
    )
}
