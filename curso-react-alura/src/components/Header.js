import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => {

    return (
        <nav>
            <div className="nav-wrapper blue darken-1">
                <Link to="/" className="brand-logo right">Logo</Link>
                <ul id="nav-mobile" >
                    <li><Link to="/autores">Autores</Link></li>
                    <li><Link to="/livros">Livros</Link></li>
                    <li><Link to="/sobre">Sobre</Link></li>
                </ul>
            </div>
        </nav>
    )
}


export default Header;