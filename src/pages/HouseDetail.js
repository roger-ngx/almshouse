import React from 'react';
import ImageGallery from 'react-image-gallery';
import { inject, observer } from 'mobx-react';
import { map, get, keys } from 'lodash';

import './HouseDetail.scss'
import { observable } from 'mobx';

let currentSection = observable.box(1);

class HouseDetail extends React.Component {
    selectedRoom = observable.box(0);

    constructor(props){
        super(props);
        

        const { HomeStore, match } = props;
        HomeStore.setSelectedHouse(match.params.id);
    }
    
    render() {
const { innerWidth } = window;

        const roomTypes = keys(get(this.props.HomeStore.selectedHouse, 'rooms'));

    const images = map(get(this.props.HomeStore.selectedHouse, ['rooms', roomTypes[this.selectedRoom.get()], 'images']),
            image => ({
                original: image,
                thumbnail: image,
                size: 'height: 500px'
            }));


    return (<div style={{padding: '20px 20% 0'}}>
    
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
        <a href='#point-intro' onClick={() => currentSection.set(1)} className={`house-section-btn ${currentSection.get() === 1 ? 'house-section-btn-active' : ''}`}>
            지점 소개
        </a>
        <a href='#room-intro' onClick={() => currentSection.set(2)} className={`house-section-btn ${currentSection.get() === 2 ? 'house-section-btn-active' : ''}`}>
            방 정보
        </a>
        <a href='#detail-intro' onClick={() => currentSection.set(3)} className={`house-section-btn ${currentSection.get() === 3 ? 'house-section-btn-active' : ''}`}>
            세부 정보
        </a>
        <a href='#faq' onClick={() => currentSection.set(4)} className={`house-section-btn ${currentSection.get() === 4 ? 'house-section-btn-active' : ''}`}>
            FAQ
        </a>
    </div>
    {currentSection.get() === 1 && <>
    <div id='point-intro' style={{marginTop: '20px'}}>
        우주 6호점의 특징은 한 마디로 #가족 #패밀리쉽 #정 이 넘치는 곳이에요. 3개층으로 이뤄진 공간에서 남자셋 여자셋이 가능한 공간이랍니다!<br/>
        총 10명의 우주인이 함께 모여있는 이곳은 개별 공간으로 잘 구분이 되어있어 따로 또 같이가 충분히 이뤄질 수 있답니다. 우주인들만의 전용 테라스와 마당도 있고요, 함께 요리를 해먹고 또 함께 놀러 다니기에도 좋답니다.<br/> 
        위아래로 계단을 오가며 쌓이는 우주인들간의 정이 이 집의 매력 포인트! <br/>
        요즘 뜨고 있는 {`<북서울꿈의 숲>`} 14번 출구랑 가까울뿐만 아니라, 동네 자체가 조용하고 아기자기 하답니다. 평일, 주말 저녁에는 인근 동네주민들도 이 공원을 자주 이용하신다고 하니, 우주인들끼리 함께 공원 산책도 하고 운동하기에도 좋은 장소입니다. <br/>
        미아사거리역 주변으로는, 이마트, 롯데백화점, 현대백화점, 방천골목시장, 숭인시장이 가깝고요, 대학으로는 대중교통 이용시, 동덕여대, 광운대, 인덕대, 경희대, 외대, 고려대와 가깝습니다. <br/>
        1, 4, 6호선을 이용하시는 직장인들에게도 꿀 위치니 기대해주세요.<br/>
        그럼, 우주에서 즐거운 추억 많이 만들어가세요! :)<br/>
        #꼭한번_살아보고싶은 #2030청춘들의 #셰어하우스우주`}<br/>

        우주 6호점의 특징은 한 마디로 #가족 #패밀리쉽 #정 이 넘치는 곳이에요. 3개층으로 이뤄진 공간에서 남자셋 여자셋이 가능한 공간이랍니다!<br/>
        총 10명의 우주인이 함께 모여있는 이곳은 개별 공간으로 잘 구분이 되어있어 따로 또 같이가 충분히 이뤄질 수 있답니다. 우주인들만의 전용 테라스와 마당도 있고요, 함께 요리를 해먹고 또 함께 놀러 다니기에도 좋답니다.<br/> 
        위아래로 계단을 오가며 쌓이는 우주인들간의 정이 이 집의 매력 포인트! <br/>
        요즘 뜨고 있는 {`<북서울꿈의 숲>`} 14번 출구랑 가까울뿐만 아니라, 동네 자체가 조용하고 아기자기 하답니다. 평일, 주말 저녁에는 인근 동네주민들도 이 공원을 자주 이용하신다고 하니, 우주인들끼리 함께 공원 산책도 하고 운동하기에도 좋은 장소입니다. <br/>
        미아사거리역 주변으로는, 이마트, 롯데백화점, 현대백화점, 방천골목시장, 숭인시장이 가깝고요, 대학으로는 대중교통 이용시, 동덕여대, 광운대, 인덕대, 경희대, 외대, 고려대와 가깝습니다. <br/>
        1, 4, 6호선을 이용하시는 직장인들에게도 꿀 위치니 기대해주세요.<br/>
        그럼, 우주에서 즐거운 추억 많이 만들어가세요! :)<br/>
        #꼭한번_살아보고싶은 #2030청춘들의 #셰어하우스우주`}<br/>
    </div>
    </>
    }
    {currentSection.get() === 2 &&
    <div id='room-intro' style={{marginTop: '20px'}}>
        - 운영관리비와 선불공과금은 매월 별도로 납부해주셔야 합니다. [자세히 알아보기]<br/>
        - 투어신청은 최대 두 지점까지만 가능합니다.<br/>
        - 투어신청은 입주가능일 45일 전부터 가능합니다.<br/>
        - 입주대기를 해주시면 해당 방 신청이 가능해졌을 때 SMS 알림이 갑니다.<br/>
    </div>
    }
    {currentSection.get() === 3&& <>
    <div id='room-detail' style={{marginTop: '20px'}}>
        지하철<br/>
        미아사거리역 - 4호선<br/>
        대학교<br/>
        광운대학교<br/>
        편의시설<br/>
        송종동 주민센터<br/>
        버스<br/>
        정류장 정보 : 8번지 슈퍼 정류장<br/>
        마트/편의점<br/>
        하나로마트<br/>
        병원/약국<br/>
        서울대병원인접 의료시설다수<br/>
    </div>
    <div style={{marginTop: '20px'}}>
    지하철<br/>
        미아사거리역 - 4호선<br/>
        대학교<br/>
        광운대학교<br/>
        편의시설<br/>
        송종동 주민센터<br/>
        버스<br/>
        정류장 정보 : 8번지 슈퍼 정류장<br/>
        마트/편의점<br/>
        하나로마트<br/>
        병원/약국<br/>
    </div>
    <div style={{marginTop: '20px'}}>
    지하철<br/>
        미아사거리역 - 4호선<br/>
        대학교<br/>
        광운대학교<br/>
        편의시설<br/>
        송종동 주민센터<br/>
        버스<br/>
        정류장 정보 : 8번지 슈퍼 정류장<br/>
        마트/편의점<br/>
        하나로마트<br/>
        병원/약국<br/>
    </div>
    <div style={{marginTop: '20px'}}>
    지하철<br/>
        미아사거리역 - 4호선<br/>
        대학교<br/>
        광운대학교<br/>
        편의시설<br/>
        송종동 주민센터<br/>
        버스<br/>
        정류장 정보 : 8번지 슈퍼 정류장<br/>
        마트/편의점<br/>
        하나로마트<br/>
        병원/약국<br/>
    </div>
    <div style={{marginTop: '20px'}}>
    지하철<br/>
        미아사거리역 - 4호선<br/>
        대학교<br/>
        광운대학교<br/>
        편의시설<br/>
        송종동 주민센터<br/>
        버스<br/>
        정류장 정보 : 8번지 슈퍼 정류장<br/>
        마트/편의점<br/>
        하나로마트<br/>
        병원/약국<br/>
    </div>
    </>
    }
    {currentSection.get() === 4 && <>
    <div id='faq' style={{marginTop: '20px'}}>
        1. 입주신청서를 제출했습니다. 이후 과정은 어떻게 되나요?<br/>
        2. 보증금과 월세 외에 다른 비용에는 무엇이 있나요?<br/>
        3. 공과금은 어떻게 처리하나요?<br/>
        4. 공과금을 왜 '선불 공과금'이라고 부르나요? 이게 왜 필요하죠?<br/>
        5. 선불 공과금과 실제 사용금액에 차이가 나면 어떻게 하나요?<br/>
        6. 공과금은 어떤 절차로 납부하나요?<br/>
        7. 보증금은 언제 반환되나요?<br/>
        8. 퇴실 절차는 어떻게 되나요?<br/>
        9. 입주 시 지켜야 할 규정이 있나요?<br/>
        10. 입주 후 추가 수납공간 및 기타 시설이 필요할 경우 어떻게 하나요?<br/>
        11. 입주 시 꼭 챙겨야 하는 물건이 있나요?<br/>
        12. 반려동물/애완동물을 키울 수 있나요?<br/>
    </div>
    <div style={{marginTop: '20px'}}>
        1. 입주신청서를 제출했습니다. 이후 과정은 어떻게 되나요?<br/>
        2. 보증금과 월세 외에 다른 비용에는 무엇이 있나요?<br/>
        3. 공과금은 어떻게 처리하나요?<br/>
        4. 공과금을 왜 '선불 공과금'이라고 부르나요? 이게 왜 필요하죠?<br/>
        5. 선불 공과금과 실제 사용금액에 차이가 나면 어떻게 하나요?<br/>
        6. 공과금은 어떤 절차로 납부하나요?<br/>
        7. 보증금은 언제 반환되나요?<br/>
        8. 퇴실 절차는 어떻게 되나요?<br/>
        9. 입주 시 지켜야 할 규정이 있나요?<br/>
        10. 입주 후 추가 수납공간 및 기타 시설이 필요할 경우 어떻게 하나요?<br/>
        11. 입주 시 꼭 챙겨야 하는 물건이 있나요?<br/>
        12. 반려동물/애완동물을 키울 수 있나요?<br/>
    </div>
    </>
    }
</div>)
}
}

export default inject('HomeStore')(observer(HouseDetail));