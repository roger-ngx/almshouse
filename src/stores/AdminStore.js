import firebase from '../config/Firebase';
import { decorate, observable, action, runInAction } from 'mobx';
import { forEach } from 'lodash';

class AdminStore {
    uploadedImageUrls = [];

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
    uploadImagesToStorage: action
})

export default new AdminStore();