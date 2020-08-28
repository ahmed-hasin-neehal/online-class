import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Courses.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Courses = () => {
    //console.log(fakeData);
    const first15 = fakeData.slice(0,15);
    const[products] = useState(first15);
    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) =>{
        console.log('Product added', product);
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (

        <div className="course-container">
            <div className="product-container">
                <ul>
                    {
                    products.map(pd => <Product 
                        handleAddProduct = {handleAddProduct}
                        product={pd} 
                        ></Product>)
                    }
                </ul>
            </div>

            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
        
        
    );
};

export default Courses;