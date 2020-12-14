import React from 'react'
import './Navigation.scss'
import svg from '../img/sprite.svg'
const Navigation = () => {
    return (
        <React.Fragment>
            <nav className="sidebar">
                <ul className="sidebar-nav">
                    <li className="sidebar-nav__list">
                        <a href="" className="sidebar-nav__item">
                            <svg className="sidebar-nav__icon">
                                <use xlinkHref={`${svg}#icon-home`}></use>
                            </svg>
                            <span className="side-nav__text">7</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </React.Fragment>
    )
}

export default Navigation
