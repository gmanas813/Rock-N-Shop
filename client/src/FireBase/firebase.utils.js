import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
const config = {
    apiKey: "AIzaSyCE8Gaa6xumGbLR-eC3Yk2DSj83AlqNx9w",
    authDomain: "shopnrock-1ad67.firebaseapp.com",
    projectId: "shopnrock-1ad67",
    storageBucket: "shopnrock-1ad67.appspot.com",
    messagingSenderId: "381750833564",
    appId: "1:381750833564:web:f46329eb77f1c27b211859",
    measurementId: "G-MQN0NFNZCZ"
};
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const provider=new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithG = () => auth.signInWithPopup(provider);

export const getCurrentUser = () => {
    return new Promise((resolve,reject)=>{
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth);
        },reject)
    });
}

export const createProfile = async (userauth,AddData) => {
    if(!userauth) return;
    const userRef= firestore.doc(`users/${userauth.uid}`);
    const snap=await userRef.get();
    if(!snap.exists){
        const {displayName,email}= userauth;
        try {
            await userRef.set({
                displayName,
                email,
                ...AddData
            });
        }
        catch(error){
            alert("Sorry");
        }
    }
    return userRef;
};

export const addCollectionsAndDocs = async (collName,objectToAdd) => {
    const collRef=firestore.collection(collName);
    const batch=firestore.batch();
    objectToAdd.forEach(obj => {
        const newDocRef=collRef.doc();
        batch.set(newDocRef,obj);
    });
    return await batch.commit();
};

export const getUserCartRef = async userId => {
    const cartsRef = firestore.collection('carts').where('userId', '==', userId);
    const snapShot = await cartsRef.get();
  
    if (snapShot.empty) {
      const cartDocRef = firestore.collection('carts').doc();
      await cartDocRef.set({ userId, cartItems: [] });
      return cartDocRef;
    } else {
      return snapShot.docs[0].ref;
    }
  };

export const CollectionSnapToMap = collections => {
    const transformedColl = collections.docs.map(
        doc=> {
            const {title,items}= doc.data();
            return {
                routeName: encodeURI(title.toLowerCase()),
                id:doc.id,
                title,items
            };
        }
    );

    return transformedColl.reduce((acc,coll) => {acc[coll.title.toLowerCase()]=coll; return acc},{});
}

export default firebase;