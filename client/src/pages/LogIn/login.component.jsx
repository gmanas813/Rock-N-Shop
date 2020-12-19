import React from 'react';
import './login.styles.scss';
import SignIn from '../../components/SignIn/signin.component';
import SignUp from '../../components/SignUp/signup.component';
 
const LogIn = () => {
    
  return(   <div className='sign-in-and-sign-up'>
        <SignIn></SignIn>
        <SignUp></SignUp>
    </div>
  )
}
export default LogIn;