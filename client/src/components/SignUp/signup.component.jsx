import React,{useState} from 'react';
import './signup.styles.scss';
import {connect} from 'react-redux';

import FormInput from '../FormInput/forminput.component';
import DButton from '../DButton/dbutton.component';
import {signUpStart} from '../../Redux/UserReducer/user.actions';
const SignUp = ({signUpStart}) => {
   const [user,setUser]=useState({displayName:'',email:'',password:'',confirmpassword:''});
   const {displayName,email,password,confirmpassword}=user;
   const handleChange = (event) => {
        const {name,value}=event.target;
        setUser({...user,[name]:value});
    }
   const handleSubmit = async event => {
        event.preventDefault();
        
        if(password!==confirmpassword){
            return;
        }
       
       signUpStart(email,password,displayName);

    }

    
        return(
            <div className='sign-up'>
                <h2 className='title'>Sign Up for our Shop</h2>
                <form onSubmit={handleSubmit}>
                <FormInput name='displayName' value={displayName} label='Name' onChange={handleChange} type='text' required></FormInput>
                <FormInput name='email' value={email} label='Email Id' onChange={handleChange} type='email' required></FormInput>
                <FormInput name='password' value={password} label='Password' onChange={handleChange} type='password' required></FormInput>
                <FormInput name='confirmpassword' value={confirmpassword} label='Confirm Password' onChange={handleChange} type='password' required></FormInput>
               
               <DButton type='submit'>Sign Up</DButton>
                </form>
              
            </div>
        )
    
}

const mapDispatchToProps = dispatch => ({
    signUpStart : (email,password,displayName) => dispatch(signUpStart({email,password,displayName}))
});
 export default connect(null,mapDispatchToProps)(SignUp);