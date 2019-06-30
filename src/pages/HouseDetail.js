import React from 'react';
import ImageGallery from 'react-image-gallery';
import { inject, observer } from 'mobx-react';
import { map, get, keys } from 'lodash';
import { observable } from 'mobx';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import './HouseDetail.scss'

let currentSection = observable.box(1);

class HouseDetail extends React.Component {
    selectedRoom = observable.box(0);

    constructor(props){
        super(props);

        const { HomeStore, match } = props;
        HomeStore.setSelectedHouse(match.params.id);
    }
    
    render() {
        const roomTypes = keys(get(this.props.HomeStore.selectedHouse, 'rooms'));

        const images = map(get(this.props.HomeStore.selectedHouse, ['rooms', roomTypes[this.selectedRoom.get()], 'images']),
            image => ({
                original: image,
                thumbnail: image,
                size: 'height: 500px'
            }));


        return <div className='house-detail-container'>
            <div style={{paddingBottom: '20px', position: 'relative', minHeight: '100px'}}>
                {
                    !!roomTypes.length &&
                    <div className='room-btn-group'>
                        {
                            map(roomTypes, (roomType, index) => <div
                                className='room-btn'
                                key={roomType}
                                style={{
                                    backgroundColor: this.selectedRoom.get() === index ? '#FE605C' : '#fff',
                                    color: this.selectedRoom.get() === index ? 'white' : 'black',
                                    fontWeight: this.selectedRoom.get() === index ? 700 : 500,
                                }}
                                onClick={() => this.selectedRoom.set(index)}
                            >
                                <span>{roomType}</span>
                            </div>)
                        }
                    </div>
                }

                {/* <div style={{height: innerWidth * 0.8 * 0.6 + 'px', maxHeight: innerWidth * 0.8 * 0.6 + 'px'}}> */}
                    <ImageGallery 
                        items={images}
                        showFullscreenButton={false}
                        showPlayButton={false}
                        showBullets={true}
                        defaultImage={'images/oops.jpg'}
                        lazyLoad={true}
                    />
                {/* </div> */}
            </div>
            <div className='home-section'>
                <div onClick={() => currentSection.set(1)} className={`house-section-btn ${currentSection.get() === 1 ? 'house-section-btn-active' : ''}`}>
                    지점 소개
                </div>
                <div onClick={() => currentSection.set(2)} className={`house-section-btn ${currentSection.get() === 2 ? 'house-section-btn-active' : ''}`}>
                    방 정보
                </div>
                <div onClick={() => currentSection.set(3)} className={`house-section-btn ${currentSection.get() === 3 ? 'house-section-btn-active' : ''}`}>
                    세부 정보
                </div>
                <div onClick={() => currentSection.set(4)} className={`house-section-btn ${currentSection.get() === 4 ? 'house-section-btn-active' : ''}`}>
                    FAQ
                </div>
            </div>
            {
                currentSection.get() === 1 &&
                <div id='point-intro' style={{marginTop: '20px'}}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>이름</TableCell>
                                <TableCell>성별</TableCell>
                                <TableCell>타입</TableCell>
                                <TableCell>면적</TableCell>
                                <TableCell>보증금</TableCell>
                                <TableCell>월세</TableCell>
                                <TableCell>입주가능일</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {
                            map(this.props.HomeStore.roomsDetail, room => <TableRow>
                                <TableCell>{room.name}</TableCell>
                                <TableCell>{room.for}</TableCell>
                                <TableCell>{room.size}</TableCell>
                                <TableCell>{room.area}</TableCell>
                                <TableCell>{room.guarantee_money}</TableCell>
                                <TableCell>{room.monthly_fee}</TableCell>
                                <TableCell>{room.available_time}</TableCell>
                            </TableRow>)
                        }
                        </TableBody>
                    </Table>
                </div>
            }
            {
                currentSection.get() === 2 &&
                <div id='room-intro' style={{marginTop: '20px'}}>
                    
                </div>
            }
            {
                currentSection.get() === 3&&
                <div id='room-detail' style={{marginTop: '20px'}}>
                    
                </div>
            }
            {
                currentSection.get() === 4 &&
                <div id='faq' style={{marginTop: '20px'}}>
                    
                </div>
            }
        </div>
    }
}

export default inject('HomeStore')(observer(HouseDetail));