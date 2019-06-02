import firebase from '../config/Firebase';
import { decorate, observable, action, runInAction } from 'mobx';
import { set, forEach, findIndex, isObject } from 'lodash';

class AdminStore {
    uploadedImageUrls = [];
    rooms = [{}];
    houseInfo = {location: {}};

    setWaitingRoomImages = (index, images) => set(this.rooms, `${index}.images`, Array.from(images));

    setWaitingRoomType = (index, type) => set(this.rooms, `${index}.type`, type);

    setHouseInfo = house => {
        this.houseInfo = house;
        this.rooms.length = 0;
        forEach(this.houseInfo.rooms, (roomInfo, roomType) => {
            const room = {...roomInfo, type: roomType};
            this.rooms.push(room);
        });
    }
    
    deleteWaitingRoomImages = (index, subIndex) => this.rooms[index].splice(subIndex, 1);

    onHandleRoomInfoChanged = e => {
        const target = e.target;
        set(this.houseInfo, `${target.name}`, target.value);
    }

    addWaitingImageType = () => this.rooms.push({});

    saveRoomToFirebase = async () => {
        try{
            const roomRef = firebase.firestore().collection('houses').doc(this.houseInfo.name);
            await roomRef.set(this.houseInfo, {merge: true})

            this.uploadImagesToStorage();
        }catch(e){
            console.log('saveRoomToFirebase', e);
        }
    }

    clearHouseInfo = () => {
        this.houseInfo = {location: {}};
        this.rooms = [{}];
    }

    removeRoomImage = (roomType, removeIndex) => {
        const roomIndex = findIndex(this.rooms, room => room.type === roomType);
        this.rooms[roomIndex].images.splice(removeIndex, 1);
    }

    uploadImagesToStorage = async() => {
        const storageRef = firebase.storage().ref();
        const roomRef = firebase.firestore().collection('houses').doc(this.houseInfo.name);

        forEach(this.rooms, images => {
            const roomType = images.type;
            forEach(images.images, async(image) => {
                if(!isObject(image)) {
                    // edit mode: this image was already uploaded to Firebase
                    return;
                }
                const imageRef = storageRef.child(`almshouses/houses/${this.houseInfo.name}/${images.type}/${image.name}`);
                try{
                    const snapshot = await imageRef.put(image)
                
                    const downloadUrl = await snapshot.ref.getDownloadURL();
    
                    runInAction(()=>{
                        this.uploadedImageUrls = [downloadUrl, ...this.uploadedImageUrls];
                        roomRef.set(set({updatedAt: firebase.firestore.FieldValue.serverTimestamp()}, `rooms.${roomType}.images`, firebase.firestore.FieldValue.arrayUnion(downloadUrl)), { merge: true});
                    });
    
                }catch(err){
                    console.log(err);
                }
            });
        });
    }
}

decorate(AdminStore, {
    uploadedImageUrls: observable,
    rooms: observable,
    houseInfo: observable,
    uploadImagesToStorage: action,
    setWaitingImages: action,
    deleteWaitingImages: action,
    onHandleRoomInfoChanged: action,
    saveRoomToFirebase: action
})

export default new AdminStore();