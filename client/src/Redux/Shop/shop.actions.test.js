import ShopActionTypes from './shop.types';
import {
  fetchCollToStart,
 fetchCollSuccess,
 fetchCollFail ,
 fetchCollStartAsync 
} from './shop.actions';

describe('fetchCollectionsStart action', () => {
  it('should create the fetchCollectionsStart action', () => {
    expect(fetchCollToStart().type).toEqual(
      ShopActionTypes.FETCH_COLLECTIONS_START
    );
  });
});

describe('fetchCollectionsSuccess action', () => {
  it('should create the fetchCollectionsSuccess action', () => {
    const mockCollectionsMap = {
      hats: {
        id: 1
      }
    };

    const action = fetchCollSuccess(mockCollectionsMap);

    expect(action.type).toEqual(ShopActionTypes.FETCH_COLLECTIONS_SUCCESS);
    expect(action.payload).toEqual(mockCollectionsMap);
  });
});

describe('fetchCollectionsFailure action', () => {
  it('should create the fetchCollectionsFailure action', () => {
    const action = fetchCollFail('errored');

    expect(action.type).toEqual(ShopActionTypes.FETCH_COLLECTIONS_FAILURE);
    expect(action.payload).toEqual('errored');
  });
});

describe('fetchCollectionsStartAsync action', () => {
  it('should create the fetchCollectionsStartAsync action', () => {
    const mockActionCreator = fetchCollStartAsync();
    const mockDispatch = jest.fn();
    mockActionCreator(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(fetchCollToStart);
  });
});