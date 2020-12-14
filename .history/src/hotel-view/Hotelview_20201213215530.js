import React from 'react'
import './Hotelview.scss'
import Overview from './overview/Overview'
const Hotelview = () => {
    return (
        <React.Fragment>
            <main className="hotelview">
                <Overview />
                <div className="detail">
                    <div className="description">description</div>
                    <div className="review">review</div>
                </div>
            </main>
        </React.Fragment>
    )
}

export default Hotelview
