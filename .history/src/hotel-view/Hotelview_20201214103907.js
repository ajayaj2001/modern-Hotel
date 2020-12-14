import React from 'react'
import Actionbutton from './button/Actionbutton'
import Detail from './detail/Detail'
import './Hotelview.scss'
import Overview from './overview/Overview'
const Hotelview = () => {
    return (
        <React.Fragment>
            <main className="hotelview">
                <Overview />
                <Detail />
                <Actionbutton />
            </main>
        </React.Fragment>
    )
}

export default Hotelview
