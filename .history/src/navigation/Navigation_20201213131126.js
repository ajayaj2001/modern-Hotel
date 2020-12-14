import React from 'react'
import './Navigation.scss'
import svg from '../img/sprite.svg'
const Navigation = () => {
    return (
        <React.Fragment>
            <nav className="sidebar">
                <ul className="side-nav">
                    <li className="side-nav__item">
                        <a href="#home" className="side-nav__link">
                            <svg className="side-nav__icon">
                                <use xlinkHref={`${svg}#icon-home`}></use>
                            </svg>
                            <span className="side-nav__text">home</span>
                        </a>
                    </li>
                    <li className="side-nav__item">
                        <a href="#home" className="side-nav__link">
                            <svg className="side-nav__icon">
                                <use xlinkHref={`${svg}#icon-aircraft-take-off`}></use>
                            </svg>
                            <span className="side-nav__text">flight</span>
                        </a>
                    </li>
                    <li className="side-nav__item">
                        <a href="#home" className="side-nav__link">
                            <svg className="side-nav__icon">
                                <use xlinkHref={`${svg}#icon-key`}></use>
                            </svg>
                            <span className="side-nav__text">car rental</span>
                        </a>
                    </li>
                    <li className="side-nav__item">
                        <a href="#home" className="side-nav__link">
                            <svg className="side-nav__icon">
                                <use xlinkHref={`${svg}#icon-map`}></use>
                            </svg>
                            <span className="side-nav__text">tours</span>
                        </a>
                    </li>
                </ul>
                <div className="legal">
                    &copy; 2020 by AJ-SITES. All rights reserved.
                </div>
            </nav>
        </React.Fragment>
    )
}

export default Navigation
