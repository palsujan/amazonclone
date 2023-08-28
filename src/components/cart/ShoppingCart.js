import React from 'react';
import Styles from './ShoppingCart.module.css';

const ShoppingCart = () => {
  return (
    <div className={Styles.checkout}>
        <div className={Styles.checkout_left}>
            <h3>Hello Sujan</h3>
            <h2 className={Styles.checkout_title}>Your Shopping Basket</h2>
            <div className={Styles.checkoutProduct}>
                <img src='https://m.media-amazon.com/images/I/51-uEp+OhQL._AC_UL600_FMwebp_QL65_.jpg' />
                <div className={Styles.checkoutProduct_info}>
                    <p className={Styles.checkoutProduct_title}>Product name</p>
                    <p className={Styles.checkoutProduct_price}>
                        <strong>₹ 600.00 * 1 = ₹ 600</strong>
                    </p>
                    <button>Remove from Basket</button>
                </div>
            </div>
            <div className={Styles.checkoutProduct}>
                <img src='https://m.media-amazon.com/images/I/51-uEp+OhQL._AC_UL600_FMwebp_QL65_.jpg' />
                <div className={Styles.checkoutProduct_info}>
                    <p className={Styles.checkoutProduct_title}>Product name</p>
                    <p className={Styles.checkoutProduct_price}>
                        <strong>₹ 600.00 * 1 = ₹ 600</strong>
                    </p>
                    <button>Remove from Basket</button>
                </div>
            </div>
            <div className={Styles.checkoutProduct}>
                <img src='https://m.media-amazon.com/images/I/51-uEp+OhQL._AC_UL600_FMwebp_QL65_.jpg' />
                <div className={Styles.checkoutProduct_info}>
                    <p className={Styles.checkoutProduct_title}>Product name</p>
                    <p className={Styles.checkoutProduct_price}>
                        <strong>₹ 600.00 * 1 = ₹ 600</strong>
                    </p>
                    <button>Remove from Basket</button>
                </div>
            </div>
        </div>
        <div className={Styles.checkout_right}>
            <div className={Styles.subtotal}>
                <p>Subtotal (2 items) : <strong>₹ 1,299.00</strong></p>
                <small className={Styles.subtotal_gift}>
                    <input type='checkbox'/> This order contains a gift
                </small>
                <button>Proceed to Checkout</button>
            </div>
        </div>
    </div>
  )
}

export default ShoppingCart
