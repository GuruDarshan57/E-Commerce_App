import React, { useContext } from 'react'
import Products from '../Product_List'
import Product from '../Components/Product'
import { Shop_Context } from '../Context/ShopContext'

function Favourites() {
  const { fav, fitems } = useContext(Shop_Context)
  return (
    <>
      {fitems > 0 ? (<><div className='fav-h2'>
        <h2>Favourites</h2>
      </div>
        <div className="fav-con">
          {Products.map((ele) => {
            if (fav[ele.productId] > 0) {
              return <Product key={ele.productId} data={ele} />
            }
          })}
        </div></>) : <div className='empty_fav'><h2>Your Favourites is Empty ❤️</h2></div>}


    </>
  )
}

export default Favourites