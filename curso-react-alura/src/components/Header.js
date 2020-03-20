import React from 'react';

const Header = () => {

    return (
        <nav>
            <div className="nav-wrapper blue darken-1">
                <a href="/" className="brand-logo right">Logo</a>
                <ul id="nav-mobile" >
                    <li><a href="/autores">Autores</a></li>
                    <li><a href="/livros">Livros</a></li>
                    <li><a href="/sobre">Sobre</a></li>
                </ul>
            </div>
        </nav>
    )
}


export default Header;