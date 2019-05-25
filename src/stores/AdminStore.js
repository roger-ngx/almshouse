import firebase from '../config/Firebase';
import { decorate, observable, action, runInAction } from 'mobx';
import { set, forEach } from 'lodash';

class AdminStore {
    uploadedImageUrls = [];
    waitingRooms = [{}];
    roomInfo = {location: {}};

    setWaitingRoomImages = (index, images) => set(this.waitingRooms, `${index}.images`, Array.from(images));

    setWaitingRoomType = (index, type) => {
        set(this.waitingRooms, `${index}.type`, type);
        console.log(this.waitingRooms);
    }

    deleteWaitingRoomImages = (index, subIndex) => {
        this.waitingRooms[index].splice(subIndex, 1);
    }

    onHandleRoomInfoChanged = e => {
        const prop = e.target.name;
        set(this.roomInfo, `${prop}`, e.target.value);
    }

    addWaitingImageType = () => this.waitingRooms.push([]);

    saveRoomToFirebase = async () => {
        try{
            const roomRef = firebase.firestore().collection('houses').doc(this.roomInfo.name);
            await roomRef.set(this.roomInfo, {merge: true})

            this.uploadImagesToStorage();
        }catch(e){
            console.log('saveRoomToFirebase', e);
        }
    }

    uploadImagesToStorage = async() => {
        const storageRef = firebase.storage().ref();
        const roomRef = firebase.firestore().collection('houses').doc(this.roomInfo.name);

        forEach(this.waitingRooms, images => {
            const roomType = images.type;
            forEach(images.images, async(image) => {
                const imageRef = storageRef.child(`almshouses/houses/${this.roomInfo.name}/${images.type}/${image.name}`);
                try{
                    const snapshot = await imageRef.put(image)
                
                    const downloadUrl = await snapshot.ref.getDownloadURL();
    
                    runInAction(()=>{
                        this.uploadedImageUrls = [downloadUrl, ...this.uploadedImageUrls];
                        image.status = 'done';
                        roomRef.update(set({}, `${roomType}`, firebase.firestore.FieldValue.arrayUnion(downloadUrl)));
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
    waitingRooms: observable,
    roomInfo: observable,
    uploadImagesToStorage: action,
    setWaitingImages: action,
    deleteWaitingImages: action,
    onHandleRoomInfoChanged: action,
    saveRoomToFirebase: action
})

export default new AdminStore();