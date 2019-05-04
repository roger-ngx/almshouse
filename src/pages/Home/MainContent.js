import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

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
            <Grid container spacing={32}>
                <Grid item xs={6}>
                    <Link to='/houses'>
                        <RoomCard />
                    </Link>
                </Grid>
                <Grid item xs={6}>
                    <RoomCard />
                </Grid>
                <Grid item xs={6}>
                    <RoomCard />
                </Grid>
                <Grid item xs={6}>
                    <RoomCard />
                </Grid>
            </Grid>
        </div>
    </>
}

export default withStyles(styles)(MainContent);