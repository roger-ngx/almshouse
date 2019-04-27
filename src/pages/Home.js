import React from 'react';

import RoomCard from '../components/RoomCard/RoomCard';

import './Home.scss';
import CategoryList from './Home/CategoryList';

const Home = () => <div className='home-container'>
    <div className='category-list'>
        <CategoryList />
    </div>
    <div className='house-list'>
        <RoomCard />
    </div>
</div>

export default Home;