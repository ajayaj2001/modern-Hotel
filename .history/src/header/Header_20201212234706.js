import React from 'react'
import './Header.scss';
import logo from '../img/logo.png';
import user from '../img/user-1.jpg';
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
                    <span className="user-nav__notification">7</span>
                </button>
            </form>
            <nav className="user-nav">
                <div className="user-nav__icon-box">
                    <svg className="user-nav__icon">
                        <use xlinkHref={`${svg}#icon-bookmark`}></use>
                    </svg>
                    <span className="user-nav__notification">7</span>
                </div>
                <div className="user-nav__icon-box">
                    <svg className="user-nav__icon">
                        <use xlinkHref={`${svg}#icon-chart`}></use>
                    </svg>
                    <span className="user-nav__notification">13</span>
                </div>
                <div className="user-nav__user">
                    <img src="" alt="" className="user-nav__user-profile" />
                </div>
            </nav>
        </div>
    )
}

export default Header
