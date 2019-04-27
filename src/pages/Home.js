import React from 'react';

import RoomCard from '../components/RoomCard/RoomCard';

import './Home.scss';
import CategoryList from './Home/CategoryList';
import SearchOption from '../components/SearchOption/SearchOption';

const Home = () => <div className='home-container'>
    <div className='category-list'>
        <CategoryList />
    </div>
    <div className='house-list'>
        <SearchOption />
        <RoomCard />
    </div>
</div>

export default Home;