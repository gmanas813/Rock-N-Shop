
import React from 'react';
import {Link} from 'react-router-dom';
import {auth} from '../../FireBase/firebase.utils';
import  Logo from '../../assets/Logo.png'
import './header.styles.scss';
import {connect} from 'react-redux';
import CartIcon from '../CartIcon/carticon.component';
import CartDrop from '../CartDropdown/cartdrop.component';
import { createStructuredSelector } from 'reselect';
import {selectCurrentUser} from '../../Redux/UserReducer/user.selector';
import { selectCartHidden } from '../../Redux/Cart/cart.selectors';
import {signOutStart} from '../../Redux/UserReducer/user.actions';
const Header = ({currentUser,hidden,signOutStart}) => (
    <div className="header">
        <Link className="logo-container" to='/'>
           <img src={Logo} className='logo'></img>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                BUY
            </Link>
            {
                currentUser?(
            <Link className='option' onClick={ signOutStart   }> Sign Out </Link>)
                :(
                <Link className='option' to='/signin'>Sign In</Link>)

            }
            <Link className='option' to='/search'>
                Search
            </Link>
            <CartIcon></CartIcon>
        </div>
        {
            hidden? null : <CartDrop></CartDrop>
        }
       
    </div>
)
const mapStateToProps = createStructuredSelector({
    currentUser:selectCurrentUser,
    hidden:selectCartHidden
});

const mapDispatchToProps = dispatch => ({
    signOutStart : () => dispatch(signOutStart())
})

export default connect(mapStateToProps,mapDispatchToProps)(Header);