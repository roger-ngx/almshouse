import React from 'react';

import RoomCard from '../components/RoomCard/RoomCard';

import './Home.scss';
import CategoryList from './Home/CategoryList';
import SearchOption from '../components/SearchOption/SearchOption';
import MapContainer from '../components/MapContainer/MapContainer';

const Home = () => <div className='home-container'>
    <div className='category-list'>
        <CategoryList />
    </div>
    <div className='house-list'>
        <SearchOption />
        <RoomCard />
    </div>
    <div className='map-container'>
        <MapContainer />
    </div>
</div>

export default Home;