import firebase from '../config/Firebase';
import { decorate, observable, action, runInAction } from 'mobx';
import { set, forEach } from 'lodash';

class AdminStore {
    uploadedImageUrls = [];
    roomsImages = [{}];
    roomInfo = {location: {}};

    setWaitingRoomImages = (index, images) => set(this.roomsImages, `${index}.images`, Array.from(images));

    setWaitingRoomType = (index, type) => {
        set(this.roomsImages, `${index}.type`, type);
        console.log(this.roomsImages);
    }

    setRoomInfo = room => this.roomInfo = room;

    deleteWaitingRoomImages = (index, subIndex) => {
        this.roomsImages[index].splice(subIndex, 1);
    }

    onHandleRoomInfoChanged = e => {
        const prop = e.target.name;
        set(this.roomInfo, `${prop}`, e.target.value);
    }

    addWaitingImageType = () => this.roomsImages.push([]);

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

        forEach(this.roomsImages, images => {
            const roomType = images.type;
            forEach(images.images, async(image) => {
                const imageRef = storageRef.child(`almshouses/houses/${this.roomInfo.name}/${images.type}/${image.name}`);
                try{
                    const snapshot = await imageRef.put(image)
                
                    const downloadUrl = await snapshot.ref.getDownloadURL();
    
                    runInAction(()=>{
                        this.uploadedImageUrls = [downloadUrl, ...this.uploadedImageUrls];
                        image.status = 'done';
                        roomRef.set(set({updatedAt: firebase.firestore.FieldValue.serverTimestamp()}, `${roomType}.images`, firebase.firestore.FieldValue.arrayUnion(downloadUrl)), { merge: true});
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
    roomsImages: observable,
    roomInfo: observable,
    uploadImagesToStorage: action,
    setWaitingImages: action,
    deleteWaitingImages: action,
    onHandleRoomInfoChanged: action,
    saveRoomToFirebase: action
})

export default new AdminStore();