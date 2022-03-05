import React, {useContext } from 'react'
import '../styles/ProductCard.scss'
import AppContext from '../context/AppContext';
import App from '../routes/App';

const ProductCard = ({product}) => {

    const { addTocart } = useContext(AppContext);

    const handleClick = (item ) =>{
        addTocart(item);
    }

    return (
        <React.Fragment>
            
        <div className="product-card">
            <img src={product.images[0]} alt={product.title} />
             <div className="product-info">
            <div>
            <p>${product.price} </p>
            <p>{product.title}</p>
            </div>
            <figure 
            onClick={() => handleClick(product)}
            >
            <img src="../assets/icons/bt_add_to_cart.svg" alt="add to cart" />
            </figure>
        </div>
        </div>


        </React.Fragment>
    )
}

export default ProductCard;

