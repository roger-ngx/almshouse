import React from 'react';
import { inject, observer } from 'mobx-react';
import { throttle } from 'lodash';

import './House.scss';
import CategoryList from './CategoryList';
import MapContainer from '../../components/MapContainer/MapContainer';
import MobileHouseStatus from '../../components/MobileHouseStatus/MobileHouseStatus';
import MainContent from './MainContent';

class Home extends React.Component{

    constructor(props){
        super(props);

        this.resizeListener = window.addEventListener("resize", throttle(this.resize, 100, {leading: true}));
        this.resize();
    }

    componentDidMount() {
        this.props.HomeStore.onLoadRooms();
    }

    componentWillUnmount() {
        this.resizeListener.removeEventListener();
    }

    resize = () => {
        if(window.innerWidth < 690){
            this.props.HomeStore.setShowingHouseList(false);
        }else{
            this.props.HomeStore.setShowingHouseList(true);
        }
    }

    render(){
        const mHouseListStyle = {
            height : this.props.HomeStore.isShowHouseList ? 'calc(100vh - 60px)' : '48px'
        };

        return (<div className='house'>
            <div className='house__container'>
                <div className='house__container__category-list'>
                    <CategoryList />
                </div>
                <div className='house__container__house-list' style={mHouseListStyle}>
                    <MobileHouseStatus />
                    <MainContent />
                </div>
                <div className='house__container__map-container'>
                    <MapContainer />
                </div>
            </div>
        </div>)
    }
}

export default inject('HomeStore')(observer(Home));