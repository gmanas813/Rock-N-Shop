export const addItemToCart = (cartItems,item) => {
    const existitem=cartItems.find(it => it.id===item.id);
    if(existitem){
        return cartItems.map(it =>
            it.id===item.id? {...it,quantity:it.quantity+1}: it
            )
    }
    return [...cartItems,{...item,quantity:1}]
}

export const removeItem = (cartItems,item) => {
    const existitem=cartItems.find(it => it.id===item.id);
    if(existitem.quantity==1){
        return cartItems.filter(it =>
             it.id !== item.id
            );
    }

    return cartItems.map( it => it.id==item.id ? {...it,quantity:it.quantity-1} : it );
}