import React from 'react';
import LinkWrapper from './LinkWrapper'


const Header = () => {

    return (
        <nav>
            <div className="nav-wrapper blue darken-1">
                <LinkWrapper to="/" className="brand-logo right" activeStyle={{color:"gold"}}>Logo</LinkWrapper>
                <ul id="nav-mobile" >
                    <li><LinkWrapper to="/autores">Autores</LinkWrapper></li>
                    <li><LinkWrapper to="/livros">Livros</LinkWrapper></li>
                    <li><LinkWrapper to="/sobre">Sobre</LinkWrapper></li>
                </ul>
            </div>
        </nav>
    )
}


export default Header;