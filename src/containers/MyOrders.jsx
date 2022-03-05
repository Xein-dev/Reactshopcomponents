import React from 'react'
import '../styles/MyOrders.scss'
import  OrderItem from '../components/OrderItem.jsx'
const MyOrders = () => {
    return (
 <React.Fragment>
  <div className="my-order">
  <div className="my-order-container">
    <h1 className="title">My orders</h1>
    <div className="my-order-content">
      <OrderItem/>
      <OrderItem/>
      <OrderItem/>
      <OrderItem/>
    </div>
  </div>
</div>


        </React.Fragment>
    )
}

export default MyOrders
