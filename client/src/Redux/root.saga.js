import {all,call} from 'redux-saga/effects';
import {fetchCollStart} from './Shop/shop.saga';
import {userSagas} from './UserReducer/user.saga';
import {cartSagas} from './Cart/cart.saga';
export default function* rootSaga(){
    yield all([call(fetchCollStart),call(userSagas),call(cartSagas)]);
}