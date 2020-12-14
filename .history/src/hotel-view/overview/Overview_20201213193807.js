import React from 'react'
import './Overview.scss'
import hotel1 from '../../img/hotel-1.jpg'
import hotel2 from '../../img/hotel-2.jpg'
import hotel3 from '../../img/hotel-3.jpg'
const Overview = () => {
    return (
        <React.Fragment>
            <div className="gallery">
                <figure className="gallery__item">
                    <img src={hotel1} alt="hotel building" className="gallery__photo" />
                </figure>
                <figure className="gallery__item">
                    <img src={hotel2} alt="hotel building" className="gallery__photo" />
                </figure>
                <figure className="gallery__item">
                    <img src={hotel3} alt="hotel building" className="gallery__photo" />
                </figure>
            </div>
            <div className="overview">
                <h1 className="overview__heading">
                    HOTEL LAS PALMAS
                </h1>
                <div className="overview__icons">
                    <svg className="user-nav__icon">
                        <use xlinkHref={`${svg}#icon-bookmark`}></use>
                    </svg>
                    <svg className="user-nav__icon">
                        <use xlinkHref={`${svg}#icon-bookmark`}></use>
                    </svg>
                    <svg className="user-nav__icon">
                        <use xlinkHref={`${svg}#icon-bookmark`}></use>
                    </svg>
                    <svg className="user-nav__icon">
                        <use xlinkHref={`${svg}#icon-bookmark`}></use>
                    </svg>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Overview
