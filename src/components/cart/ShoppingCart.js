import React from 'react';
import Styles from './ShoppingCart.module.css';
import { useNavigate } from 'react-router';

const ShoppingCart = ({cart, removeFromCart}) => {
    const navigate = useNavigate();
    // console.log("ShoppingCart", cart)

    const handleClick = () => {
        // 👇️ replace set to true
        navigate('/checkout', {replace: true});
      };
  return (
    <div className={Styles.checkout}>
                <div className={Styles.checkout_left}>
            <h3>Hello Sujan</h3>
            <h2 className={Styles.checkout_title}>Your Shopping Basket</h2>
            {
                cart?.line_items?.map((item)=>{
                        return <div className={Styles.checkoutProduct} key={item.id}>
                        <img src={item?.image?.url} />
                        <div className={Styles.checkoutProduct_info}>
                            <p className={Styles.checkoutProduct_title}>{item?.name}</p>
                            <p className={Styles.checkoutProduct_price}>
                                <strong>{item?.price?.formatted_with_symbol} * {item?.quantity} = {cart.currency.symbol} {item?.price?.raw * item?.quantity}</strong>
                            </p>
                            <button onClick={()=>{removeFromCart(item.id)}}>Remove from Basket</button>
                        </div>
                    </div>
                })
            }
            

        </div>
        
        <div className={Styles.checkout_right}>
            <div className={Styles.subtotal}>
                <p>Subtotal ({cart?.total_items}) : <strong>{cart?.subtotal?.formatted_with_symbol}</strong></p>
                <small className={Styles.subtotal_gift}>
                    <input type='checkbox'/> This order contains a gift
                </small>
                <button onClick={handleClick}>Proceed to Checkout</button>
            </div>
        </div>
    </div>
  )
}

export default ShoppingCart;
