import React from 'react';
import Styles from './Checkout.module.scss';

const Checkout = () => {
  return (
    <div className={Styles.Checkout_wrap}>
        <h2>Shipping Details</h2>
        <form>
            <div className={Styles.chakoutForm}>
                <div className={Styles.Checkout_column}>
                        <label>First Name*</label>
                        <input required name='Firstname'/>
                </div>
                <div className={Styles.Checkout_column}>
                        <label>Last Name*</label>
                        <input required name='Lastname'/>
                </div>
                <div className={Styles.Checkout_column}>
                        <label>Address*</label>
                        <input required name='Address'/>
                </div>
                <div className={Styles.Checkout_column}>
                        <label>Email*</label>
                        <input required name='Email'/>
                </div>
                <div className={Styles.Checkout_column}>
                        <label>City*</label>
                        <input required name='City'/>
                </div>
                <div className={Styles.Checkout_column}>
                        <label>PinCode*</label>
                        <input required name='PinCode'/>
                </div>
                <div className={Styles.Checkout_column}>
                        <label>Shipping Country*</label>
                        <select name='country'>
                            <option>India</option>
                        </select>
                </div>
                <div className={Styles.Checkout_column}>
                        <label>Shipping Subdivision*</label>
                        <select name='subdivision'>
                            <option>Kumarghat</option>
                        </select>
                </div>
                <div className={Styles.Checkout_column}>
                        <label>&nbsp;</label>
                        <button>Pay Now</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Checkout