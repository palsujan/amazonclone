import React from 'react'
import Styles from './Thanks.module.scss';
const Thanks = () => {
  return (
    <div className={Styles.orderConfrim}>
        <h1>Hello Sujan  Pal</h1>
        <h2>Thank you for your order</h2>
        <h3>Your order number is: 101</h3>
        <h4>Order Total:2400</h4>
        <button>Continue Shopping</button>
    </div>
  )
}

export default Thanks