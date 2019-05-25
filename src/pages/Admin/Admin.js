import React from 'react';
import { inject, observer } from 'mobx-react';
import { map, get } from 'lodash';
import DevTools from 'mobx-react-devtools';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { IconButton, Select, MenuItem, FormControl, InputLabel, Fab, Tooltip } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';

import './Admin.scss'

const Admin = ({AdminStore}) => {

    return (
    <div className='main-content'>
        <div className='fab-group'>
            <Tooltip title='Save to server'>
                <Fab style={{marginRight: '20px', backgroundColor: 'green', color: 'white'}}>
                    <DoneIcon onClick={AdminStore.saveRoomToFirebase}/>
                </Fab>
            </Tooltip>
            <Tooltip title='Clear all info'>
                <Fab style={{backgroundColor: 'red', color: 'white'}}>
                    <ClearIcon/>
                </Fab>
            </Tooltip>
        </div>
        <Grid container spacing={24}>
            <Grid item xs={12}>
                <TextField label='Room name' style={{width: '100%'}} 
                name='name'
                onChange={AdminStore.onHandleRoomInfoChanged}
                value={AdminStore.roomInfo.name || ''}/>
            </Grid>
            <Grid item xs={12}>
                <TextField label='Address' style={{width: '100%'}} 
                name='address'
                onChange={AdminStore.onHandleRoomInfoChanged}
                value={AdminStore.roomInfo.address || ''}/>
            </Grid>
            <Grid item xs={6}>
                <TextField label='Lat'  style={{width: '100%'}} 
                name='location.lat'
                type='number'
                onChange={AdminStore.onHandleRoomInfoChanged}
                value={AdminStore.roomInfo.location.lat || ''}/>
            </Grid>
            <Grid item xs={6}>
                <TextField label='Long'  style={{width: '100%'}} 
                name='location.lng'
                type='number'
                onChange={AdminStore.onHandleRoomInfoChanged}
                value={AdminStore.roomInfo.location.lng || ''}/>
            </Grid>
            <Grid item xs={12}>
                <TextField label='Description' multiline  style={{width: '100%'}} 
                name='description'
                onChange={AdminStore.onHandleRoomInfoChanged}
                value={AdminStore.roomInfo.description || ''}/>
            </Grid>
        </Grid>

        <div style={{marginTop: '24px'}}>
            <span style={{marginRight: '15px'}}>Image upload</span>
            <IconButton onClick={AdminStore.addWaitingImageType}>
                <AddIcon />
            </IconButton>
        </div>
        {
            AdminStore.waitingRooms.map( (room, index) => <>
                
                <Grid container spacing={8}>
                    <Grid item xs={4}>
                        <FormControl style={{width: '200px'}}>
                            <InputLabel htmlFor="age-simple">Room Type</InputLabel>
                            <Select onChange={e => AdminStore.setWaitingRoomType(index, e.target.value)}
                            value={room.type}>
                                <MenuItem value={'Living Room'}>Living Room</MenuItem>
                                <MenuItem value={'Kitchen'}>Kitchen</MenuItem>
                                <MenuItem value={'Bath Room'}>Bath Room</MenuItem>
                                <MenuItem value={'Room A'}>Room A</MenuItem>
                                <MenuItem value={'Room B'}>Room B</MenuItem>
                                <MenuItem value={'Room C'}>Room C</MenuItem>
                                <MenuItem value={'Room D'}>Room D</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={8}>
                        <Grid container alignContent='flex-end' style={{height: '100%'}}>
                            <input type='file' onChange={e => AdminStore.setWaitingRoomImages(index, e.target.files)} multiple/>
                        </Grid>
                    </Grid>
                    <div>
                        <ul>
                            {
                                map(room.images, (image, subIndex) => <li key={image.name}>
                                        { image.name } - { (image.size / 1000) | 0 } kB
                                        <IconButton onClick={() => AdminStore.deleteWaitingRoomImages(index, subIndex)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                </Grid>
            </>)
        }
        <DevTools />
    </div>
    )
}

export default inject('AdminStore')(observer(Admin));