
import React from 'react';

import CollectionOverview from './collectionoverview.component';
import {createStructuredSelector} from 'reselect';
import withLoader from '../Loader/withloader.component';
import {selectCollFetch} from '../../Redux/Shop/shop.selector';
import {compose} from 'redux';
import { connect } from 'react-redux';
const mapStateToProps = createStructuredSelector({
    isLoading:selectCollFetch
});

const CollectionOverviewContainer = compose(
    connect(mapStateToProps),withLoader
)(CollectionOverview);

export default CollectionOverviewContainer;