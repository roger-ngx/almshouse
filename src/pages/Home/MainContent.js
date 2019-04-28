import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import SearchBar from '../../components/SearchBar/SearchBar';
import SearchOption from '../../components/SearchOption/SearchOption';
import RoomCard from '../../components/RoomCard/RoomCard';

const styles = {
    searchBar:  {
        width: 'calc(100% - 40px)',
        backgroundColor: '#fff',
        zIndex: 1
    },
    searchContent: {
        overflow: 'scroll',
        height: 'calc(100% - 84px)'
    }
}
const MainContent = (props)=> {
    const { classes } = props;

    return <>
        <div className={classes.searchBar}>
            <SearchBar />
        </div>
        <div className={classes.searchContent}>
            <SearchOption />
            <RoomCard />
            <RoomCard />
            <RoomCard />
        </div>
    </>
}

export default withStyles(styles)(MainContent);