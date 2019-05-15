import firebase from '../config/Firebase';

class AdminStore {
    uploadImagesToStorage = (image) => {
        const storageRef = firebase.storage().ref();
        const imageRef = storageRef.child(`images/${image.name}`);

        imageRef.put(image)
        .then(snapshot => console.log(snapshot))
        .catch(err => console.log(err));
    }
}

export default new AdminStore();