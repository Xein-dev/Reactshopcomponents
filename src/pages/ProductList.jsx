import React from 'react'
import '../styles/ProductList.scss'
import ProductCard from '../components/ProductCard.jsx'
import useGetProducts from '../hooks/useGetProducts'
import Header from '../components/Header'

const API = 'https://api.escuelajs.co/api/v1/products'


const ProductList = () => {
    
const products = useGetProducts(API)

    return (
        <React.Fragment>
            <Header></Header>
            <section class="main-container">
                <div class="cards-container">

            {products.map(product =>(
                <ProductCard  product={product}  key={product.id}   />
            )
            )
            }

                
      
                </div>
            </section>
        </React.Fragment>
    )
}

export default ProductList;
