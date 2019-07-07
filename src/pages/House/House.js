import React, { useEffect } from 'react';
import { inject } from 'mobx-react';
import { observer } from 'mobx-react-lite';
import { throttle } from 'lodash';

import './House.scss';
import CategoryList from './CategoryList';
import MapContainer from '../../components/MapContainer/MapContainer';
import MobileHouseStatus from '../../components/MobileHouseStatus/MobileHouseStatus';
import MainContent from './MainContent';

const Home = ({HomeStore}) => {

    const mHouseListStyle = {
        height : HomeStore.isShowHouseList ? 'calc(100vh - 90px)' : '48px'
    };

    function resize() {
        if(window.innerWidth < 690){
            HomeStore.setShowingHouseList(false);
        }else{
            HomeStore.setShowingHouseList(true);
        }
    }

    useEffect(() => {
      HomeStore.onLoadRooms();
      window.addEventListener("resize", throttle(resize, 100, {leading: true}));
      resize();
    });

    return (<div className='main-container'>
        <div className='home-container'>
            <div className='category-list'>
                <CategoryList />
            </div>
            <div className='house-list' style={mHouseListStyle}>
                <MobileHouseStatus />
                <MainContent />
            </div>
            <div className='map-container'>
                <MapContainer />
            </div>
        </div>
    </div>)
}

export default inject('HomeStore')(observer(Home));