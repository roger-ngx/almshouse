import React, { useEffect } from 'react';
import { inject } from 'mobx-react';
import { observer } from 'mobx-react-lite';

import './House.scss';
import CategoryList from './CategoryList';
import MapContainer from '../../components/MapContainer/MapContainer';
import MainContent from './MainContent';

const Home = ({HomeStore}) => {

    useEffect(() => {
      HomeStore.onLoadRooms();
    });

    return (<div className='main-container'>
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
    </div>)
}

export default inject('HomeStore')(observer(Home));