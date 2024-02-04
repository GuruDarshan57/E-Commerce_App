import React, { useContext, useState } from 'react'
import { Shop_Context } from '../Context/ShopContext'

function Product(props) {
    const { fav, addToCart, addToFav, removeFromFav } = useContext(Shop_Context);
    const addFav = () => {
        addToFav(props.data.productId)
    }
    const removeFav = () => {
        removeFromFav(props.data.productId)
    }
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={props.data.productImageUrl} className="card-img-top" alt="Product-Image" />
            <div className="card-body">
                <div className="flex_dis">
                    <div>
                        <h5 className="card-title">{props.data.productName}</h5>
                        <h4 className="card-title">$ {props.data.productPrice}</h4>
                    </div>
                    <i className="fa-solid fa-heart" onClick={() => {
                        (fav[props.data.productId] === 0) ? addFav() : removeFav()
                    }} style={{ color: `#${fav[props.data.productId] === 0 ? "00" : "ff"}0000`, fontSize: "35px", marginBottom: "10px" }}></i></div>
                <p className="card-text">{props.data.productDescription}</p>
                <a href="#" className="btn btn-success" onClick={() => { addToCart(props.data.productId) }}>Add to Cart</a>
            </div>
        </div>
    )
}



export default Product