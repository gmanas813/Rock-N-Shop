import React from 'react';

import {connect} from 'react-redux';
import './collection.styles.scss';
import {selectColl} from '../../Redux/Shop/shop.selector';
import CollectionItem from '../../components/CollectionItem/collectionitem.component';
const CollectionPage = ({collection}) => {
 const {title,items} = collection;
 return(       <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {items.map(item => (<CollectionItem key={item.id} item={item}></CollectionItem>))}
            </div>
    </div>
)
};

const mapStateToProps = (state,ownProps) => ({
    collection : selectColl(ownProps.match.params.collId)(state)
});

export default connect(mapStateToProps)(CollectionPage);