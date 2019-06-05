import React from 'react';

import './RoomCard.scss';
import CardFooter from './CardFooter/CardFooter';

const RoomCard = ({house}) => <div className='card'>
    <div className='card_img'>
    </div>
    <div className='card_footer'>
        <CardFooter house={house}/>
    </div>
</div>

export default RoomCard;