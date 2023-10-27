import React  from 'react';
import { Link} from 'react-router-dom';
import './styles.css';
import Logo from '../../assets/bat-symbol.jpg'

function Header (){
    
    return(
    <header>
         <img id='logo' src={Logo} alt='Logo'/>
        <nav>
            <ul>
                <Link style={{textDecoration: 'none'}} to ='/'>
                   <li>Home</li>
                </Link>
                <Link style={{textDecoration: 'none'}} to = '/Fotos'>
                   <li>Fotos</li>
                </Link>
                <Link style={{textDecoration: 'none'}} to= '/Comentários'>
                   <li>Comentarios</li> 
                </Link>
                <Link style={{textDecoration: 'none'}} to= '/Contato'>
                   <li>Contatos</li> 
                </Link>

            </ul>
        </nav>
    </header>
    )
}

export default Header;