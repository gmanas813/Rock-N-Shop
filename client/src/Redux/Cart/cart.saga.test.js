import { takeLatest, put } from 'redux-saga/effects';

import {UserActionTypes} from '../UserReducer/user.types';
import { clearCart } from './cart.actions';
import { clearOnSignout, onSignOutSuccess } from './cart.saga';

describe('on signout success saga', () => {
  it('should trigger on SIGN_OUT_SUCCESS', async () => {
    const generator = onSignOutSuccess();
    expect(generator.next().value).toEqual(
      takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearOnSignout)
    );
  });
});

describe('clear cart on signout saga', () => {
  it('should fire clearCart', () => {
    const generator = clearOnSignout();
    expect(generator.next().value).toEqual(put(clearCart()));
  });
});