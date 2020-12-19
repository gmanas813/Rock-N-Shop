import ShopActionTypes from './shop.types';
import shopReducer from './shop.reducer';

const initialState = {
  collections: null,
  isFetch: false,
  errorMsg: undefined
};

describe('shopReducer', () => {
  it('should return initial state', () => {
    expect(shopReducer(undefined, {})).toEqual(initialState);
  });

  it('should set isFetching to true if fetchingCollectionsStart action', () => {
    expect(
      shopReducer(initialState, {
        type: ShopActionTypes.FETCH_COLLECTIONS_START
      }).isFetch
    ).toBe(true);
  });

  it('should set isFetching to false and collections to payload if fetchingCollectionsSuccess', () => {
    const mockItems = [{ id: 1 }, { id: 2 }];
    expect(
      shopReducer(initialState, {
        type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
        payload: mockItems
      })
    ).toEqual({
      ...initialState,
      isFetch: false,
      collections: mockItems
    });
  });

  it('should set isFetching to false and errorMessage to payload if fetchingCollectionsFailure', () => {
    expect(
      shopReducer(initialState, {
        type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
        payload: 'error'
      })
    ).toEqual({
      ...initialState,
      isFetch: false,
      errorMsg: 'error'
    });
  });
});