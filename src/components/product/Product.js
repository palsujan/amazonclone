import React from 'react';
import Styles from './Product.module.scss';

const Product = ({productList}) => {
  return (
    <div className={Styles.productWrap}>
        {
            productList.map((item) => {
                 
                return <div className={Styles.product} key={item.id}>
                    <img src='https://m.media-amazon.com/images/I/613Az4yA4rL._AC_UL600_FMwebp_QL65_.jpg'/>
                    <h3>{item.name}</h3>
                    <p>Product Price</p>
                    <button>Add to Cart</button>
                </div>
            })
        }
    </div>
  )
}

export default Product;