import Banner from "./components/banner/Banner";
import Header from "./components/header/Header";
import Styles from "classnames"
import Product from "./components/product/Product";
import { BrowserRouter as Router, 
  Route, 
  Routes 
} from "react-router-dom";
import ShoppingCart from "./components/cart/ShoppingCart";
import commerce from "./lib/commerce";
import { useState, useEffect } from "react";
import Checkout from "./components/checkout/Checkout";
import Thanks from "./components/thanks/Thanks";

function App() {
  const [productList, setProductList] = useState([]);
  const [productListByCategory, setProductListByCategory] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [cart, setCart] = useState();


  const fetchProducts = async()=>{
    const response = await commerce.products.list();
    setProductList(response.data)
  }

  const fetchProductsByCategory = async(category)=>{
    const response = await commerce.products.list({
      category_slug:[category]
    });
    setProductListByCategory(response.data)
  }

  const addToCart = async(productId, qty)=>{
    const response = await commerce.cart.add(productId, qty);
    setCart(response.cart);
    console.log("APP_Cart",response);
  }
  const fetchCart = async () =>{
    setCart(await commerce.cart.retrieve())
}

const removeFromCart =async(productId) =>{
  const response = await commerce.cart.remove(productId);
  setCart(response.cart)
}

const fetchCategories = async()=>{
  const response = await commerce.categories.list();
  setCategoryList(response.data);
}
  useEffect(() => {
    fetchProducts();
    fetchCart();
    fetchCategories();
  }, [])


  
  return (
    <Router>
      <div className="App">
        <Header cart={cart} categoryList={categoryList}/>
        <Banner/>
        <Routes>
          <Route exact path="/" 
            element={<Product productList = {productList} addToCart = {addToCart}/>}>
          </Route>
          <Route  path="/cart" element={<ShoppingCart cart={cart} removeFromCart={removeFromCart}/>}></Route>
          <Route  path="/category/:slug" element={<Product productList = {productListByCategory} fetchProductsByCategory={fetchProductsByCategory} addToCart = {addToCart}/>}></Route>
          <Route  path="/checkout" element={<Checkout cart={cart}/>}></Route>
          <Route  path="/thanks" element={<Thanks/>}></Route>
        </Routes>
      </div>
    </Router> 
  );
}

export default App;
