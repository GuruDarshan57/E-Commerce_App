import React, { createContext, useState } from 'react'
import Products from '../Product_List'
const Shop_Context = createContext();

const default_cart = () => {
    let cart = {};
    for (let i = 1; i <= Products.length; i++) {
        cart[i] = 0;
    }
    return cart;
}

function ShopContext(props) {
    const [cart, setCart] = useState(default_cart())
    const [fav, setFav] = useState(default_cart())
    const [items, setItems] = useState(0);
    const [fitems, setFitems] = useState(0);
    const addToCart = (id) => {
        setCart((prev) => ({ ...prev, [id]: (prev[id] + 1) }))
        setItems((prev) => prev + 1)
    }
    const removeFromCart = (id) => {
        setCart((prev) => ({ ...prev, [id]: (prev[id] - 1) }))
        setItems((prev) => (prev > 0) ? prev - 1 : 0)
    }
    const addToFav = (id) => {
        setFav((prev) => ({ ...prev, [id]: (prev[id] + 1) }))
        setFitems((prev) => prev + 1)
    }
    const removeFromFav = (id) => {
        setFav((prev) => ({ ...prev, [id]: (prev[id] - 1) }))
        setFitems((prev) => (prev > 0) ? prev - 1 : 0)
    }
    const get_total = () => {
        let total_amount = 0;
        for (let i = 1; i < Products.length + 1; i++) {
            if (cart[i] > 0) {
                total_amount = total_amount + (cart[i] * Products[i - 1].productPrice)
            }
        }
        return total_amount
    }
    const context = { get_total, fitems, fav, cart, addToCart, removeFromCart, items, addToFav, removeFromFav }
    return (
        <Shop_Context.Provider key={Element.productId} value={context}>{props.children}</Shop_Context.Provider>
    )
}

export default ShopContext;
export { Shop_Context }