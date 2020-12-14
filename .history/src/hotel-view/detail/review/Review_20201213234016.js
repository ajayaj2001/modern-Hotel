import React from 'react'
import './Review.scss'
import user from '../../../img/user-1.jpg'
const Review = () => {
    return (
        <React.Fragment>
            <figure className="review" >
                <blockquote className="review__text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Fuga doloremque architecto dicta animi, totam, itaque officia ex.
                </blockquote>
                <figcaption className="review__user">
                    <img src={user} alt="reviewer" className="review__photo" />
                    <div className="review__user-box">
                        <p className="review__user-name">akashi</p>
                        <p className="review__user-date">Feb 23rd, 2017</p>
                    </div>
                </figcaption>
            </figure>
        </React.Fragment>
    )
}

export default Review
