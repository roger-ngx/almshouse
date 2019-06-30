import React from 'react';
import { inject } from 'mobx-react';
import { observer } from 'mobx-react-lite';
import ViewModule from '@material-ui/icons/ViewModule';
import IconButton from '@material-ui/core/IconButton';
import './MobileHouseStatus.scss';

const MobileHouseStatus = ({HomeStore}) => {
    return (<div className='m-status-content'>
        <h2><strong>목록펼쳐보기</strong></h2>
        <span><h2>우주운영<strong>75</strong></h2></span>
        <span><h2>개별운영<strong>72</strong></h2></span>
        <div  className='m-status-btn'>
            <IconButton onClick={ HomeStore.setShowingHouseList.bind(null, !HomeStore.isShowHouseList) }>
                <ViewModule/>
            </IconButton>
        </div>
    </div>)
}

export default inject('HomeStore')(observer(MobileHouseStatus));