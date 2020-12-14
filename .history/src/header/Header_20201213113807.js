import React from 'react'
import './Header.scss';
import logo from '../img/logo.png';
import user from '../img/user.jpg';
import svg from '../img/sprite.svg'
const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="logo" className="logo" />

            <form action="#" className="search">
                <input type="text" className="search__input" placeholder="Search" />
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
                    <span className="user-nav__notification">7</span>
                </div>
                <div className="user-nav__icon-box">
                    <svg className="user-nav__icon">
                        <use xlinkHref={`${svg}#icon-chat`}></use>
                    </svg>
                    <span className="user-nav__notification">13</span>
                </div>
                <div className="user-nav__user">
                    <img src={user} alt="user-profile" className="user-nav__user-photo" />
                    <span className="user-nav__user-name">AJ</span>
                </div>
            </nav>
        </div>
    )
}

export default Header
