import React, { useContext } from 'react'
import '../styles/MyOrder.scss'
import OrderItem from '../components/OrderItem.jsx'
import ShoppingCart from '../components/ShoppingCart.jsx'
import AppContext from '../context/AppContext.js'
const MyOrder = () => {

    const {state} = useContext(AppContext);
    return (
        <React.Fragment>
            
             <div className="my-order">
                <div className="my-order-container">
                    <h1 className="title">My order</h1>
                    <OrderItem/>
                    <ShoppingCart/>
                    <ShoppingCart/>
                    <ShoppingCart/>

                </div>
            </div>


        </React.Fragment>
    )
}

export default MyOrder
