import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;

    const total = (cart.reduce((total,prd) => total + prd.price,0)).toFixed(2) ;

    return (
        <div className="cart-content">
            <h3>Purchase Summary</h3>
            <p>Course Purchased: {cart.length}</p>
            <p>Total Cost: ${total}</p>
        </div>
    );
};

export default Cart;