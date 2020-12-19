import React from 'react';
import './collectionoverview.styles.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCollectionsForPreview} from '../../Redux/Shop/shop.selector';
import CollectionPreview from '../CollectionPreview/collectionpreview.component';

const CollectionOverview = ({collections}) => (
    <div className='collections-overview'>
          {collections.map(({id,...collectionsprops})=>(
          <CollectionPreview key={id} {...collectionsprops}>
          </CollectionPreview>
          ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionOverview);






