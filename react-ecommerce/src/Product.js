import React from 'react'
import "./Product.css";

function product({ title, image, price }) {
  return (
    <div className='product'> 
    <div
    className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating).fill().map((_,i) =>(
            <p></p>
          ))}
        </div>
    </div>
    <img src="https://www.freepik.com/free-psd/cosmetic-packaging-mockup_13517099.htm#query=product&position=16&from_view=search"
    alt=""/>
    <button>Add to Basket</button>
    </div>
    
  );
}

export default product