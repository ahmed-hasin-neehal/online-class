import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
import { Button } from 'react-bootstrap';

const Product = (props) => {
    //console.log(props);
    const {img, title, description, instructor, price} = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div className="product-content">
                <h3 className="product-title">{title}</h3>
                <p>{description}</p>
                <p><small>by: {instructor}</small></p>
                <p>${price}</p>
                <Button variant = "primary"
                onClick= {() => props.handleAddProduct(props.product)}
                ><FontAwesomeIcon icon={faSignInAlt} /> Enroll Now</Button>{' '}
            </div>
            
        </div>
    );
};

export default Product;