import React from 'react';
import ImageGallery from 'react-image-gallery';
import { inject, observer } from 'mobx-react';
import { map, get, keys, mapKeys } from 'lodash';
import { observable } from 'mobx';

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


        return <div style={{padding: '20px 20% 0'}}>
            <div style={{paddingBottom: '20px', position: 'relative', minHeight: '100px'}}>
                {
                    !!roomTypes.length &&
                    <div style={{
                            zIndex: 1,
                            position: 'absolute',
                            top: 20,
                            left: 20,
                            display: 'flex',
                            flexDirection: 'row'
                        }}
                    >
                        {
                            map(roomTypes, (roomType, index) => <div 
                                key={roomType}
                                style={{
                                    width: '10rem',
                                    height: '3rem',
                                    lineHeight: '3rem',
                                    verticalAlign: 'middle',
                                    backgroundColor: this.selectedRoom.get() === index ? '#FE605C' : '#fff',
                                    color: this.selectedRoom.get() === index ? 'white' : 'black',
                                    fontWeight: this.selectedRoom.get() === index ? 700 : 500,
                                    textAlign: 'center',
                                    cursor: 'pointer',
                                    border: 'solid 1px #eee'
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
                    <table>
                        <tr>
                            <th>이름</th>
                            <th>성별</th>
                            <th>타입</th>
                            <th>면적</th>
                            <th>보증금</th>
                            <th>월세</th>
                            <th>입주가능일</th>
                        </tr>
                        {
                            map(this.props.HomeStore.roomsDetail, room => <tr>
                                <td>{room.name}</td>
                                <td>{room.for}</td>
                                <td>{room.size}</td>
                                <td>{room.area}</td>
                                <td>{room.guarantee_money}</td>
                                <td>{room.monthly_fee}</td>
                                <td>{room.available_time}</td>
                            </tr>)
                        }
                    </table>
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