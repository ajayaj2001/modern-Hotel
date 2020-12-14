import React from 'react'
import './Review.scss'
const Review = (props) => {
    return (
        <React.Fragment>
            <figure className="review" >
                <blockquote className="review__text">
                    {props.text}
                </blockquote>
                <figcaption className="review__user">
                    <img src={props.image} alt="reviewer" className="review__photo" />
                    <div className="review__user-box">
                        <p className="review__user-name">{props.name}</p>
                        <p className="review__user-date">{props.date}</p>
                    </div>
                    <div className="review__rating">{props.rating}</div>
                </figcaption>
            </figure>
        </React.Fragment>
    )
}

export default Review
