import React from 'react';
import './collectionitem.styles.scss';
import {addItem} from '../../Redux/Cart/cart.actions';
import {connect} from 'react-redux';
import DButton from '../DButton/dbutton.component';
export const CollectionItem = ({item,addItem}) => {
    const {name,price,imageUrl}=item;
    return (
    <div class="collection-item">
        <div className="image" style={{backgroundImage:`url(${imageUrl})`}}></div>
        <div className='collection-footer'>
<span className='name'>{name}</span>
            <span className='price'>{price} </span>
        </div>
        <DButton onClick={()=> addItem(item)}   inverted>Add</DButton>
    </div> 
    )
}

const mapDispatchToProps = dispatch => ({
    addItem : item => dispatch(addItem(item))
});
export default connect(null,mapDispatchToProps)(CollectionItem);