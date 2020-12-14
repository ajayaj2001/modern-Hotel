import React from 'react'
import './Hotelview.scss'
import Overview from './overview/Overview'
const Hotelview = () => {
    return (
        <React.Fragment>
            <main className="hotelview">
                <Overview />
            </main>
        </React.Fragment>
    )
}

export default Hotelview
