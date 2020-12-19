import React,{lazy, useEffect,Suspense} from 'react'
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from './Redux/UserReducer/user.selector';
import Spinner from '../src/components/Spinner/spinner.component';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary/error.component';
import {Route,Redirect} from 'react-router-dom';
import Header from './components/Header/header.component';
import {checkUserSession} from './Redux/UserReducer/user.actions';
import {connect} from 'react-redux';
const Homepage = lazy(()=> import('./pages/homepage/homepage.component'));
const ShopPage = lazy(()=>import('./pages/shop-page/shoppage.component'));
const LogIn =  lazy(()=>import('./pages/LogIn/login.component'));
const Checkout =  lazy(()=>import('./pages/Checkout/checkout.component'));
const Search = lazy(()=> import('./components/Search/search.component'));
const App = ({checkUserSession,currentUser}) => {
  useEffect(()=>{
    checkUserSession();
  },[checkUserSession])
 
    return (
      <div className="App">
        <ErrorBoundary>
        <Header></Header>
        <Suspense fallback={<Spinner></Spinner>}>
        <Route exact={true} path='/' component={Homepage}></Route>
        
        <Route  path='/shop' component={ShopPage} />
        <Route exact path='/search' component={Search}></Route>
        <Route exact path='/checkout' component={Checkout}></Route>
        <Route exact path='/signin' render={()=>currentUser?
      ( <Redirect to='/'></Redirect> ) : <LogIn></LogIn>  
      } />
     
    
        </Suspense>
        </ErrorBoundary>
      </div>
    );
  
}
const mapToStateProps =  createStructuredSelector({
  currentUser:selectCurrentUser,
//  collectionsArray : selectCollectionsForPreview
});
const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});
export default connect(mapToStateProps,mapDispatchToProps)(App);
