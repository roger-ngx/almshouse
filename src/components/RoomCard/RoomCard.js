import React from 'react';
import { get } from 'lodash';

import './RoomCard.scss';
import CardFooter from './CardFooter/CardFooter';

const RoomCard = ({house}) => {

    const style = {
        backgroundImage: `url(${get(house,"rooms['Living Room'].images[0]", 'images/oops.jpg')})`
    }

    return (<div className='card'>
        <div className='card_img' style={style}>
        </div>
        <div className='card_footer'>
            <CardFooter house={house}/>
        </div>
    </div>)
}

export default RoomCard;