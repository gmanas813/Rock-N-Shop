import React from 'react';

import './collectionpreview.styles.scss';
import CollectionItem from '../CollectionItem/collectionitem.component';
const CollectionPreview = ({title,id,items}) => (
    <div className="collection-preview">
        <h1 className='title'>{title}</h1>
        <div className='preview'>
            {items.filter((item,id)=> id<4).map( item =>(
                <CollectionItem key={item.id} item={item}>
                </CollectionItem>
            ))}
        </div>
    </div>
);
export default CollectionPreview;