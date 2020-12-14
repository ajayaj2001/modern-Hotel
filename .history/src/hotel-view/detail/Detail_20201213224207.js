import React from 'react'
import './Detail.scss'
import frnd1 from '../../img/user-1.jpg'
const Detail = () => {
    return (
        <div className="detail">
            <div className="description">
                <p className="paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi
                    dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis
                    incidunt deserunt quae architecto voluptate.
                </p>
                <p className="paragraph">
                    Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate
                    delectus, inventore iure aliquid aliquam.
                </p>
                <ul className="list">
                    <li className="list__item">Close to the beach</li>
                    <li className="list__item">Free airport shuttle</li>
                    <li className="list__item">Air conditioning and heating</li>
                    <li className="list__item">We speak all languages</li>
                    <li className="list__item">Breakfast included</li>
                    <li className="list__item">Free wifi in all rooms</li>
                    <li className="list__item">Pets allowed</li>
                    <li className="list__item">Perfect for families</li>
                </ul>
                <div className="recommend">
                    <p className="recommend__count">Lucy and 3 other friends recommend this hotel.</p>
                    <div className="recommend__friends">
                        <img src="" alt="" className="recommend__photo" />
                    </div>
                </div>
            </div>
            <div className="review">review</div>
        </div>
    )
}

export default Detail
