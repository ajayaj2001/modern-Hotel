import React from 'react'
import './Hotelview.scss'
import Overview from './overview/Overview'
const Hotelview = () => {
    return (
        <React.Fragment>
            <main className="hotelview">
                <Overview />
                <Detail />
            </main>
        </React.Fragment>
    )
}

export default Hotelview
