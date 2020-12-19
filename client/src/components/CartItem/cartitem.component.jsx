import React from 'react';
import './cartitem.styles.scss';

const CartItem = ({item:{imageUrl,name,price,quantity}}) => (
    <div className='cart-item'>
        <img src={imageUrl}></img>
        <div className='item-details'>
<span className='name'>{name}</span>
<span>{quantity} X Rs {price}</span>

        </div>
    </div>
);

export default React.memo(CartItem);
