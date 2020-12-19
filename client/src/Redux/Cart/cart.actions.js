import {cartActionTypes} from './cart.types';

export const toggleCartHidden = () => ({
    type:cartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
    type:cartActionTypes.ADD_ITEM,
    payload:item
});

export const clearItem = item => ({
    type: cartActionTypes.CLEAR_ITEM_FROM_CART,
    payload:item
});

export const removeItem = item => ({
    type : cartActionTypes.REMOVE_ITEM,
    payload:item
});

export const clearCart = () => ({
    type:cartActionTypes.CLEAR_CART,
    
})

export const cartFromDb = (cartItems) => ({
    type:cartActionTypes.CART_FROM_DB,
    payload:cartItems
});

export const updateCart = () => ({
    type:cartActionTypes.UPDATE_CART
});