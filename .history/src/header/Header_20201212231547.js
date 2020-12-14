import React from 'react'
import './Header.scss';
import logo from '../img/logo.png';
const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="logo" className="logo" />

            <form action="#" className="search">
                <input type="text" className="search___input" />
            </form>
        </div>
    )
}

export default Header
