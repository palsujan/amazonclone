import React from 'react';
import classNames from 'classnames';
import Styles from './Header.module.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const Header = () => {
  return (
    <>
        <div className={Styles.header}>
            <img  src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'/>

            <div className={Styles.header_search}>
                <input type="text"/>
                <SearchIcon className={Styles.header_searchIcon}/>
            </div>
            <div className={Styles.header_nav}>
                <div className={Styles.header_option}>
                        <span className={Styles.header_optionone}>Hello Sujan</span>
                        <span className={Styles.header_optiontwo}>Sign In</span>
                </div>
                <div className={Styles.header_option}>
                        <span className={Styles.header_optionone}>Return</span>
                        <span className={Styles.header_optiontwo}>& Orders</span>
                </div>
                <div className={Styles.header_option}>
                        <span className={Styles.header_optionone}>Your</span>
                        <span className={Styles.header_optiontwo}>Prime</span>
                </div>
                <div className={Styles.header_optionBasket}>
                    <ShoppingCartIcon/>
                    <span>
                        2
                    </span>
                </div>
            </div>
        </div>
        <div className={Styles.header_bottom}>
            <ul>
                <li>All</li>
                <li>Mobile</li>
                <li>Category</li>
                <li>Computer</li>
                <li>Cloth</li>
                <li>Electronics</li>
                <li>
                    <img src='https://m.media-amazon.com/images/G/31/prime/ACQ/Homepage_DesktopSWM_400x39._CB593034217_.jpg'/>
                </li>
            </ul>
        </div>
    </>
    
  )
}

export default Header