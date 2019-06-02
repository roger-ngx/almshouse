import React, { useEffect } from 'react';
import { inject } from 'mobx-react';
import { observer } from 'mobx-react-lite';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Divider } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const RoomList = ({HomeStore, AdminStore}) => {
    useEffect(() => {
        HomeStore.onLoadRooms()
    });

    return (<List>
        {
            HomeStore.houses.map(house => <><ListItem key={house.name} 
                onClick={AdminStore.setHouseInfo.bind(null, house)}>
                <ListItemText>
                    {house.name}
                </ListItemText>
                <ListItemSecondaryAction>
                    <IconButton edge='end'>
                        <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
            <Divider />
            </>)
        }
    </List>)
}

export default inject('HomeStore', 'AdminStore')(observer(RoomList));