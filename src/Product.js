import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider';
import { useHistory} from 'react-router-dom';

function Product({ id, title, price, rating, image }) {
    const history = useHistory();
    const [{user}, dispatch] = useStateValue();

    const addToBasket = () => {
        //Add items to basket
        if(user){
            dispatch({
                type: "ADD_TO_BASKET",
                item: {
                    id, title, price, rating, image,
                },
            });
        } else {
            alert("you have to login first!");
            history.push("/login");
        }
        
    };

    return (
        <div className="product">
            <div className="product__info">
            <p>{title}</p>
                <p className="product__price">
                    <small>₹ </small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_) => (
                        <span>⭐</span>
                    ))}
            </div>
        </div>
            <img src={image} alt="product" />
           <button onClick={addToBasket} >Add to basket</button>
        </div>
    )
}

export default Product
