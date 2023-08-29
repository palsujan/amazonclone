import React from 'react';
import Styles from './Product.module.scss';

const Product = ({productList}) => {
    console.log("ProdusctList", productList);
    // productList?.map((item) => {
    //        return console.log("Product", item);
    // })
  return (
    <div className={Styles.productWrap}>
        {
            productList?.map((item) => {
                 
                return <div className={Styles.product} key={item.id}>
                    <img src={item?.image?.url}/>
                    <h3>{item.name}</h3>
                    <p>{item?.price?.formatted_with_symbol}</p>
                    <button>Add to Cart</button>
                </div>
            })
        }
    </div>
  )
}

export default Product;