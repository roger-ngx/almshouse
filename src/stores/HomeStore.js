import firebase from '../config/Firebase';
import { map } from 'lodash';
import { decorate, computed, action, observable } from 'mobx';

class HomeStore {

    houses = [];

    categoryList = [
        { mainText: '대학인근', subText: '막차 걱정 없는'},
        { mainText: '초역세권', subText: '역에서 3분'},
        { mainText: '아파트', subText: '안전하고 편리한'},
        { mainText: '직장인', subText: '5분 더 자는'},
        { mainText: '가성비 하우스', subText: '알뜰 살뜰 부자 되는'},
        { mainText: '1인실', subText: '따로, 또 같이'},
    ];

    onLoadRooms = async () => {
        const houseDocs = await firebase.firestore().collection('houses').get();

        this.houses = map(houseDocs.docs, doc => doc.data());
    }

    get locations() {
        return map(this.houses, house => ({
            id: house.name,
            lat: house.location.lat,
            lng: house.location.lng
        }));
    }
}

decorate(HomeStore, ({
    houses: observable,
    locations: computed,
    onLoadRooms: action
}))

export default (new HomeStore());