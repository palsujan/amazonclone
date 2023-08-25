import React from 'react';
import Styles from './Banner.module.css';
import Product from '../product/Product';

const banner = () => {
  return (
    <div>
        <div className={Styles.banner}>
            {/* <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Toys/TFAug2023GW/Party-supplies_Desktop_Hero_Aug23-W3_2x_1._CB596944610_.jpg"/> */}
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/MA2023/GW/Aug/Dresses-Jeans_Gateway_PC._CB596922559_.jpg"/>
            <Product/>
        </div>
    </div>
  )
}

export default banner