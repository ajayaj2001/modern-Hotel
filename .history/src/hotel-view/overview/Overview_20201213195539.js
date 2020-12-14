import React from 'react'
import './Overview.scss'
import hotel1 from '../../img/hotel-1.jpg'
import hotel2 from '../../img/hotel-2.jpg'
import hotel3 from '../../img/hotel-3.jpg'
import svg from '../../img/sprite.svg'
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
                <div className="overview__stars">
                    <svg className="overview__icon-star">
                        <use xlinkHref={`${svg}#icon-star`}></use>
                    </svg>
                    <svg className="overview__icon-star">
                        <use xlinkHref={`${svg}#icon-star`}></use>
                    </svg>
                    <svg className="overview__icon-star">
                        <use xlinkHref={`${svg}#icon-star`}></use>
                    </svg>
                    <svg className="overview__icon-star">
                        <use xlinkHref={`${svg}#icon-star`}></use>
                    </svg>
                </div>
                <div className="overview__location">
                    <svg className="overview__icon-loction">
                        <use xlinkHref={`${svg}#icon-location-pin`}></use>
                    </svg>
                    <button className="btn-inline">Albufeira,Portugal</button>
                </div>
                <div className="overview__rating">
                    <div className="overview__rating-average">8.6</div>
                    <div className="overview__rating-count">480 votes</div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Overview
