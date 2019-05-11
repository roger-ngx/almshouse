import { action, decorate } from "mobx";
import firebase from '../config/Firebase';
import { forEach } from 'lodash';

class MapStore {
    onMarkerClicked = async(key, childProps) => {
        console.log(childProps);
        const docs = await firebase.firestore().collection('thanh').get();
        forEach(docs.docs, doc => console.log(doc.data()));
    }
}

decorate(MapStore, {
    onMarkerClicked: action
});

export default new MapStore();