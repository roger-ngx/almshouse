import React from 'react';

import './Home.scss';
import CategoryList from './Home/CategoryList';
import MapContainer from '../components/MapContainer/MapContainer';
import MainContent from './Home/MainContent';

const Home = () => <div className='main-container'>
    <div className='home-container'>
        <div className='category-list'>
            <CategoryList />
        </div>
        <div className='house-list'>
            <MainContent />
        </div>
        <div className='map-container'>
            <MapContainer />
        </div>
    </div>
</div>

export default Home;