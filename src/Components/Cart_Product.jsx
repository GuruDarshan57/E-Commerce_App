import React, { useContext, useState } from 'react'
import { Shop_Context } from '../Context/ShopContext'

function Cart_Product(props) {
    const { cart, addToCart, removeFromCart } = useContext(Shop_Context);
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={props.data.productImageUrl} className="card-img-top" alt="Product-Image" />
            <div className="card-body">
                <h5 className="card-title">{props.data.productName}</h5>
                <h4 className="card-title">$ {props.data.productPrice}</h4>
                <h4 className="card-title"></h4>
                <p className="card-text">{props.data.productDescription}</p>
                <div className="inc_dec">
                    <button className='inc_button' onClick={() => {
                        addToCart(props.data.productId)
                    }} >+</button>
                    <div className='qty_dis'>{cart[props.data.productId]}</div>
                    <button className='dec_button' onClick={() => {
                        removeFromCart(props.data.productId)
                    }} >-</button>
                </div>

            </div>
        </div>
    )
}

export default Cart_Product