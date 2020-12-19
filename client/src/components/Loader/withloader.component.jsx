import React from 'react';

import {SpinnerContainer,SpinnerOverlay} from './withloader.styles';
const withLoader = WrappedComponent => {
    const Spinner = ({isLoading,...otherProps}) => {
        return isLoading ? (
            <SpinnerOverlay> 
                <SpinnerContainer></SpinnerContainer>
            </SpinnerOverlay>
         ) : (
             <WrappedComponent {...otherProps}></WrappedComponent>
         );
    }
    return Spinner;
} 

export default withLoader;