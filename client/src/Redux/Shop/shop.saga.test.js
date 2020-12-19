import { takeLatest, call, put } from 'redux-saga/effects';

import {
  firestore,
 CollectionSnapToMap 
} from '../../firebase/firebase.utils';

import {
 fetchCollSuccess,
 fetchCollFail 
} from './shop.actions';

import ShopActionTypes from './shop.types';

import {  fetchCollAsync ,fetchCollStart } from './shop.saga';

describe('fetch collections start saga', () => {
  it('should trigger on FETCH_COLLECTIONS_START', () => {
    const generator = fetchCollStart();
    expect(generator.next().value).toEqual(
      takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollAsync)
    );
  });
});

describe('fetch collections async saga', () => {
  const generator = fetchCollAsync();

  it('should call firestore collection ', () => {
    const getCollection = jest.spyOn(firestore, 'collection');
    generator.next();
    expect(getCollection).toHaveBeenCalled();
  });

  it('should call convertCollectionsSnapshot saga ', () => {
    const mockSnapshot = {};
    expect(generator.next(mockSnapshot).value).toEqual(
      call(CollectionSnapToMap, mockSnapshot)
    );
  });

  it('should fire fetchCollectionsSuccess if collectionsMap is succesful', () => {
    const mockCollectionsMap = {
      hats: { id: 1 }
    };

    expect(generator.next(mockCollectionsMap).value).toEqual(
      put(fetchCollSuccess(mockCollectionsMap))
    );
  });

  
});