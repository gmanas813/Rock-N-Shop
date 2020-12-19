import {takeLatest,put, call,all} from 'redux-saga/effects';
import {createProfile,auth,provider,getCurrentUser} from '../../FireBase/firebase.utils';
import {signInFail,signInSuccess,signOutSuccess,signOutFail,signUpFail, signUpSuccess} from './user.actions';
import {UserActionTypes} from './user.types';
export function* checkAuth (user,addDetails) {
    try{
        const userRef= yield call(createProfile,user,addDetails);
        const usersnap = yield userRef.get();
        yield put(signInSuccess({id:usersnap.id,...usersnap.data()}));
    }
    catch(err){
        yield put(signInFail(err));
    }
}

export function* signInGoogle(){
    try{
        const {user}=yield auth.signInWithPopup(provider);
        yield checkAuth(user);
    }
    catch(err){
        yield put(signInFail(err));
    }
}

export function* signInGoogleStart () {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START,signInGoogle);
}

export function* signInEmail({payload:{email,password}}) {
    try{
        const {user}=yield auth.signInWithEmailAndPassword(email,password);
        yield checkAuth(user);
    }
    catch(err){
        yield put(signInFail(err));
    }
}

export function* signInEmailStart (){
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START,signInEmail);
}

export function* isUserAuth () {
    try{
        const userAuth = yield getCurrentUser();
        if(!userAuth) return;
        yield checkAuth(userAuth);
    }
    catch(err){
        yield put(signInFail(err));
    }
}

export function* onCheckUserSession () {
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION,isUserAuth);
}

export function* signout () {
    try{
        yield auth.signOut();
        yield put(signOutSuccess());
    }
    catch(err){
        yield put(signOutFail(err));
    }
}

export function* onSignOutStart () {
    yield takeLatest(UserActionTypes.SIGN_OUT_START,signout);
}

export function* signup ({payload:{email,password}}) {
    try{
        const {user}=yield auth.createUserWithEmailAndPassword(email,password);
        const userRef= yield call(createProfile,user);
        const usersnap = yield userRef.get();
        yield put(signUpSuccess({id:usersnap.id,...usersnap.data()}));
    }
    catch(err){
        yield put(signUpFail(err));
    }
}

export function* onSignUpStart () {
    yield takeLatest(UserActionTypes.SIGN_UP_START,signup);
}

export function* userSagas () {
    yield all([call(signInGoogleStart),call(signInEmailStart),call(onCheckUserSession),call(onSignOutStart),call(onSignUpStart)]);
}