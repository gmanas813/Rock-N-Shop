import ShopActionTypes from './shop.types';
import {firestore,CollectionSnapToMap} from '../../FireBase/firebase.utils';
export const fetchCollToStart = () => ({
    type:ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollStartAsync = () => {
    return dispatch => {
        const collRef = firestore.collection('collections');
        dispatch(fetchCollToStart);
     collRef.get().then(snap => {
       const CollMap = CollectionSnapToMap(snap);
       dispatch(fetchCollSuccess(CollMap));
    }).catch(error => dispatch(fetchCollFail(error.message)));
}
};

export const fetchCollSuccess = collectionsMap => ({
    type:ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload:collectionsMap
});

export const fetchCollFail = error => ({
    type:ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload:error
});