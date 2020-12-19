import React from 'react';

import {ErrorImageContainer,ErrorImageText,ErrorImageOverlay} from './error.styles';

class ErrorBoundary extends React.Component {
    constructor(){
        super();
        this.state = {
            hasError : false
        };
    }

    static getDerivedStateFromError(error){
        return {hasError:true};
    }

    componentDidCatch(error,info){

    }

    render(){
        if(this.state.hasError){
         return(   <ErrorImageOverlay>
                <ErrorImageContainer imageUrl='https://i.imgur.com/lKJiT77.png'></ErrorImageContainer>
                <ErrorImageText>A Dog Ate this Page</ErrorImageText>
            </ErrorImageOverlay>
         )
        }
        return this.props.children;

    }
}

export default ErrorBoundary;