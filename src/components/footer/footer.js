import React from "react";
import './styles.css'
import Logo from './../../assets/bat-symbol.jpg';
import { Link } from "react-router-dom";

function Footer () {
    return (
        <>
            <footer>
                <img id="logo" src={Logo} alt='Logo' />
                <span>Todos os direitos reservados © </span>
                <span>Desenvolvido por: Matheus Victor </span>
                <nav class="footer-nav">
                    <ul class="footer-list">
                        <Link style={{ textDecoration: 'none' }} to='/'>
                            <li className='footer-list-items'>Home</li>
                        </Link>
                        <Link style={{ textDecoration: 'none' }} to='/fotos'>
                            <li className='footer-list-items'>Fotos</li>
                        </Link>
                        <Link style={{ textDecoration: 'none' }} to='/Comentários'>
                            <li className='footer-list-items'>Comentarios</li>
                        </Link>
                        <Link style={{ textDecoration: 'none' }} to='/contato'>
                            <li className='footer-list-items'>Contatos</li>
                        </Link>
                        
                    </ul>
                </nav>
            </footer>
        </>
    )
}

export default Footer;