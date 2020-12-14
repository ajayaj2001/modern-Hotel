import React from 'react'
import './Header.scss';
import logo from '../img/logo.png';
const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="logo" className="logo" />
        </div>
    )
}

export default Header
