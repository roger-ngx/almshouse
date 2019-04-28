import React from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import SearchOption from '../../components/SearchOption/SearchOption';
import RoomCard from '../../components/RoomCard/RoomCard';

const MainContent = ()=> {
    return <>
        <SearchBar />
        <SearchOption />
        <RoomCard />
    </>
}

export default MainContent;