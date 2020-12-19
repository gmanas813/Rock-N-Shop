import React,{useState} from 'react';
import {connect} from 'react-redux';
import './signin.styles.scss';
import FormInput from '../FormInput/forminput.component';
import DButton from '../DButton/dbutton.component';

import {emailSignInStart,googleSignInStart} from '../../Redux/UserReducer/user.actions';
const SignIn = ({emailSignInStart,googleSignInStart}) => {
   const[user,setUser]=useState({email:'',password:''});
  const{email,password}=user;
 const onnsubmit = async event => {
    event.preventDefault();
    emailSignInStart(email,password);
}

 const handleechange = (event) => {
     const {value,name} = event.target;
     setUser({...user,[name]:value});
 } 

        return(
            <div className='sign-in'>
                <h1>Sign In to get an amazing shopping experience.</h1>
                <form onSubmit={onnsubmit}>
                    <FormInput name='email' type='email' label='E-Mail' handleChange={handleechange} value={email} required></FormInput> 
                    <FormInput name='password' type='password' label='Password' handleChange={handleechange} value={password} required></FormInput> 
                    <DButton type='submit'>Submit It</DButton>
                    <DButton type='button' onClick={googleSignInStart} google  >
                        {''} Sign In with Google
                    </DButton>
                </form>
            </div>
        )
    }


const mapDispatchToProps = dispatch => ({
    googleSignInStart : () => dispatch(googleSignInStart()),
    emailSignInStart : (email,password) => dispatch(emailSignInStart({email,password}))
});

export default connect(null,mapDispatchToProps)(SignIn);