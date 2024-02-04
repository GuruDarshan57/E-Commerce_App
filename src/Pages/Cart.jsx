import React, { useContext } from 'react'
import { Shop_Context } from '../Context/ShopContext'
import Cart_Product from '../Components/Cart_Product'
import Pro_List from '../Product_List'
function Cart() {
  const { get_total, cart, items } = useContext(Shop_Context)
  const total = get_total()
  return (
    <>



      {(items > 0) ? <> <div className='cart-h2'>
        <h3><div className='cart_dis'>
          <div>Items in cart - {items}</div>
          <div>Total - ${total}</div>
          <div><button className='btn btn-primary'>Check Out</button></div>
        </div></h3>
      </div>
        <div className="cart_items">
          {Pro_List.map((ele) => {
            if (cart[ele.productId] > 0) {
              return <Cart_Product key={ele.productId} data={ele} />
            }
          })}
        </div></> : <div className='empty_cart'><h2>Your Cart is Empty 🛒</h2></div>}

    </>
  )
}

export default Cart