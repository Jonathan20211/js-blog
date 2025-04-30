import { Link } from "react-router-dom";
import "./footer.css";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";

export default function Footer() {
    return (
        <div className='conteinar-footer'>
            <div className='footer-Titulo'>
                Desenvolvido © 2025 - Todos os direitos Reservados
            </div>
            <div className='footer-center'>
                <i className="footer-icon">
                    <Link className='footer-icon-link' to="/contato"><MdOutlineEmail /></Link>
                </i>
                <i className="footer-icon">
                    <a className='footer-icon-link' href="https://www.instagram.com/jonathan_silva_92/?igsh=MTVsZWlqOHp2M2djMw%3D%3D" target='_blank'><FaInstagram /></a>
                </i>
            </div>
        </div>
    )
}
