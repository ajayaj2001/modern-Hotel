import React from 'react'
import './Actionbutton.scss'
const Actionbutton = () => {
    return (
        <div>
            <div className="cta">
                <h2 className="cta__book-now">
                    GOOD NEWS! WE HAVE 4 FREE ROOMS FOR YOUR SELECTED DATES!
                </h2>
                <button className="btn">
                    <span className="btn__visible">Book now</span>
                    <span className="btn__visible"> only 4 rooms left</span>
                </button>
            </div>
        </div>
    )
}

export default Actionbutton
