import React from 'react'
import './Header.scss';
import logo from '../img/logo.png';
import svg from '../img/sprite.svg'
const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="logo" className="logo" />

            <form action="#" className="search">
                <input type="text" className="search___input" placeholder="Search" />
                <button className="search__button">
                    <svg className="search__icon">
                        <use xlinkHref={`${svg}#icon-magnifying-glass`}></use>
                    </svg>
                </button>
            </form>
            <nav className="user-nav">
                <div className="user-nav__icon-box">
                    <svg className="user-nav__icon">
                        <use xlinkHref={`${svg}#icon-bookmark`}></use>
                    </svg>
                </div>
            </nav>
        </div>
    )
}

export default Header
