import { takeLatest, put, call } from 'redux-saga/effects';

import {UserActionTypes} from './user.types';

import {
  signInSuccess,
  signInFail,
  signOutSuccess,
  signOutFail,
  signUpSuccess,
  signUpFail
} from './user.actions';

import {
  auth,
 provider as googleProvider,
 createProfile,
  getCurrentUser
} from '../../firebase/firebase.utils';

import {
  checkAuth,
  signInGoogle,
  signInEmail,
  isUserAuth,
  signout,
  signup,
  
  signInGoogleStart,
  signInEmailStart,
  onCheckUserSession,
  onSignOutStart,
  onSignUpStart
} from './user.saga';


describe('on signup start saga', () => {
  it('should trigger on SIGN_UP_START', () => {
    const generator = onSignUpStart();
    expect(generator.next().value).toEqual(
      takeLatest(UserActionTypes.SIGN_UP_START, signup)
    );
  });
});

describe('on signout start saga', () => {
  it('should trigger on SIGN_UP_START', () => {
    const generator = onSignOutStart();
    expect(generator.next().value).toEqual(
      takeLatest(UserActionTypes.SIGN_OUT_START, signout)
    );
  });
});

describe('on check user session saga', () => {
  it('should trigger on CHECK_USER_SESSION', () => {
    const generator = onCheckUserSession();
    expect(generator.next().value).toEqual(
      takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuth)
    );
  });
});

describe('on email sign in start saga', () => {
  it('should trigger on EMAIL_SIGN_IN_START', () => {
    const generator = signInEmailStart();
    expect(generator.next().value).toEqual(
      takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInEmail)
    );
  });
});

describe('on google sign in start saga', () => {
  it('should trigger on GOOGLE_SIGN_IN_START', () => {
    const generator = signInGoogleStart();
    expect(generator.next().value).toEqual(
      takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInGoogle)
    );
  });
});


describe('on sign up saga', () => {
  const mockEmail = 'cindy@gmail.com';
  const mockPassword = 'test123';
  const mockDisplayName = 'cindy';

  const mockAction = {
    payload: {
      email: mockEmail,
      password: mockPassword,
      displayName: mockDisplayName
    }
  };

  const generator = signup(mockAction);

  it('should call auth.createUserWithEmailAndPassword', () => {
    const createUserWithEmailAndPassword = jest.spyOn(
      auth,
      'createUserWithEmailAndPassword'
    );
    generator.next();
    expect(createUserWithEmailAndPassword).toHaveBeenCalled();
  });
});

describe('on sign out saga', () => {
  const generator = signout();

  it('should call auth.signOut', () => {
    const expectSignOut = jest.spyOn(auth, 'signOut');
    generator.next();
    expect(expectSignOut).toHaveBeenCalled();
  });

  it('should call signOutSuccess', () => {
    expect(generator.next().value).toEqual(put(signOutSuccess()));
  });

  it('should call signOutFailure on error', () => {
    const newGenerator = signout();
    newGenerator.next();
    expect(newGenerator.throw('error').value).toEqual(
      put(signOutFail('error'))
    );
  });
});

describe('is user authenticated saga', () => {
  const generator = isUserAuth();

  it('should call getCurrentUser', () => {
    expect(generator.next().value).toEqual(getCurrentUser());
  });

  it('should call getSnapshotFromUserAuth if userAuth exists', () => {
    const mockUserAuth = { uid: '123da' };
    expect(generator.next(mockUserAuth).value).toEqual(
      checkAuth(mockUserAuth)
    );
  });

  it('should call signInFailure on error', () => {
    const newGenerator = isUserAuth();
    newGenerator.next();
    expect(newGenerator.throw('error').value).toEqual(
      put(signInFail('error'))
    );
  });
});

describe('get snapshot from userAuth', () => {
  const mockUserAuth = {};
  const mockAdditionalData = {};
  const generator = checkAuth(mockUserAuth, mockAdditionalData);

  expect(generator.next().value).toEqual(
    call(createProfile, mockUserAuth, mockAdditionalData)
  );
});