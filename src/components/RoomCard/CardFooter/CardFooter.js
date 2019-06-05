import React from 'react';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import './CardFooter.scss';

const CardFooter = ({house}) => <div className='footer_container'>
   <div className='footer_text_line'>
        <span className='name'>{ house.name }</span>
        <span className='footer_btn name'>
            <FavoriteBorderIcon />
        </span>
   </div>
   <div className='footer_text_line'>
        <span>여성전용</span>
        <span className='sub-text'>단독주택</span>
        <span>신청가능</span>
        <span className='no-bed-avail'>3</span>
   </div>
</div>

export default CardFooter;