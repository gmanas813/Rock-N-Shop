import React from 'react';
import {connect} from 'react-redux';
import './cartdrop.styles.scss';
import DButton from '../DButton/dbutton.component';
import CartItem from '../CartItem/cartitem.component';
import {createStructuredSelector} from 'reselect';
import {selectCartItems, selectCartItemsCount} from '../../Redux/Cart/cart.selectors';
import {toggleCartHidden} from '../../Redux/Cart/cart.actions';
import {withRouter} from 'react-router-dom';
const CartDrop = ({cartItems,history,dispatch}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length ? (
                cartItems.map( item => (<CartItem key={item.id} item={item}></CartItem>) ))
                : 
                (
                    <span className='empty-message'>Add Items First!</span>
                )
            }
        </div>
        <DButton
        style={{padding:0}}
        onClick={()=> {history.push('/checkout'); dispatch(toggleCartHidden())} } >Go to Checkout</DButton>
    </div>
);

const mapStateToProps =  createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDrop));