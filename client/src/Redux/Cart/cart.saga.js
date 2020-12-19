import {takeLatest,all,call,put,select, take} from 'redux-saga/effects';

import {UserActionTypes} from '../UserReducer/user.types';
import {clearCart,cartFromDb} from './cart.actions';
import {getUserCartRef} from '../../FireBase/firebase.utils';
import {selectCurrentUser} from '../UserReducer/user.selector';
import {selectCartItems} from './cart.selectors';
import { cartActionTypes } from './cart.types';
export function* clearOnSignout() {
    yield put(clearCart());
}

export function* updateCartOnDb() {
    const curUser =yield select(selectCurrentUser);
    if(curUser!=null){
        try{
            const cartRef =yield getUserCartRef(curUser.id);
            const cartItems = yield select(selectCartItems);
            yield cartRef.update({cartItems});
        }
        catch(err){
            console.log(err);
        }
    }
}

export function* checkCartFromDb({payload:user}) {
    const cartRef = yield getUserCartRef(user.id);
    const snapCart = yield cartRef.get();
    yield put(cartFromDb(snapCart.data().cartItems));
}

export function* onSignOutSuccess () {
    console.log('Called');
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS,clearOnSignout);
}

export function* onUserSignIn () {
    yield takeLatest(UserActionTypes.SIGN_IN_SUCCESS,checkCartFromDb);
}

export function* cartChange () {
    yield takeLatest([cartActionTypes.ADD_ITEM,cartActionTypes.REMOVE_ITEM,cartActionTypes.CLEAR_ITEM_FROM_CART,cartActionTypes.CLEAR_CART],updateCartOnDb);
}

export function* cartSagas () {
    yield all([call(onSignOutSuccess),call(cartChange),call(onUserSignIn)]);
}


