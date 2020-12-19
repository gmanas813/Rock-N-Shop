import React from 'react';
import './forminput.styles.scss';
 
import {Link} from 'react-router-dom';
const FormInput = ({handleChange,label,...otherprops}) => (
    <div className='group'>
        <input className='form-input' 
        onChange={handleChange}
        {...otherprops}>
        </input>
        {
            label?(
            <label className={`${otherprops.value.length?'shrink':''}  form-input-label`}>
                {label}
            </label>
        ):null
            }
    </div>
)
export default FormInput;