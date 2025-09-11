import { createContext, useContext, useState } from "react";

export const SubjectContext = createContext(null);

export const SubjectProvider = (props) => {
    const [subject, setSubject] = useState('')
    return (
    <SubjectContext.Provider value={{subject, setSubject}}>
        {props.children}
    </SubjectContext.Provider>)
}

export const CartContext = createContext(null);

export const useCart = () => useContext(CartContext);


export const CartProvider = (props) => {
    const [items, setItems] = useState([])
    return (
    <CartContext.Provider value={{items, setItems}}>
        {props.children}
    </CartContext.Provider>)
}