import React from 'react';
import Styles from './Product.module.css';

const Product = () => {
  return (
    <div className={Styles.productWrap}>
        <div className={Styles.product}>
            <img src='https://m.media-amazon.com/images/I/613Az4yA4rL._AC_UL600_FMwebp_QL65_.jpg'/>
            <h3>Product name</h3>
            <p>Product Price</p>
            <button>Add to Cart</button>
        </div>
        <div className={Styles.product}>
            <img src='https://m.media-amazon.com/images/I/51-uEp+OhQL._AC_UL600_FMwebp_QL65_.jpg'/>
            <h3>Product name</h3>
            <p>Product Price</p>
            <button>Add to Cart</button>
        </div>
        <div className={Styles.product}>
            <img src='https://m.media-amazon.com/images/I/51-uEp+OhQL._AC_UL600_FMwebp_QL65_.jpg'/>
            <h3>Product name</h3>
            <p>Product Price</p>
            <button>Add to Cart</button>
        </div>
        <div className={Styles.product}>
            <img src='https://m.media-amazon.com/images/I/51-uEp+OhQL._AC_UL600_FMwebp_QL65_.jpg'/>
            <h3>Product name</h3>
            <p>Product Price</p>
            <button>Add to Cart</button>
        </div>
        <div className={Styles.product}>
            <img src='https://m.media-amazon.com/images/I/51-uEp+OhQL._AC_UL600_FMwebp_QL65_.jpg'/>
            <h3>Product name</h3>
            <p>Product Price</p>
            <button>Add to Cart</button>
        </div>
    </div>
  )
}

export default Product