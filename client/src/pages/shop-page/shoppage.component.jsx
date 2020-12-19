import React,{useEffect} from 'react';

import {Route} from 'react-router-dom';

import {fetchCollToStart} from '../../Redux/Shop/shop.actions';
import {connect} from 'react-redux';
import CollectionOverviewContainer from '../../components/CollectionOverview/collectionoverview.container';


import CollectionPageContainer from '../Collections/collection.container';




const ShopPage = ({fetchCollToStart,match}) => {

  useEffect(()=>{
    fetchCollToStart();
  })

        return (
            <div className="shop-page">
              <Route exact path={`${match.path}`} component={CollectionOverviewContainer}></Route>
              <Route  path={`${match.path}/:collId`} component={CollectionPageContainer}></Route>
            </div>
        );
        
}



const mapDispatchToProps = dispatch => ({
  fetchCollToStart : () => dispatch(fetchCollToStart())
});

export default connect(null,mapDispatchToProps)(ShopPage);

