import React from 'react'
import Products from '../Product_List'
import Product from '../Components/Product'
function Shop() {
  return (
    <>
    <div className="shop-con">
    {Products.map((ele)=>{
      return <Product key={ele.productId} data={ele}/>
    })}
    </div>
    </>
  )
}

export default Shop