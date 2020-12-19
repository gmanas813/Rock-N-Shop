import React from 'react';
import './checkout.styles.scss';
import {createStructuredSelector} from 'reselect'; 
import {selectCartItems,selectCartTotal} from '../../Redux/Cart/cart.selectors';
import { connect } from 'react-redux';
import {clearCart} from '../../Redux/Cart/cart.actions';
import CheckoutItem from '../../components/CheckoutItem/checkoutitem.component';
import DButton from '../../components/DButton/dbutton.component';
import StripeButton from '../../components/StripeButton/stripebutton.component';
const Checkout = ({cartItems,total,clearCart}) => (
    <div className='checkout-page'>
        <DButton onClick={()=> clearCart()}>CLEAR CART</DButton>

        <div className='checkout-header'>
            <div className='header-block'>
                <span>Item</span>
            </div>
            <div className='header-block'>
                <span>Name</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Delete from Cart</span>
            </div>
        </div>

{cartItems.map(item => <CheckoutItem id={item.id} cartItem={item}></CheckoutItem>)}
<div className='total'>{total}</div>
<StripeButton price={total}></StripeButton>
    </div>

    
);
const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems,
    total : selectCartTotal
});

const mapDispatchToProps = dispatch => ({
    clearCart : () => dispatch(clearCart())    
});

export default connect(mapStateToProps,mapDispatchToProps)(Checkout);


