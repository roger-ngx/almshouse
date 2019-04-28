import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';

const styles = {
    root: {
      padding: '10px 20px',
      display: 'flex',
      alignItems: 'center',
      width: '100%',
    },
    input: {
      marginLeft: 8,
      flex: 1,
    },
    iconButton: {
      padding: 10,
    }
  };

const SearchBar = (props) => {
    const { classes } = props;

    return (
        <Paper className={classes.root} elevation={1}>
          <InputBase className={classes.input} placeholder="" />
          <IconButton className={classes.iconButton} aria-label="Search">
            <SearchIcon />
          </IconButton>
        </Paper>
      );
    }

export default withStyles(styles)(SearchBar);