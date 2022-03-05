import React from 'react'
import OrderItem from '../components/OrderItem.jsx'
import ShoppingCart from '../components/ShoppingCart.jsx'


const MyOrderDetail = () => {
    return (
        <React.Fragment>
            
   <aside className="product-detail">
  <div className="title-container">
    <img src="../assets/icons/flechita.svg" alt="arrow" />
    <p className="title">My order</p>
  </div>
  <div className="my-order-content">
		<ShoppingCart/>
		<ShoppingCart/>
		<ShoppingCart/>
   
    <OrderItem/>


    <button className="primary-button">
      Checkout
    </button>
  </div>
</aside>

        </React.Fragment>
    )
}

export default MyOrderDetail
