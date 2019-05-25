import { action, decorate, observable } from "mobx";
import firebase from '../config/Firebase';
import { forEach } from 'lodash';

class MapStore {
    mapProps = {};

    onMarkerClicked = async(key, childProps) => {
        console.log(childProps);
        const docs = await firebase.firestore().collection('thanh').get();
        forEach(docs.docs, doc => console.log(doc.data()));
    }

    onLoadRooms = async () => {
        const houseDocs = await firebase.firestore().collection('houses').get();

        forEach(houseDocs.docs, doc => {
            console.log(doc.data());
        });
    }

    onChange = e => this.mapProps = e;
}

decorate(MapStore, {
    mapProps: observable,
    onMarkerClicked: action,
    onChange: action
});

export default new MapStore();