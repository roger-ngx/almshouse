import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import { inject } from 'mobx-react';
import { observer } from 'mobx-react-lite';
import { map } from 'lodash';

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
        height: '100%'
    }
}
const MainContent = (props)=> {
    const { classes, HomeStore } = props;

    return <>
        {/* <div className={classes.searchBar}>
            <SearchBar />
        </div> */}
        <div className={classes.searchContent}>
            {/* <SearchOption /> */}
            <Grid container spacing={2}>
                {
                    map(HomeStore.houseClusters, house => <Grid key={house.name} item xs={6}>
                        <Link target="_blank" to={`/houses/${house.name}`}>
                            <RoomCard house={house}/>
                        </Link>
                    </Grid>)
                }
            </Grid>
        </div>
    </>
}

export default inject('HomeStore')(withStyles(styles)(observer(MainContent)));