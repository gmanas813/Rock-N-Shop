
import ShopActionTypes from './shop.types';
const InitialState = {
    collections : null,
    isFetch: false,
    errorMsg: undefined
};

const shopReducer = (state=InitialState,action) => {
    switch(action.type){
       case ShopActionTypes.FETCH_COLLECTIONS_START:
          return {
              ...state,
              isFetch:true
           };
        case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                isFetch:false,
                collections:action.payload
            };

        case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
            return{
                ...state,
                isFetch:false,
                errorMsg:action.payload
            };
        default: return state;
    }
};

export default shopReducer;