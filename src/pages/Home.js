import React from 'react';

import './Home.scss';
import CategoryList from './Home/CategoryList';
import MapContainer from '../components/MapContainer/MapContainer';
import MainContent from './Home/MainContent';
import NavigationBar from '../components/NavigationBar/NavigationBar';

const Home = () => <div>

    <NavigationBar />
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