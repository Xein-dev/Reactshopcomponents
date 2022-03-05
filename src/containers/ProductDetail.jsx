import React from 'react'
import '../styles/ProductDetail.scss'
import ProductInfo from '../components/ProductInfo.jsx'
const ProductDetail = () => {
    return (
        <React.Fragment>
     <aside className="product-detail">
        <div className="product-detail-close">
            <img src="../assets/icons/icon_close.png" alt="close" />
        </div>
        <ProductInfo/>
        
    </aside>



        </React.Fragment>
    )
}

export default ProductDetail
