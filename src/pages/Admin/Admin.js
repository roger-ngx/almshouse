import React from 'react';
import { inject } from 'mobx-react';
import { observer } from 'mobx-react-lite';
import { map, isObject } from 'lodash';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { IconButton, Select, MenuItem, FormControl, InputLabel, Fab, Tooltip, FormHelperText } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import CancelIcon from '@material-ui/icons/Cancel';
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';

import './Admin.scss'
import HouseList from '../../components/HouseList/HouseList';

const Admin = ({AdminStore}) => {

    return (<>
    {/* <nav>
        <DrawerMenu />
    </nav> */}

    <main className='main-content'>
        <div className='fab-group'>
            <Tooltip title='Save to server'>
                <Fab style={{marginRight: '20px', backgroundColor: 'green', color: 'white'}}>
                    <DoneIcon onClick={AdminStore.saveRoomToFirebase}/>
                </Fab>
            </Tooltip>
            <Tooltip title='Clear all info'>
                <Fab style={{backgroundColor: 'red', color: 'white'}}>
                    <ClearIcon onClick={AdminStore.clearHouseInfo}/>
                </Fab>
            </Tooltip>
        </div>
        <Grid container spacing={24}>
            <Grid item xs={12}>
                <TextField label='Room name' style={{width: '100%'}} 
                name='name'
                onChange={AdminStore.onHandleRoomInfoChanged}
                value={AdminStore.houseInfo.name || ''}/>
            </Grid>
            <Grid item xs={12}>
                <TextField label='Address' style={{width: '100%'}} 
                name='address'
                onChange={AdminStore.onHandleRoomInfoChanged}
                value={AdminStore.houseInfo.address || ''}/>
            </Grid>
            <Grid item xs={6}>
                <TextField label='Lat'  style={{width: '100%'}} 
                name='location.lat'
                type='number'
                onChange={AdminStore.onHandleRoomInfoChanged}
                value={AdminStore.houseInfo.location.lat || ''}/>
            </Grid>
            <Grid item xs={6}>
                <TextField label='Long'  style={{width: '100%'}} 
                name='location.lng'
                type='number'
                onChange={AdminStore.onHandleRoomInfoChanged}
                value={AdminStore.houseInfo.location.lng || ''}/>
            </Grid>
            <Grid item xs={12}>
                <TextField label='Description' multiline  style={{width: '100%'}} 
                name='description'
                onChange={AdminStore.onHandleRoomInfoChanged}
                value={AdminStore.houseInfo.description || ''}/>
            </Grid>
        </Grid>

        <div style={{marginTop: '24px'}}>
            <span style={{marginRight: '15px'}}>Image upload</span>
            <IconButton onClick={AdminStore.addWaitingImageType}>
                <AddIcon />
            </IconButton>
        </div>
        {
            AdminStore.rooms.map( (room, index) => <>
                
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
                            <input 
                                type='file'
                                onChange={e => AdminStore.setWaitingRoomImages(index, e.target.files)}
                                multiple
                                disabled={!room.type}
                            />
                        </Grid>
                    </Grid>
                    <div style={{display: 'flex', width: '100%', flexDirection:'row', justifyContent: 'center'}}>
                        {
                            map(room.images, (image, index) => 
                                <div 
                                    key={isObject(image) ? image.name : image} 
                                    style={{position: 'relative', height: '100px', width: '100px', margin: '0 10px'}}
                                >
                                    <div style={{zIndex: 1, position: 'absolute', top: '40%', right: '20px'}}>
                                        <span>Loading...</span>
                                    </div>

                                    <div style={{zIndex: 2, position: 'absolute', top: 0, left: 0}}>
                                        <img 
                                            style={{height: '100px', width: '100px'}} 
                                            src={ isObject(image) ? URL.createObjectURL(image) : image}
                                            alt=''
                                        />
                                    </div>

                                    <div style={{position: 'absolute', top: -12, right: -12, zIndex: 3}}>
                                        <CancelIcon onClick={AdminStore.removeRoomImage.bind(null, room.type, index)}/>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </Grid>
            </>)
        }

        <HouseList />
    </main>
    </>
    )
}

export default inject('AdminStore')(observer(Admin));