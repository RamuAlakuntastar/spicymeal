import React from "react";



const contextContent = React.createContext({
    cartList : [],
    addCartIteam :  () => {},
    deleteCartIteam : () => {}
})


export default contextContent