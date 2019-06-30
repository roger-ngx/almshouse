import React, { useEffect } from 'react';
import { inject } from 'mobx-react';
import { observer } from 'mobx-react-lite';

import './HouseMobile.scss';
import MapContainer from '../../../components/MapContainer/MapContainer';
import MainContent from '../MainContent';
import MobileHouseStatus from '../../../components/MobileHouseStatus/MobileHouseStatus';

const HouseMobile = ({HomeStore}) => {

    const mHouseListStyle = {
        height : HomeStore.isShowHouseList ? 'calc(100vh - 90px)' : '40px'
    };

    useEffect(() => {
      HomeStore.onLoadRooms();
    });

    return (<div className='m-main-container'>
        <div className='m-home-container'>
            <div className='m-map-container'>
                <MapContainer />
            </div>
            <div className='m-houses' style={mHouseListStyle}>
                <div className='m-house-status'>
                    <MobileHouseStatus />
                </div>
                <div className='m-house-list'>
                    <MainContent />
                </div>
            </div>
        </div>
    </div>)
}

export default inject('HomeStore')(observer(HouseMobile));