import React from 'react';
import Styles from './Header.module.scss';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';

const Header = ({cart, categoryList}) => {
    console.log("Header_props", cart);
  return (
    <>
        <div className={Styles.header}>
            <Link to="/">
                <img  src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'/>
            </Link>
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
                    <Link to="/cart">
                    <ShoppingCartIcon/>
                    <span>
                        {cart?.total_items}
                        {console.log(cart?.total_items)}
                    </span>
                    </Link>
                </div>
            </div>
        </div>
        <div className={Styles.header_bottom}>
            <ul> 
                {
                    categoryList?.map(category=>{
                        return <li key={category.id}>
                            <Link to = {`category/${category.slug}`}>
                                {category.name}
                            </Link>
                        </li>
                    })
                }
                
                <li>
                    <img src='https://m.media-amazon.com/images/G/31/prime/ACQ/Homepage_DesktopSWM_400x39._CB593034217_.jpg'/>
                </li>
            </ul>
        </div>
    </>
    
  )
}

export default Header