import firebase from '../config/Firebase';
import { decorate, observable, action, runInAction } from 'mobx';
import { set, forEach } from 'lodash';

class AdminStore {
    uploadedImageUrls = [];
    waitingImages = [[]];
    roomInfo = {location: {}};

    setWaitingImages = (index, images) => set(this.waitingImages, `[${index}]`, Array.from(images));

    deleteWaitingImages = (index, subIndex) => {
        this.waitingImages[index].splice(subIndex, 1);
    }

    onHandleRoomInfoChanged = e => {
        const prop = e.target.name;
        set(this.roomInfo, `${prop}`, e.target.value);
    }

    addWaitingImageType = () => this.waitingImages.push([]);

    uploadImagesToStorage = (images) => {
        const storageRef = firebase.storage().ref();

        forEach(images, async (image) => {
            const imageRef = storageRef.child(`images/${image.name}`);
            try{
                const snapshot = await imageRef.put(image)
            
                const downloadUrl = await snapshot.ref.getDownloadURL();

                runInAction(()=>{
                    this.uploadedImageUrls = [downloadUrl, ...this.uploadedImageUrls];
                    console.log(this.uploadedImageUrls);
                });

            }catch(err){
                console.log(err);
            }
        });
    }
}

decorate(AdminStore, {
    uploadedImageUrls: observable,
    waitingImages: observable,
    roomInfo: observable,
    uploadImagesToStorage: action,
    setWaitingImages: action,
    deleteWaitingImages: action,
    onHandleRoomInfoChanged: action
})

export default new AdminStore();