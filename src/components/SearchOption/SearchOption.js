import React from 'react';
import InputRange from 'react-input-range';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import ReplayIcon from '@material-ui/icons/Replay';
import DoneIcon from '@material-ui/icons/Done';

import 'react-input-range/lib/css/index.css';

import './SearchOption.scss';

const styles = {
    btnActives: {
        color: 'red'
    }
};

const SearchOption = () => <div>
    <div>
        <div className='option-title'>
            <strong>월세 범위</strong>
            &nbsp;&nbsp;
            <span>20~45만원</span>
        </div>

        <div className='option-range-container'>
            <InputRange 
                maxValue={100}
                minValue={0}
                value={{ min: 10, max: 50}}
            />
        </div>

        <div className='option-range'>
            <span>0만원</span>
            &nbsp;&nbsp;
            <span>100만원</span>
        </div>
    </div>

    <div>
        <div className='option-title'>
            <strong>성별 타입</strong>
            &nbsp;&nbsp;
            <span>중복 선택 가능</span>
        </div>
        <div>
            <Button className='option-btn' style={true ? styles.btnActives : {}}>여성전용</Button>
            <Button className='option-btn'>남성전용</Button>
            <Button className='option-btn'>남녀공용</Button>
        </div>
    </div>

    <div>
        <div className='option-title'>
            <strong>주거 유형</strong>
            &nbsp;&nbsp;
            <span>중복 선택 가능</span>
        </div>
        <div>
            <Button className='option-btn'>아파트</Button>
            <Button className='option-btn'>단독주택</Button>
            <Button className='option-btn'>빌라</Button>
            <Button className='option-btn'>기타</Button>
        </div>
    </div>

    <div>
        <div className='option-title'>
            <strong>룸 형태</strong>
            &nbsp;&nbsp;
            <span>중복 선택 가능</span>
        </div>
        <div>
            <Button className='option-btn'>1인실</Button>
            <Button className='option-btn'>2인실</Button>
            <Button className='option-btn'>3인실</Button>
        </div>
    </div>
    <div>
        <div className='option-title'>
            <strong>입주예정일</strong>
        </div>

        <TextField
            type="date"
            defaultValue="YYYY-MM-DD"
            InputLabelProps={{
            shrink: true,
            }}
        />
    </div>
    <div className='option-submit'>
        <Button className='option-reload-btn'>
            <ReplayIcon />
            <span>초기화</span>
        </Button>
        <Button className='option-search-btn'>
            <DoneIcon />
            <span>적용하기</span>
        </Button>
    </div>
</div>

export default SearchOption;