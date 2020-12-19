import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
const StripeButton = ({price}) => {
    const publishkey= 'pk_test_51HwShACu8boxX1ODEC7q9oYxsz1azbLy9sS2kqf7tRVNZlytGiCf6luVh59cSbYt7fYNNebJJaPAfc0rTmHBVPT200C7R9gShc';
    const priceNew= price*100;
    const onToken = token => {
        axios({
            url:'payment',
            method:"POST",
            data:{
                amount:priceNew,
                token:token
            }
        }).then(response => {
            alert('Payment Successful');
        }).catch(error=>{
            console.log(error);
            alert('Unsuccessful');
        });
    }
    return(
        <StripeCheckout label='Pay Now' name='Shop' billingAddress shippingAddress 
        description={`PAY now ${priceNew}`} amount={priceNew} token={onToken} panelLabel='Pay' stripeKey={publishkey}>

        </StripeCheckout>
    );
}

export default StripeButton;