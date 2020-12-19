import React from 'react';
import './dbutton.styles.scss';
const DButton = ({children,inverted,google,...otherprops}) => (
    <button {...otherprops} className={`${inverted?'inverted':''}  ${google?'google-sign-in':''}  custom-button`  }>
        {children}
    </button>
)
export default DButton;