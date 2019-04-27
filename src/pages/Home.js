import React from 'react';
import { inject, observer } from 'mobx-react';

import RoomCard from '../components/RoomCard/RoomCard';
import CategoryItem from '../components/CategoryItem/CategoryItem';

import './Home.scss';

const Home = ({HomeStore}) => <div className='home-container'>
    <div className='category-list'>
        <ul>
            {
                HomeStore.categoryList.map((category, i) => <li key={i}><CategoryItem type={i + 1} mainText={category.mainText} subText={category.subText}/></li>)
            }
        </ul>
    </div>
    <div className='house-list'>
        <RoomCard />
    </div>
</div>

export default inject('HomeStore')(observer(Home));