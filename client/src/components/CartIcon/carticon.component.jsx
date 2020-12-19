import React from 'react';
import {ReactComponent as ShopIcon} from '../../assets/shopic.svg';
import {toggleCartHidden} from '../../Redux/Cart/cart.actions';
import './carticon.styles.scss';
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';
import {selectCartItemsCount} from '../../Redux/Cart/cart.selectors';
const CartIcon = ({toggleCartHidden,itemCount}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShopIcon className='shopping-icon'></ShopIcon>
<span className='item-count'>{itemCount}</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
    itemCount : selectCartItemsCount
});

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);