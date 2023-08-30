import React from 'react';
import Styles from './Product.module.scss';
// import { useParams } from 'react-router-dom';
import { useEffect } from "react";
import { useParams } from "react-router";

const Product = ({productList, addToCart, fetchProductsByCategory}) => {
    let slug = useParams()
    console.log(slug.slug);

    useEffect(() => {
        if(slug.slug){fetchProductsByCategory(slug.slug)}
    },[slug.slug])
    

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