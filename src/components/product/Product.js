import React from 'react';
import Styles from './Product.module.scss';

const Product = ({productList, addToCart}) => {
    // console.log("ProdusctList", productList);
    console.log("addToCart", addToCart);
  return (
    <div className={Styles.productWrap}>
        {
            productList?.map((item) => {
                 
                return <div className={Styles.product} key={item.id}>
                    <img src={item?.image?.url}/>
                    <h3>{item.name}</h3>
                    <p>{item?.price?.formatted_with_symbol}</p>
                    <button onClick={()=>addToCart(item.id, 1)}>Add to Cart</button>
                </div>
            })
        }
    </div>
  )
}

export default Product;