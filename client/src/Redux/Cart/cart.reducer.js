import {cartActionTypes} from './cart.types';
import {addItemToCart,removeItem} from './cart.utils';
const InitialState = {
    hidden:true,
    cartItems:[]
};

 const cartReducer = (state=InitialState,action) => {
     switch(action.type){
         case cartActionTypes.TOGGLE_CART_HIDDEN :
             return {
                 ...state,
                 hidden:!state.hidden
             };
        case cartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems:addItemToCart(state.cartItems,action.payload)

            };

        case cartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems:removeItem(state.cartItems,action.payload)
            };

        case cartActionTypes.CLEAR_ITEM_FROM_CART:
            return{
                ...state,
                cartItems:state.cartItems.filter(item => item.id !== action.payload.id )
            }; 

        case cartActionTypes.CLEAR_CART :
            return {
                ...state,
                cartItems : []
            };

        case cartActionTypes.CART_FROM_DB:
            return {
                ...state,
                cartItems : action.payload
            }; 
        default: return state; 
     }
 }
 export default cartReducer;