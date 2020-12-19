import {takeLatest,call,put} from 'redux-saga/effects';
import ShopActionTypes from './shop.types';
import {fetchCollFail,fetchCollSuccess} from './shop.actions';
import {firestore,CollectionSnapToMap} from '../../FireBase/firebase.utils';
export function* fetchCollAsync () {
    try{
        const collRef = firestore.collection('collections');
        const snap = yield collRef.get();
        const CollMap = yield call(CollectionSnapToMap,snap);
        yield put(fetchCollSuccess(CollMap));
    }
    catch(error){
        yield put(fetchCollFail(error.message));
    }
}

export function* fetchCollStart(){
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START,fetchCollAsync);
}

